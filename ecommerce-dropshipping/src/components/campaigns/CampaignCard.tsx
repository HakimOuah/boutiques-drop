"use client";

import { Megaphone, DollarSign, Target } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface CampaignCardProps {
  campaign: {
    id: string;
    name: string;
    type: string;
    biddingStrategy: string | null;
    dailyBudget: number | null;
    targetCPA: number | null;
    targetROAS: number | null;
    status: string;
    createdAt: Date;
    product: { id: string; name: string } | null;
  };
}

const typeColors: Record<string, string> = {
  search: "#0088ff",
  shopping: "#00d4aa",
  pmax: "#f59e0b",
};

const statusConfig: Record<string, { label: string; className: string }> = {
  draft: { label: "Brouillon", className: "bg-white/5 text-white/40 border-white/10" },
  active: { label: "Active", className: "bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/20" },
  paused: { label: "En pause", className: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20" },
};

export function CampaignCard({ campaign }: CampaignCardProps) {
  const typeColor = typeColors[campaign.type] || "#0088ff";
  const config = statusConfig[campaign.status] || statusConfig["draft"];

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-5 hover:border-white/10 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <Megaphone className="h-4 w-4 shrink-0" style={{ color: typeColor }} />
          <h3 className="font-semibold text-white truncate">{campaign.name}</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="rounded-full px-2 py-0.5 text-xs font-mono font-bold"
            style={{ color: typeColor, backgroundColor: `${typeColor}15`, border: `1px solid ${typeColor}30` }}
          >
            {campaign.type.toUpperCase()}
          </span>
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.className}`}>
            {config.label}
          </span>
        </div>
      </div>

      {campaign.product && (
        <p className="text-xs text-white/30 mb-3">
          Produit : {campaign.product.name}
        </p>
      )}

      <div className="grid grid-cols-3 gap-3 text-xs">
        <div>
          <span className="text-white/30 flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            Budget/jour
          </span>
          <span className="text-white/80 font-mono">
            {campaign.dailyBudget != null ? formatCurrency(campaign.dailyBudget) : "—"}
          </span>
        </div>
        <div>
          <span className="text-white/30 flex items-center gap-1">
            <Target className="h-3 w-3" />
            CPA cible
          </span>
          <span className="text-white/80 font-mono">
            {campaign.targetCPA != null ? formatCurrency(campaign.targetCPA) : "—"}
          </span>
        </div>
        <div>
          <span className="text-white/30">Stratégie</span>
          <span className="text-white/60 block truncate">
            {campaign.biddingStrategy || "—"}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.04] text-xs text-white/20">
        {new Date(campaign.createdAt).toLocaleDateString("fr-FR")}
      </div>
    </div>
  );
}
