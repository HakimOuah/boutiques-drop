import Anthropic from "@anthropic-ai/sdk";
import { anthropic } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { extractJSON } from "@/lib/utils";
import { getKeywordMetrics, aggregateMetrics } from "@/lib/dataforseo";
import { NICHE_DISCOVERY_PROMPT } from "./prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonInput = any;

interface DiscoveredNiche {
  name: string;
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

interface DiscoveryInput {
  seed?: string;
}

function scoreVolume(avgVolume: number): number {
  if (avgVolume >= 5000) return 20;
  if (avgVolume >= 2000) return 16;
  if (avgVolume >= 1000) return 12;
  if (avgVolume >= 500) return 8;
  if (avgVolume >= 100) return 4;
  return 2;
}

function scoreCPC(avgCPC: number): number {
  if (avgCPC < 0.5) return 20;
  if (avgCPC < 1) return 17;
  if (avgCPC < 2) return 14;
  if (avgCPC < 3) return 10;
  if (avgCPC < 5) return 6;
  return 3;
}

function scoreCompetition(avgKD: number): number {
  if (avgKD < 20) return 20;
  if (avgKD < 40) return 16;
  if (avgKD < 60) return 12;
  if (avgKD < 80) return 8;
  return 4;
}

function computeVerdict(score: number): string {
  if (score >= 60) return "GO";
  if (score >= 40) return "MAYBE";
  return "NO-GO";
}

const MAX_RETRIES = 3;
const RETRY_BASE_DELAY_MS = 60_000; // 60s base (rate limit is per minute)

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Stream a Claude API call with real-time logging and automatic retry on rate limits.
 */
async function streamClaudeCall(
  params: {
    system: string;
    messages: Anthropic.MessageParam[];
  },
  onLog: (msg: string) => void
): Promise<{ message: Anthropic.Message; text: string }> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      let text = "";

      const stream = anthropic.messages.stream({
        model: "claude-sonnet-4-20250514",
        max_tokens: 16000,
        system: params.system,
        tools: [
          {
            type: "web_search_20250305",
            name: "web_search",
            max_uses: 10,
          },
        ],
        messages: params.messages,
      });

      stream.on("contentBlock", (block) => {
        if (block.type === "server_tool_use") {
          const toolInput = block.input as { query?: string };
          onLog(
            `[niche-discovery] 🔍 Recherche web : "${toolInput.query || "..."}"`
          );
        } else if (block.type === "web_search_tool_result") {
          const results = Array.isArray(block.content) ? block.content : [];
          const searchResults = results.filter(
            (r: { type: string }) => r.type === "web_search_result"
          );
          onLog(
            `[niche-discovery] ✅ ${searchResults.length} résultats trouvés`
          );
        } else if (block.type === "text") {
          text += block.text;
        }
      });

      const message = await stream.finalMessage();
      return { message, text };
    } catch (error) {
      const isRateLimit =
        error instanceof Error && error.message.includes("429");

      if (isRateLimit && attempt < MAX_RETRIES) {
        const delayMs = RETRY_BASE_DELAY_MS * (attempt + 1);
        const delaySec = Math.round(delayMs / 1000);
        onLog(
          `[niche-discovery] ⏳ Rate limit atteint — pause ${delaySec}s avant retry (${attempt + 1}/${MAX_RETRIES})...`
        );
        await sleep(delayMs);
        continue;
      }

      throw error;
    }
  }

  throw new Error("Max retries exceeded");
}

