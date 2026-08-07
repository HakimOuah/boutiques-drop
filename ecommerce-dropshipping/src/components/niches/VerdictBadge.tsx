"use client";

const verdictConfig: Record<string, { label: string; className: string }> = {
  GO: {
    label: "GO",
    className: "bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/20",
  },
  MAYBE: {
    label: "MAYBE",
    className: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20",
  },
  "NO-GO": {
    label: "NO-GO",
    className: "bg-red-500/10 text-red-400 border-red-500/20",
  },
};

export function VerdictBadge({ verdict }: { verdict: string | null }) {
  if (!verdict) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/40">
        Non analysé
      </span>
    );
  }

  const config = verdictConfig[verdict] || verdictConfig["MAYBE"];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold font-mono ${config.className}`}
    >
      {config.label}
    </span>
  );
}
