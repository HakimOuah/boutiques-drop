"use client";

import { ReactNode } from "react";
import { Lock } from "lucide-react";

interface AgentCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
  phase: 1 | 2;
  runsCount?: number;
}

export function AgentCard({
  name,
  description,
  icon,
  color,
  phase,
  runsCount = 0,
}: AgentCardProps) {
  const isLocked = phase === 2;

  return (
    <div
      className={`rounded-xl border p-5 transition-all ${
        isLocked
          ? "border-white/[0.04] bg-[#0c1019]/50 opacity-60"
          : "border-white/[0.06] bg-[#0c1019] hover:border-white/10"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          {icon}
        </div>
        {isLocked ? (
          <span className="flex items-center gap-1 text-xs text-white/20">
            <Lock className="h-3 w-3" />
            Bientôt
          </span>
        ) : (
          <span className="text-xs text-white/30 font-mono">
            {runsCount} run{runsCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-white mb-1">{name}</h3>
      <p className="text-xs text-white/40 line-clamp-2">{description}</p>
    </div>
  );
}
