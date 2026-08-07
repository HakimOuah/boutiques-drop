import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { generateCampaign } from "@/lib/agents/ads-architect";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Non autorisé", { status: 401 });
  }

  const { productId, productName, salePriceTTC, nicheKeywords, campaignType } =
    await req.json();

  if (!productId || !productName) {
    return new Response("productId et productName requis", { status: 400 });
  }

  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  const encoder = new TextEncoder();

  (async () => {
    try {
      const result = await generateCampaign(
        { productId, productName, salePriceTTC, nicheKeywords, campaignType },
        (msg: string) => {
          writer.write(
            encoder.encode(`data: ${JSON.stringify({ type: "log", message: msg })}\n\n`)
          );
        }
      );

      await writer.write(
        encoder.encode(`data: ${JSON.stringify({ type: "result", ...result })}\n\n`)
      );
    } catch (error) {
      await writer.write(
        encoder.encode(
          `data: ${JSON.stringify({
            type: "error",
            message: error instanceof Error ? error.message : "Erreur inconnue",
          })}\n\n`
        )
      );
    } finally {
      await writer.close();
    }
  })();

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
