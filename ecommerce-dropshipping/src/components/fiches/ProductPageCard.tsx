"use client";

import { FileText, ExternalLink } from "lucide-react";

interface ProductPageCardProps {
  page: {
    id: string;
    h1Title: string;
    metaTitle: string;
    metaDescription: string;
    status: string;
    createdAt: Date;
    product: { id: string; name: string } | null;
  };
}

const statusConfig: Record<string, { label: string; className: string }> = {
  draft: { label: "Brouillon", className: "bg-white/5 text-white/40 border-white/10" },
  approved: { label: "Approuvé", className: "bg-[#0088ff]/10 text-[#0088ff] border-[#0088ff]/20" },
  published: { label: "Publié", className: "bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/20" },
};

export function ProductPageCard({ page }: ProductPageCardProps) {
  const config = statusConfig[page.status] || statusConfig["draft"];

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-5 hover:border-[#0088ff]/30 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <FileText className="h-4 w-4 text-[#0088ff] shrink-0" />
          <h3 className="font-semibold text-white truncate">{page.h1Title}</h3>
        </div>
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium shrink-0 ${config.className}`}>
          {config.label}
        </span>
      </div>

      {page.product && (
        <p className="text-xs text-white/30 mb-2">
          Produit : {page.product.name}
        </p>
      )}

      <div className="space-y-2 text-xs">
        <div>
          <span className="text-white/20">Meta title :</span>
          <span className="text-white/50 ml-1">{page.metaTitle}</span>
          <span className="text-white/20 ml-1">({page.metaTitle.length} car.)</span>
        </div>
        <div>
          <span className="text-white/20">Meta desc :</span>
          <span className="text-white/50 ml-1 line-clamp-1">{page.metaDescription}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.04]">
        <span className="text-xs text-white/20">
          {new Date(page.createdAt).toLocaleDateString("fr-FR")}
        </span>
        <button className="flex items-center gap-1 text-xs text-[#0088ff] hover:text-[#0088ff]/80 transition-colors">
          <ExternalLink className="h-3 w-3" />
          Voir
        </button>
      </div>
    </div>
  );
}
