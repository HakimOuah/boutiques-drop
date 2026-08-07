import { anthropic } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { extractJSONObject } from "@/lib/utils";
import { NICHE_ANALYST_PROMPT } from "./prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonInput = any;

interface NicheAnalysisResult {
  totalScore: number;
  verdict: string;
  volumeScore?: number;
  cpcScore?: number;
  concurrenceScore?: number;
  margeScore?: number;
  fournisseursScore?: number;
  avgCPC?: number;
  avgVolume?: number;
  avgKD?: number;
  priceRangeMin?: number;
  priceRangeMax?: number;
  keywords?: string[];
  analysis?: string;
}

interface NicheAnalysisInput {
  nicheName: string;
  nicheId?: string;
}

export async function analyzeNiche(
  input: NicheAnalysisInput,
  onLog: (msg: string) => void
) {
  const startTime = Date.now();

  // Create AgentRun record
  const agentRun = await prisma.agentRun.create({
    data: {
      agentType: "niche-analyst",
      status: "running",
      input: { nicheName: input.nicheName } as JsonInput,
      nicheId: input.nicheId || null,
    },
  });

  onLog(`[niche-analyst] Démarrage de l'analyse pour "${input.nicheName}"...`);

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: NICHE_ANALYST_PROMPT,
      messages: [
        {
          role: "user",
          content: `Analyse la niche "${input.nicheName}" pour du dropshipping Google Ads en France. Fais une recherche web approfondie et retourne ton analyse au format JSON demandé.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";
    onLog(`[niche-analyst] Réponse reçue (${text.length} caractères)`);

    const result = extractJSONObject<NicheAnalysisResult>(text);
    if (!result) {
      throw new Error("Impossible de parser la réponse JSON de l'agent");
    }

    onLog(
      `[niche-analyst] Score: ${result.totalScore}/100 — Verdict: ${result.verdict}`
    );

    // Update or create the Niche with scores
    const nicheData = {
      volumeScore: result.volumeScore ?? null,
      cpcScore: result.cpcScore ?? null,
      concurrenceScore: result.concurrenceScore ?? null,
      margeScore: result.margeScore ?? null,
      fournisseursScore: result.fournisseursScore ?? null,
      totalScore: result.totalScore ?? null,
      avgCPC: result.avgCPC ?? null,
      avgVolume: result.avgVolume ?? null,
      avgKD: result.avgKD ?? null,
      priceRangeMin: result.priceRangeMin ?? null,
      priceRangeMax: result.priceRangeMax ?? null,
      verdict: result.verdict ?? null,
      keywords: (result.keywords ?? null) as JsonInput,
    };

    let nicheId = input.nicheId;

    if (nicheId) {
      await prisma.niche.update({
        where: { id: nicheId },
        data: nicheData,
      });
      onLog(`[niche-analyst] Niche mise à jour (${nicheId})`);
    } else {
      const slug = input.nicheName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const niche = await prisma.niche.upsert({
        where: { slug },
        update: nicheData,
        create: {
          name: input.nicheName,
          slug,
          source: "agent",
          ...nicheData,
        },
      });
      nicheId = niche.id;
      onLog(`[niche-analyst] Niche créée/mise à jour (${nicheId})`);
    }

    const duration = Math.round((Date.now() - startTime) / 1000);

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: {
        status: "completed",
        output: result as JsonInput,
        duration,
        nicheId,
      },
    });

    await prisma.activityLog.create({
      data: {
        type: "agent_completed",
        message: `Niche Analyst: "${input.nicheName}" — ${result.verdict} (${result.totalScore}/100)`,
        metadata: { agentRunId: agentRun.id, nicheId } as JsonInput,
      },
    });

    onLog(`[niche-analyst] Terminé en ${duration}s`);

    return { success: true, result, nicheId, agentRunId: agentRun.id };
  } catch (error) {
    const duration = Math.round((Date.now() - startTime) / 1000);

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: {
        status: "failed",
        output: {
          error: error instanceof Error ? error.message : "Erreur inconnue",
        } as JsonInput,
        duration,
      },
    });

    onLog(
      `[niche-analyst] ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`
    );

    throw error;
  }
}
