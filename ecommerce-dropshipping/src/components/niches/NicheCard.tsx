"use client";

import Link from "next/link";
import { Tag, Package, TrendingUp, ArrowRight } from "lucide-react";
import { VerdictBadge } from "./VerdictBadge";

interface NicheCardProps {
  niche: {
    id: string;
    name: string;
    totalScore: number | null;
    verdict: string | null;
    avgCPC: number | null;
    avgVolume: number | null;
    priceRangeMin: number | null;
    priceRangeMax: number | null;
    active: boolean;
    source: string;
    _count: { products: number };
  };
}

export function NicheCard({ niche }: NicheCardProps) {
  return (
    <Link href={`/niches/${niche.id}`}>
      <div
        className={`group rounded-xl border border-white/[0.06] bg-[#0c1019] p-5 hover:border-[#00d4aa]/30 transition-all ${!niche.active ? "opacity-50" : ""}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-[#00d4aa]" />
            <h3 className="font-semibold text-white group-hover:text-[#00d4aa] transition-colors">
              {niche.name}
            </h3>
          </div>
          <VerdictBadge verdict={niche.verdict} />
        </div>

        {niche.totalScore != null && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/40">Score global</span>
              <span className="font-mono font-bold text-white">
                {niche.totalScore}/100
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${niche.totalScore}%`,
                  backgroundColor:
                    niche.totalScore >= 70
                      ? "#00d4aa"
                      : niche.totalScore >= 45
                        ? "#f59e0b"
                        : "#ef4444",
                }}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-white/30 block">CPC moy.</span>
            <span className="text-white/80 font-mono">
              {niche.avgCPC != null ? `${niche.avgCPC.toFixed(2)}€` : "—"}
            </span>
          </div>
          <div>
            <span className="text-white/30 block">Volume</span>
            <span className="text-white/80 font-mono">
              {niche.avgVolume != null
                ? niche.avgVolume.toLocaleString("fr-FR")
                : "—"}
            </span>
          </div>
          <div>
            <span className="text-white/30 block">Prix</span>
            <span className="text-white/80 font-mono">
              {niche.priceRangeMin != null && niche.priceRangeMax != null
                ? `${niche.priceRangeMin}-${niche.priceRangeMax}€`
                : "—"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.04]">
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span className="flex items-center gap-1">
              <Package className="h-3 w-3" />
              {niche._count.products} produit{niche._count.products !== 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {niche.source}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#00d4aa] transition-colors" />
        </div>
      </div>
    </Link>
  );
}
