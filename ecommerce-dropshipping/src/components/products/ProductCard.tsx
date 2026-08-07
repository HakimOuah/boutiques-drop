"use client";

import Link from "next/link";
import { Package, Tag, FileText, Megaphone, ArrowRight } from "lucide-react";
import { MarginBadge } from "./MarginBadge";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    supplierName: string | null;
    purchasePrice: number;
    shippingCost: number;
    salePrice: number | null;
    salePriceTTC: number | null;
    grossMarginPct: number | null;
    marginVerdict: string | null;
    imageUrl: string | null;
    active: boolean;
    niche: { id: string; name: string; verdict: string | null } | null;
    _count: { productPages: number; campaigns: number };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className={`group rounded-xl border border-white/[0.06] bg-[#0c1019] p-5 hover:border-[#00d4aa]/30 transition-all ${!product.active ? "opacity-50" : ""}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <Package className="h-4 w-4 text-[#0088ff] shrink-0" />
            <h3 className="font-semibold text-white truncate group-hover:text-[#00d4aa] transition-colors">
              {product.name}
            </h3>
          </div>
          <MarginBadge verdict={product.marginVerdict} />
        </div>

        {product.niche && (
          <div className="flex items-center gap-1.5 mb-3 text-xs text-white/30">
            <Tag className="h-3 w-3" />
            {product.niche.name}
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 text-xs mb-3">
          <div>
            <span className="text-white/30 block">Achat</span>
            <span className="text-white/80 font-mono">
              {formatCurrency(product.purchasePrice + product.shippingCost)}
            </span>
          </div>
          <div>
            <span className="text-white/30 block">Vente TTC</span>
            <span className="text-white/80 font-mono">
              {product.salePriceTTC != null
                ? formatCurrency(product.salePriceTTC)
                : "—"}
            </span>
          </div>
          <div>
            <span className="text-white/30 block">Marge brute</span>
            <span
              className={`font-mono ${
                product.grossMarginPct != null && product.grossMarginPct >= 20
                  ? "text-[#00d4aa]"
                  : product.grossMarginPct != null && product.grossMarginPct >= 10
                    ? "text-[#f59e0b]"
                    : "text-red-400"
              }`}
            >
              {product.grossMarginPct != null
                ? `${product.grossMarginPct.toFixed(1)}%`
                : "—"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              {product._count.productPages} fiche{product._count.productPages !== 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <Megaphone className="h-3 w-3" />
              {product._count.campaigns} campagne{product._count.campaigns !== 1 ? "s" : ""}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#00d4aa] transition-colors" />
        </div>
      </div>
    </Link>
  );
}
