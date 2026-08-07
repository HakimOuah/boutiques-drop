import { FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ProductPageCard } from "@/components/fiches/ProductPageCard";

export const dynamic = "force-dynamic";

export default async function FichesPage() {
  const productPages = await prisma.productPage.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      product: { select: { id: true, name: true } },
    },
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-6 w-6 text-[#0088ff]" />
        <h1 className="text-2xl font-bold text-white">Fiches Produit</h1>
        <span className="text-sm text-white/30 font-mono">
          ({productPages.length})
        </span>
      </div>

      {productPages.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-12 text-center">
          <FileText className="h-10 w-10 text-white/10 mx-auto mb-4" />
          <p className="text-white/40 mb-2">Aucune fiche générée</p>
          <p className="text-white/20 text-sm">
            Utilisez le Product Writer depuis la page d&apos;un produit ou depuis les Agents
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {productPages.map((page) => (
            <ProductPageCard key={page.id} page={page} />
          ))}
        </div>
      )}
    </div>
  );
}
