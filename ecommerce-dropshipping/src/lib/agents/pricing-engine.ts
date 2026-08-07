import { anthropic } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { extractJSONObject } from "@/lib/utils";
import { PRICING_ENGINE_PROMPT } from "./prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonInput = any;

interface PricingInput {
  productId: string;
  purchasePrice: number;
  shippingCost: number;
  salePriceTTC?: number;
  shippingClient?: number;
  cpaEstimate?: number;
}

interface PricingResult {
  purchasePrice: number;
  shippingCost: number;
  shippingClient: number;
  salePriceHT: number;
  salePriceTTC: number;
  tva: number;
  stripeCommission: number;
  shopifyCommission: number;
  cpaHT: number;
  fixedCosts: number;
  netMargin: number;
  netMarginPct: number;
  verdict: string;
  adjustments?: { action: string; impact: string }[];
  analysis?: string;
}

export async function runPricingEngine(
  input: PricingInput,
  onLog: (msg: string) => void
) {
  const startTime = Date.now();

  const agentRun = await prisma.agentRun.create({
    data: {
      agentType: "pricing-engine",
      status: "running",
      input: input as JsonInput,
      productId: input.productId,
    },
  });

  onLog(`[pricing-engine] Démarrage du calcul de marge...`);

  try {
    // Step 1: Deterministic calculation
    const salePriceTTC = input.salePriceTTC || 0;
    const salePriceHT = salePriceTTC / 1.2;
    const tva = salePriceTTC - salePriceHT;
    const stripeCommission = salePriceTTC * 0.03;
    const shopifyCommission = salePriceTTC * 0.02;
    const shippingClient = input.shippingClient || 0;
    const cpaEstimate = input.cpaEstimate || salePriceTTC * 0.15; // default 15% of TTC
    const cpaHT = cpaEstimate / 1.2;
    const fixedCosts = 53 / 30; // 53€/month / 30 sales per month estimate

    const netMargin =
      salePriceHT -
      input.purchasePrice -
      input.shippingCost -
      shippingClient -
      stripeCommission -
      shopifyCommission -
      cpaHT -
      fixedCosts;

    const netMarginPct = salePriceHT > 0 ? (netMargin / salePriceHT) * 100 : 0;

    const deterministicVerdict =
      netMarginPct >= 30
        ? "WINNER"
        : netMarginPct >= 20
          ? "GO"
          : netMarginPct >= 10
            ? "MAYBE"
            : "FAIBLE";

    onLog(
      `[pricing-engine] Calcul déterministe: marge nette = ${netMargin.toFixed(2)}€ (${netMarginPct.toFixed(1)}%) — ${deterministicVerdict}`
    );

    // Step 2: Claude for verdict/adjustments
    onLog(`[pricing-engine] Consultation Claude pour analyse et ajustements...`);

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2048,
      system: PRICING_ENGINE_PROMPT,
      messages: [
        {
          role: "user",
          content: `Analyse ce pricing pour un produit dropshipping :

Prix d'achat fournisseur : ${input.purchasePrice}€
Shipping fournisseur : ${input.shippingCost}€
Prix de vente TTC : ${salePriceTTC}€
Prix de vente HT : ${salePriceHT.toFixed(2)}€
TVA (20%) : ${tva.toFixed(2)}€
Commission Stripe (3%) : ${stripeCommission.toFixed(2)}€
Commission Shopify (2%) : ${shopifyCommission.toFixed(2)}€
Shipping client : ${shippingClient}€
CPA estimé HT : ${cpaHT.toFixed(2)}€
Charges fixes lissées : ${fixedCosts.toFixed(2)}€/vente

MARGE NETTE : ${netMargin.toFixed(2)}€ (${netMarginPct.toFixed(1)}%)

Donne ton verdict et des ajustements si la marge est insuffisante. Retourne au format JSON demandé.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    let finalResult: PricingResult;

    try {
      const claudeResult = extractJSONObject<PricingResult>(text);
      finalResult = {
        purchasePrice: input.purchasePrice,
        shippingCost: input.shippingCost,
        shippingClient,
        salePriceHT,
        salePriceTTC,
        tva,
        stripeCommission,
        shopifyCommission,
        cpaHT,
        fixedCosts,
        netMargin,
        netMarginPct,
        verdict: claudeResult.verdict || deterministicVerdict,
        adjustments: claudeResult.adjustments,
        analysis: claudeResult.analysis,
      };
    } catch {
      onLog(`[pricing-engine] Parsing Claude échoué, utilisation du calcul déterministe`);
      finalResult = {
        purchasePrice: input.purchasePrice,
        shippingCost: input.shippingCost,
        shippingClient,
        salePriceHT,
        salePriceTTC,
        tva,
        stripeCommission,
        shopifyCommission,
        cpaHT,
        fixedCosts,
        netMargin,
        netMarginPct,
        verdict: deterministicVerdict,
      };
    }

    onLog(`[pricing-engine] Verdict final: ${finalResult.verdict}`);

    // Save PricingResult
    await prisma.pricingResult.create({
      data: {
        productId: input.productId,
        purchasePrice: finalResult.purchasePrice,
        shippingCost: finalResult.shippingCost,
        shippingClient: finalResult.shippingClient,
        salePriceHT: finalResult.salePriceHT,
        salePriceTTC: finalResult.salePriceTTC,
        tva: finalResult.tva,
        stripeCommission: finalResult.stripeCommission,
        shopifyCommission: finalResult.shopifyCommission,
        cpaHT: finalResult.cpaHT,
        fixedCosts: finalResult.fixedCosts,
        netMargin: finalResult.netMargin,
        netMarginPct: finalResult.netMarginPct,
        verdict: finalResult.verdict,
        adjustments: (finalResult.adjustments || null) as JsonInput,
      },
    });

    // Update product margin verdict
    await prisma.product.update({
      where: { id: input.productId },
      data: {
        netMargin: finalResult.netMargin,
        netMarginPct: finalResult.netMarginPct,
        marginVerdict: finalResult.verdict,
      },
    });

    const duration = Math.round((Date.now() - startTime) / 1000);

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: {
        status: "completed",
        output: finalResult as JsonInput,
        duration,
      },
    });

    onLog(`[pricing-engine] Terminé en ${duration}s`);

    return { success: true, result: finalResult, agentRunId: agentRun.id };
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
      `[pricing-engine] ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`
    );

    throw error;
  }
}
