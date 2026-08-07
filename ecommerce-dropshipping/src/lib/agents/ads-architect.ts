import { anthropic } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { extractJSONObject } from "@/lib/utils";
import { ADS_ARCHITECT_PROMPT } from "./prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonInput = any;

interface AdsArchitectInput {
  productId: string;
  productName: string;
  salePriceTTC?: number;
  nicheKeywords?: string[];
  campaignType?: "search" | "shopping" | "pmax";
}

interface CampaignResult {
  name: string;
  type: string;
  structure: Record<string, unknown>;
  negativeKeywords: string[];
  adCopy: { headlines?: string[]; descriptions?: string[] };
  biddingStrategy: string;
  dailyBudget: number;
  targetCPA?: number;
  targetROAS?: number;
  scalingPlan?: Record<string, string>;
}

export async function generateCampaign(
  input: AdsArchitectInput,
  onLog: (msg: string) => void
) {
  const startTime = Date.now();

  const agentRun = await prisma.agentRun.create({
    data: {
      agentType: "ads-architect",
      status: "running",
      input: { productName: input.productName, campaignType: input.campaignType } as JsonInput,
      productId: input.productId,
    },
  });

  const campaignType = input.campaignType || "search";
  onLog(`[ads-architect] Création campagne ${campaignType} pour "${input.productName}"...`);

  try {
    const priceStr = input.salePriceTTC
      ? `\nPrix de vente TTC : ${input.salePriceTTC}€`
      : "";
    const keywordsStr = input.nicheKeywords?.length
      ? `\nKeywords niche : ${input.nicheKeywords.join(", ")}`
      : "";

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: ADS_ARCHITECT_PROMPT,
      messages: [
        {
          role: "user",
          content: `Crée une campagne Google Ads de type "${campaignType}" pour le produit "${input.productName}".${priceStr}${keywordsStr}\n\nMarché cible : France. Retourne au format JSON demandé.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";
    onLog(`[ads-architect] Réponse reçue (${text.length} caractères)`);

    const result = extractJSONObject<CampaignResult>(text);

    onLog(`[ads-architect] Campagne: "${result.name}" — Budget: ${result.dailyBudget}€/jour`);

    // Create Campaign
    const campaign = await prisma.campaign.create({
      data: {
        productId: input.productId,
        name: result.name || `${campaignType} — ${input.productName}`,
        type: result.type || campaignType,
        structure: result.structure as JsonInput,
        negativeKeywords: result.negativeKeywords as JsonInput,
        adCopy: result.adCopy as JsonInput,
        biddingStrategy: result.biddingStrategy || null,
        dailyBudget: result.dailyBudget || null,
        targetCPA: result.targetCPA || null,
        targetROAS: result.targetROAS || null,
        scalingPlan: (result.scalingPlan || null) as JsonInput,
        status: "draft",
      },
    });

    const duration = Math.round((Date.now() - startTime) / 1000);

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: {
        status: "completed",
        output: result as JsonInput,
        duration,
      },
    });

    await prisma.activityLog.create({
      data: {
        type: "agent_completed",
        message: `Ads Architect: campagne "${result.name}" créée pour "${input.productName}"`,
        metadata: { agentRunId: agentRun.id, campaignId: campaign.id } as JsonInput,
      },
    });

    onLog(`[ads-architect] Campagne créée (${campaign.id}) en ${duration}s`);

    return {
      success: true,
      result,
      campaignId: campaign.id,
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
      `[ads-architect] ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`
    );
    throw error;
  }
}
