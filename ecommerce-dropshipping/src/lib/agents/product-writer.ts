import { anthropic } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { extractJSONObject } from "@/lib/utils";
import { PRODUCT_WRITER_PROMPT } from "./prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonInput = any;

interface ProductWriterInput {
  productId: string;
  productName: string;
  productDescription?: string;
  nicheKeywords?: string[];
}

interface ProductPageResult {
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  bulletPoints: string[];
  technicalSpecs: Record<string, string>;
  seoKeywords?: string[];
  schemaMarkup?: string;
}

export async function generateProductPage(
  input: ProductWriterInput,
  onLog: (msg: string) => void
) {
  const startTime = Date.now();

  const agentRun = await prisma.agentRun.create({
    data: {
      agentType: "product-writer",
      status: "running",
      input: { productName: input.productName } as JsonInput,
      productId: input.productId,
    },
  });

  onLog(`[product-writer] Génération de la fiche pour "${input.productName}"...`);

  try {
    const keywordsStr = input.nicheKeywords?.length
      ? `\nKeywords de la niche : ${input.nicheKeywords.join(", ")}`
      : "";

    const descStr = input.productDescription
      ? `\nDescription existante : ${input.productDescription}`
      : "";

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: PRODUCT_WRITER_PROMPT,
      messages: [
        {
          role: "user",
          content: `Génère une fiche produit Shopify complète et optimisée SEO pour le produit "${input.productName}".${descStr}${keywordsStr}\n\nRetourne au format JSON demandé.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";
    onLog(`[product-writer] Réponse reçue (${text.length} caractères)`);

    const result = extractJSONObject<ProductPageResult>(text);

    onLog(`[product-writer] H1: "${result.h1Title}"`);
    onLog(`[product-writer] Meta title: "${result.metaTitle}" (${result.metaTitle.length} car.)`);

    // Create ProductPage
    const productPage = await prisma.productPage.create({
      data: {
        productId: input.productId,
        h1Title: result.h1Title,
        metaTitle: result.metaTitle,
        metaDescription: result.metaDescription,
        description: result.description,
        bulletPoints: result.bulletPoints as JsonInput,
        technicalSpecs: result.technicalSpecs as JsonInput,
        seoKeywords: (result.seoKeywords || null) as JsonInput,
        schemaMarkup: result.schemaMarkup || null,
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
        message: `Product Writer: fiche générée pour "${input.productName}"`,
        metadata: { agentRunId: agentRun.id, productPageId: productPage.id } as JsonInput,
      },
    });

    onLog(`[product-writer] Fiche créée (${productPage.id}) en ${duration}s`);

    return {
      success: true,
      result,
      productPageId: productPage.id,
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
      `[product-writer] ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`
    );
    throw error;
  }
}
