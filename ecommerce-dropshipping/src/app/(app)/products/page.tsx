import Link from "next/link";
import { Package, Plus, Upload, Search } from "lucide-react";
import { getProducts } from "@/lib/actions/products";
import { ProductCard } from "@/components/products/ProductCard";

export const dynamic = "force-dynamic";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; niche?: string };
}) {
  const products = await getProducts(searchParams.q, searchParams.niche);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-[#0088ff]" />
          <h1 className="text-2xl font-bold text-white">Catalogue</h1>
          <span className="text-sm text-white/30 font-mono">
            ({products.length})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/products/import"
            className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/60 hover:text-white hover:border-white/10 transition-colors"
          >
            <Upload className="h-4 w-4" />
            Import
          </Link>
          <Link
            href="/products/new"
            className="flex items-center gap-2 rounded-lg bg-[#00d4aa] px-4 py-2 text-sm font-semibold text-[#07090f] hover:bg-[#00d4aa]/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Nouveau produit
          </Link>
        </div>
      </div>

      <form className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
          <input
            type="text"
            name="q"
            defaultValue={searchParams.q}
            placeholder="Rechercher un produit..."
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4aa]/50"
          />
        </div>
      </form>

      {products.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-12 text-center">
          <Package className="h-10 w-10 text-white/10 mx-auto mb-4" />
          <p className="text-white/40 mb-4">
            {searchParams.q
              ? "Aucun produit trouvé"
              : "Aucun produit dans le catalogue"}
          </p>
          {!searchParams.q && (
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/products/new"
                className="text-[#00d4aa] hover:underline text-sm"
              >
                Ajouter manuellement
              </Link>
              <span className="text-white/20">ou</span>
              <Link
                href="/products/import"
                className="text-[#0088ff] hover:underline text-sm"
              >
                Importer un fichier Excel
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