export async function discoverNiches(
  input: DiscoveryInput,
  onLog: (msg: string) => void
) {
  const startTime = Date.now();

  const agentRun = await prisma.agentRun.create({
    data: {
      agentType: "niche-discovery",
      status: "running",
      input: { seed: input.seed || null } as JsonInput,
    },
  });

  const seedLabel = input.seed ? `"${input.seed}"` : "exploration libre";
  onLog(`[niche-discovery] Démarrage — ${seedLabel}`);

  try {
    const seedInstruction = input.seed
      ? `CATÉGORIE SEED : Concentre tes recherches autour de la catégorie "${input.seed}" et ses sous-niches. Explore les tendances, produits et opportunités spécifiques à ce domaine.`
      : `PAS DE CATÉGORIE IMPOSÉE : Explore librement toutes les catégories (maison, sport, tech, beauté, animaux, jardin, auto, enfants, bureau, outdoor...). Cherche les tendances montantes.`;

    const systemPrompt = NICHE_DISCOVERY_PROMPT.replace(
      "{seedInstruction}",
      seedInstruction
    );

    // Phase 1: Claude discovers niches via web search (STREAMING)
    onLog(`[niche-discovery] Phase 1 — Recherche web autonome...`);

    let messages: Anthropic.MessageParam[] = [
      {
        role: "user",
        content: input.seed
          ? `Découvre 8-12 niches dropshipping rentables dans la catégorie "${input.seed}". Utilise la recherche web pour explorer les tendances, best sellers et concurrence. Pour chaque niche, propose 3-5 keywords pertinents pour Google Ads France. Retourne le tableau JSON.`
          : `Découvre 8-12 niches dropshipping rentables en explorant librement le web. Cherche les tendances montantes, best sellers et faible concurrence. Pour chaque niche, propose 3-5 keywords pertinents pour Google Ads France. Retourne le tableau JSON.`,
      },
    ];

    let finalText = "";
    const MAX_CONTINUATIONS = 5;

    for (let iteration = 0; iteration <= MAX_CONTINUATIONS; iteration++) {
      onLog(
        iteration === 0
          ? `[niche-discovery] Appel API Claude avec web search (streaming)...`
          : `[niche-discovery] Continuation ${iteration}/${MAX_CONTINUATIONS}...`
      );

      const { message: response, text } = await streamClaudeCall(
        { system: systemPrompt, messages },
        onLog
      );

      finalText += text;

      // Check if we need to continue
      if (
        response.stop_reason === "end_turn" ||
        response.stop_reason === "stop_sequence"
      ) {
        onLog(`[niche-discovery] Recherche web terminée`);
        break;
      }

      if (
        (response.stop_reason === "pause_turn" ||
          response.stop_reason === "max_tokens") &&
        iteration < MAX_CONTINUATIONS
      ) {
        onLog(
          `[niche-discovery] Réponse incomplète (${response.stop_reason}), continuation...`
        );
        messages = [
          ...messages,
          { role: "assistant", content: response.content },
          { role: "user", content: "Continue." },
        ];
      } else {
        onLog(`[niche-discovery] Arrêt après ${iteration + 1} itérations`);
        break;
      }
    }

    onLog(
      `[niche-discovery] Parsing des résultats (${finalText.length} caractères)...`
    );

    const niches = extractJSON<DiscoveredNiche>(finalText);
    if (!niches || niches.length === 0) {
      throw new Error("Aucune niche trouvée dans la réponse");
    }

    onLog(`[niche-discovery] ${niches.length} niches découvertes par Claude`);

    // Phase 2: Enrich with real DataForSEO keyword data
    onLog(`[niche-discovery] Phase 2 — Enrichissement DataForSEO (volumes/CPC réels)...`);

    const allKeywords: string[] = [];
    const nicheKeywordMap: Map<number, string[]> = new Map();

    for (let i = 0; i < niches.length; i++) {
      const kws = niches[i].keywords ?? [];
      nicheKeywordMap.set(i, kws);
      allKeywords.push(...kws);
    }

    const keywordMetricsMap: Map<string, { volume: number; cpc: number; kd: number }> = new Map();

    if (allKeywords.length > 0) {
      try {
        const uniqueKeywords = Array.from(new Set(allKeywords));
        onLog(
          `[niche-discovery] 📊 DataForSEO: ${uniqueKeywords.length} keywords à vérifier...`
        );

        const metrics = await getKeywordMetrics(uniqueKeywords);

        for (const m of metrics) {
          keywordMetricsMap.set(m.keyword.toLowerCase(), {
            volume: m.searchVolume,
            cpc: m.cpc,
            kd: m.competitionIndex,
          });
        }

        onLog(
          `[niche-discovery] 📊 DataForSEO: ${metrics.length} keywords enrichis`
        );
      } catch (err) {
        onLog(
          `[niche-discovery] ⚠️ DataForSEO indisponible: ${err instanceof Error ? err.message : "erreur"} — utilisation des estimations Claude`
        );
      }
    }

    // Persist each niche in DB
    const savedNiches: { id: string; name: string; score: number; verdict: string }[] = [];

    for (let i = 0; i < niches.length; i++) {
      const niche = niches[i];
      const nicheKws = nicheKeywordMap.get(i) ?? [];

      const kwMetrics = nicheKws
        .map((kw) => keywordMetricsMap.get(kw.toLowerCase()))
        .filter(Boolean) as { volume: number; cpc: number; kd: number }[];

      let avgVolume = niche.avgVolume ?? 0;
      let avgCPC = niche.avgCPC ?? 0;
      let avgKD = niche.avgKD ?? 0;
      let volumeScore = niche.volumeScore ?? 0;
      let cpcScore = niche.cpcScore ?? 0;
      let concurrenceScore = niche.concurrenceScore ?? 0;
      let totalScore = niche.totalScore ?? 0;
      let verdict = niche.verdict ?? "MAYBE";
      let dataSource = "estimated";

      if (kwMetrics.length > 0) {
        const agg = aggregateMetrics(
          kwMetrics.map((m) => ({
            keyword: "",
            searchVolume: m.volume,
            cpc: m.cpc,
            competition: "",
            competitionIndex: m.kd,
          }))
        );
        avgVolume = agg.avgVolume;
        avgCPC = agg.avgCPC;
        avgKD = agg.avgKD;
        volumeScore = scoreVolume(avgVolume);
        cpcScore = scoreCPC(avgCPC);
        concurrenceScore = scoreCompetition(avgKD);
        const margeScore = niche.margeScore ?? 15;
        const fournisseursScore = niche.fournisseursScore ?? 10;
        totalScore = volumeScore + cpcScore + concurrenceScore + margeScore + fournisseursScore;
        verdict = computeVerdict(totalScore);
        dataSource = "dataforseo";

        onLog(
          `[niche-discovery] 📊 ${niche.name}: vol=${avgVolume} | CPC=${avgCPC}€ | KD=${avgKD} → ${totalScore}/100 (${verdict}) [DataForSEO]`
        );
      }

      const slug = niche.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const nicheData = {
        volumeScore: volumeScore ?? null,
        cpcScore: cpcScore ?? null,
        concurrenceScore: concurrenceScore ?? null,
        margeScore: niche.margeScore ?? null,
        fournisseursScore: niche.fournisseursScore ?? null,
        totalScore: totalScore ?? null,
        avgCPC: avgCPC ?? null,
        avgVolume: avgVolume ?? null,
        avgKD: avgKD ?? null,
        priceRangeMin: niche.priceRangeMin ?? null,
        priceRangeMax: niche.priceRangeMax ?? null,
        verdict: verdict ?? null,
        keywords: (niche.keywords ?? null) as JsonInput,
        description: niche.analysis ?? null,
      };

      const saved = await prisma.niche.upsert({
        where: { slug },
        update: nicheData,
        create: {
          name: niche.name,
          slug,
          source: "discovery",
          ...nicheData,
        },
      });

      savedNiches.push({
        id: saved.id,
        name: niche.name,
        score: totalScore,
        verdict,
      });

      onLog(
        `[niche-discovery] 💾 ${niche.name} — ${totalScore}/100 (${verdict}) [${dataSource}]`
      );
    }

    const duration = Math.round((Date.now() - startTime) / 1000);

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: {
        status: "completed",
        output: { niches: savedNiches } as JsonInput,
        duration,
      },
    });

    await prisma.activityLog.create({
      data: {
        type: "agent_completed",
        message: `Niche Discovery: ${savedNiches.length} niches découvertes (${seedLabel})`,
        metadata: { agentRunId: agentRun.id } as JsonInput,
      },
    });

    onLog(`[niche-discovery] Terminé en ${duration}s — ${savedNiches.length} niches sauvegardées`);

    return {
      success: true,
      niches: savedNiches,
      count: savedNiches.length,
      agentRunId: agentRun.id,
    };
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
      `[niche-discovery] ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`
    );

    throw error;
  }
}
