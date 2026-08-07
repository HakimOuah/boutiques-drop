"use client";

interface ConsoleLogProps {
  runs: {
    id: string;
    agentType: string;
    status: string;
    duration: number | null;
    createdAt: Date;
  }[];
}

const statusColors: Record<string, string> = {
  running: "text-[#f59e0b]",
  completed: "text-[#00d4aa]",
  failed: "text-red-400",
};

export function ConsoleLog({ runs }: ConsoleLogProps) {
  if (runs.length === 0) {
    return (
      <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-6 text-center">
        <p className="text-white/20 text-sm font-mono">Aucune exécution récente</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-4 font-mono text-xs max-h-64 overflow-y-auto">
      {runs.map((run) => (
        <div key={run.id} className="flex items-center gap-3 py-1.5 border-b border-white/[0.03] last:border-0">
          <span className="text-white/20 w-28 shrink-0">
            {new Date(run.createdAt).toLocaleString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="text-white/40 w-28 shrink-0">{run.agentType}</span>
          <span className={`w-20 shrink-0 ${statusColors[run.status] || "text-white/40"}`}>
            {run.status}
          </span>
          <span className="text-white/20">
            {run.duration != null ? `${run.duration}s` : "—"}
          </span>
        </div>
      ))}
    </div>
  );
}
