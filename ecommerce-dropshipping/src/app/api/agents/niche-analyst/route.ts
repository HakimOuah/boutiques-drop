import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { analyzeNiche } from "@/lib/agents/niche-analyst";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Non autorisé", { status: 401 });
  }

  const { nicheName, nicheId } = await req.json();

  if (!nicheName) {
    return new Response("nicheName est requis", { status: 400 });
  }

  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  const encoder = new TextEncoder();

  (async () => {
    try {
      const result = await analyzeNiche(
        { nicheName, nicheId },
        (msg: string) => {
          writer.write(
            encoder.encode(`data: ${JSON.stringify({ type: "log", message: msg })}\n\n`)
          );
        }
      );

      await writer.write(
        encoder.encode(
          `data: ${JSON.stringify({ type: "result", ...result })}\n\n`
        )
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
