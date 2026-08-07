"use client";

import { useState, useRef } from "react";
import { Search, Play, Loader2, CheckCircle, XCircle } from "lucide-react";

interface NicheAnalystLauncherProps {
  defaultNicheId?: string;
  defaultNicheName?: string;
  niches?: { id: string; name: string }[];
}

export function NicheAnalystLauncher({
  defaultNicheId,
  defaultNicheName,
  niches = [],
}: NicheAnalystLauncherProps) {
  const [nicheName, setNicheName] = useState(defaultNicheName || "");
  const [nicheId, setNicheId] = useState(defaultNicheId || "");
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">(
    "idle"
  );
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const handleLaunch = async () => {
    if (!nicheName.trim()) return;
    setStatus("running");
    setLogs([]);
    setResult(null);

    try {
      const res = await fetch("/api/agents/niche-analyst", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nicheName: nicheName.trim(),
          nicheId: nicheId || undefined,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";

        for (const part of parts) {
          const line = part.replace(/^data: /, "");
          if (!line) continue;

          try {
            const data = JSON.parse(line);
            if (data.type === "log") {
              setLogs((prev) => [...prev, data.message]);
            } else if (data.type === "result") {
              setResult(data.result);
              setStatus("done");
            } else if (data.type === "error") {
              setLogs((prev) => [...prev, `ERREUR: ${data.message}`]);
              setStatus("error");
            }
          } catch {
            // skip invalid JSON
          }
        }

        logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (status === "running") setStatus("done");
    } catch (error) {
      setLogs((prev) => [
        ...prev,
        `ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`,
      ]);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {niches.length > 0 ? (
          <select
            value={nicheId}
            onChange={(e) => {
              setNicheId(e.target.value);
              const niche = niches.find((n) => n.id === e.target.value);
              if (niche) setNicheName(niche.name);
            }}
            className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white focus:border-[#00d4aa]/50 focus:outline-none"
          >
            <option value="">-- Nouvelle niche --</option>
            {niches.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
        ) : null}

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
          <input
            type="text"
            value={nicheName}
            onChange={(e) => setNicheName(e.target.value)}
            placeholder="Nom de la niche à analyser..."
            disabled={status === "running"}
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none disabled:opacity-50"
          />
        </div>

        <button
          onClick={handleLaunch}
          disabled={status === "running" || !nicheName.trim()}
          className="flex items-center gap-2 rounded-lg bg-[#00d4aa] px-5 py-2.5 text-sm font-semibold text-[#07090f] hover:bg-[#00d4aa]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "running" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {status === "running" ? "Analyse..." : "Analyser"}
        </button>
      </div>

      {logs.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-4 max-h-64 overflow-y-auto font-mono text-xs">
          {logs.map((log, i) => (
            <div
              key={i}
              className={`py-0.5 ${log.includes("ERREUR") ? "text-red-400" : "text-white/50"}`}
            >
              {log}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      )}

      {status === "done" && result && (
        <div className="flex items-center gap-2 text-[#00d4aa] text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>
            Analyse terminée — Score: {String(result.totalScore)}/100 — Verdict:{" "}
            {String(result.verdict)}
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <XCircle className="h-4 w-4" />
          <span>L&apos;analyse a échoué</span>
        </div>
      )}
    </div>
  );
}
