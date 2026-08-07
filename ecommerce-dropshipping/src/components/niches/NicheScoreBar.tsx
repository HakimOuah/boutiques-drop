"use client";

interface ScoreBarProps {
  label: string;
  score: number | null;
  max: number;
  color?: string;
}

export function NicheScoreBar({
  label,
  score,
  max,
  color = "#00d4aa",
}: ScoreBarProps) {
  const pct = score != null ? Math.round((score / max) * 100) : 0;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-white/60">{label}</span>
        <span className="font-mono text-white/80">
          {score != null ? `${score}/${max}` : "—"}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
