import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Package,
  Pencil,
  Trash2,
  Tag,
  ArrowLeft,
  FileText,
  Megaphone,
  Calculator,
  Bot,
} from "lucide-react";
import { getProduct, deleteProduct, toggleProductActive } from "@/lib/actions/products";
import { MarginBadge } from "@/components/products/MarginBadge";
import { formatCurrency } from "@/lib/utils";
import { PricingEngineLauncher } from "@/components/agents/PricingEngineLauncher";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  const latestPricing = product.pricingResults[0] || null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/products"
            className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 mb-2 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Retour au catalogue
          </Link>
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-[#0088ff]" />
            <h1 className="text-2xl font-bold text-white">{product.name}</h1>
            <MarginBadge verdict={product.marginVerdict} />
          </div>
          {product.niche && (
            <Link
              href={`/niches/${product.niche.id}`}
              className="flex items-center gap-1.5 mt-2 text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              <Tag className="h-3 w-3" />
              {product.niche.name}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <form action={async () => { "use server"; await toggleProductActive(params.id); }}>
            <button
              type="submit"
              className={`rounded-lg border px-3 py-2 text-xs transition-colors ${
                product.active
                  ? "border-[#00d4aa]/20 text-[#00d4aa] hover:bg-[#00d4aa]/10"
                  : "border-white/10 text-white/40 hover:bg-white/5"
              }`}
            >
              {product.active ? "Actif" : "Inactif"}
            </button>
          </form>
          <Link
            href={`/products/${params.id}/edit`}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs text-white/60 hover:text-white transition-colors"
          >
            <Pencil className="h-3 w-3" />
            Modifier
          </Link>
          <form action={async () => { "use server"; await deleteProduct(params.id); }}>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="h-3 w-3" />
              Supprimer
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Pricing & Agent */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick pricing summary */}
          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#8b5cf6]" />
              Prix & Marge
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg bg-white/[0.02] p-3">
                <span className="text-xs text-white/30 block mb-1">Achat + port</span>
                <span className="text-lg font-bold font-mono text-white">
                  {formatCurrency(product.purchasePrice + product.shippingCost)}
                </span>
              </div>
              <div className="rounded-lg bg-white/[0.02] p-3">
                <span className="text-xs text-white/30 block mb-1">Vente TTC</span>
                <span className="text-lg font-bold font-mono text-white">
                  {product.salePriceTTC != null ? formatCurrency(product.salePriceTTC) : "—"}
                </span>
              </div>
              <div className="rounded-lg bg-white/[0.02] p-3">
                <span className="text-xs text-white/30 block mb-1">Marge brute</span>
                <span className="text-lg font-bold font-mono text-[#00d4aa]">
                  {product.grossMargin != null ? formatCurrency(product.grossMargin) : "—"}
                </span>
              </div>
              <div className="rounded-lg bg-white/[0.02] p-3">
                <span className="text-xs text-white/30 block mb-1">% marge</span>
                <span
                  className={`text-lg font-bold font-mono ${
                    product.grossMarginPct != null && product.grossMarginPct >= 20
                      ? "text-[#00d4aa]"
                      : "text-[#f59e0b]"
                  }`}
                >
                  {product.grossMarginPct != null
                    ? `${product.grossMarginPct.toFixed(1)}%`
                    : "—"}
                </span>
              </div>
            </div>

            {latestPricing && (
              <div className="mt-4 pt-4 border-t border-white/[0.04]">
                <h3 className="text-sm text-white/40 mb-2">Dernière analyse Pricing Engine</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-xs">
                  <div>
                    <span className="text-white/20 block">TVA</span>
                    <span className="text-white/60 font-mono">{formatCurrency(latestPricing.tva)}</span>
                  </div>
                  <div>
                    <span className="text-white/20 block">Stripe</span>
                    <span className="text-white/60 font-mono">{formatCurrency(latestPricing.stripeCommission)}</span>
                  </div>
                  <div>
                    <span className="text-white/20 block">Shopify</span>
                    <span className="text-white/60 font-mono">{formatCurrency(latestPricing.shopifyCommission)}</span>
                  </div>
                  <div>
                    <span className="text-white/20 block">CPA</span>
                    <span className="text-white/60 font-mono">{formatCurrency(latestPricing.cpaHT)}</span>
                  </div>
                  <div>
                    <span className="text-white/20 block">Marge nette</span>
                    <span className="text-[#00d4aa] font-mono font-bold">
                      {formatCurrency(latestPricing.netMargin)}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/20 block">% net</span>
                    <span className="text-[#00d4aa] font-mono font-bold">
                      {latestPricing.netMarginPct.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Engine Launcher */}
          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#8b5cf6]" />
              Pricing Engine
            </h2>
            <PricingEngineLauncher
              productId={product.id}
              productName={product.name}
              purchasePrice={product.purchasePrice}
              shippingCost={product.shippingCost}
              salePriceTTC={product.salePriceTTC || undefined}
            />
          </div>

          {/* Description */}
          {product.description && (
            <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Description</h2>
              <p className="text-white/60 text-sm whitespace-pre-wrap">{product.description}</p>
            </div>
          )}
        </div>

        {/* Right: Meta */}
        <div className="space-y-6">
          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
              Fournisseur
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-white/30">Nom</dt>
                <dd className="text-white/80">{product.supplierName || "—"}</dd>
              </div>
              {product.supplierUrl && (
                <div>
                  <dt className="text-white/30 mb-1">URL</dt>
                  <dd className="text-[#0088ff] text-xs truncate">
                    <a href={product.supplierUrl} target="_blank" rel="noopener noreferrer">
                      {product.supplierUrl}
                    </a>
                  </dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-white/30">Rating</dt>
                <dd className="text-white/80 font-mono">
                  {product.supplierRating != null ? `${product.supplierRating}/5` : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/30">Commandes</dt>
                <dd className="text-white/80 font-mono">
                  {product.supplierOrders?.toLocaleString("fr-FR") ?? "—"}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Fiches produit ({product._count.productPages})
            </h3>
            {product.productPages.length > 0 ? (
              <ul className="space-y-2">
                {product.productPages.map((pp) => (
                  <li key={pp.id} className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2 text-sm text-white/60">
                    {pp.h1Title || "Sans titre"}
                    <span className="text-xs text-white/20 ml-2">({pp.status})</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/20 text-sm">Aucune fiche générée</p>
            )}
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Megaphone className="h-4 w-4" />
              Campagnes ({product._count.campaigns})
            </h3>
            {product.campaigns.length > 0 ? (
              <ul className="space-y-2">
                {product.campaigns.map((c) => (
                  <li key={c.id} className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2 text-sm text-white/60">
                    {c.name}
                    <span className="text-xs text-white/20 ml-2">({c.status})</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/20 text-sm">Aucune campagne</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
