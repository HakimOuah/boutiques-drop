"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Compass, Play, Loader2, CheckCircle, XCircle, ExternalLink } from "lucide-react";

const SEED_SUGGESTIONS = [
  "Maison & Jardin",
  "Sport & Outdoor",
  "Tech & Gadgets",
  "Animaux",
  "Bureau & Productivité",
  "Auto & Moto",
  "Enfants & Bébé",
  "Bien-être",
  "Mode & Accessoires",
  "Cuisine & Pâtisserie",
];

interface DiscoveredNiche {
  id: string;
  name: string;
  score: number;
  verdict: string;
}

interface LogEntry {
  message: string;
  type: "search" | "result" | "info" | "error" | "save";
}

function classifyLog(msg: string): LogEntry["type"] {
  if (msg.includes("🔍")) return "search";
  if (msg.includes("✅")) return "result";
  if (msg.includes("💾")) return "save";
  if (msg.includes("ERREUR")) return "error";
  return "info";
}

const LOG_COLORS: Record<LogEntry["type"], string> = {
  search: "text-[#0088ff]",
  result: "text-[#00d4aa]",
  save: "text-[#8b5cf6]",
  error: "text-red-400",
  info: "text-white/50",
};

export function NicheDiscoveryLauncher() {
  const [seed, setSeed] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [niches, setNiches] = useState<DiscoveredNiche[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const gotFinalRef = useRef(false);

  const handleLaunch = async () => {
    setStatus("running");
    setLogs([]);
    setNiches([]);
    gotFinalRef.current = false;

    try {
      const res = await fetch("/api/agents/niche-discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seed: seed.trim() || undefined }),
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
              setLogs((prev) => [
                ...prev,
                { message: data.message, type: classifyLog(data.message) },
              ]);
            } else if (data.type === "result") {
              gotFinalRef.current = true;
              setNiches(data.niches || []);
              setStatus("done");
            } else if (data.type === "error") {
              gotFinalRef.current = true;
              setLogs((prev) => [
                ...prev,
                { message: `ERREUR: ${data.message}`, type: "error" },
              ]);
              setStatus("error");
            }
          } catch {
            // skip invalid JSON
          }
        }

        logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (!gotFinalRef.current) setStatus("done");
    } catch (error) {
      setLogs((prev) => [
        ...prev,
        {
          message: `ERREUR: ${error instanceof Error ? error.message : "Erreur inconnue"}`,
          type: "error" as const,
        },
      ]);
      setStatus("error");
    }
  };

  const verdictColor = (verdict: string) => {
    if (verdict === "GO") return "text-[#00d4aa] bg-[#00d4aa]/10";
    if (verdict === "MAYBE") return "text-[#f59e0b] bg-[#f59e0b]/10";
    return "text-red-400 bg-red-400/10";
  };

  return (
    <div className="space-y-4">
      {/* Seed input + launch button */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Compass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
          <input
            type="text"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="Catégorie seed (optionnel) — ex: Maison & Jardin"
            disabled={status === "running"}
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#10b981]/50 focus:outline-none disabled:opacity-50"
          />
        </div>

        <button
          onClick={handleLaunch}
          disabled={status === "running"}
          className="flex items-center gap-2 rounded-lg bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#10b981]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "running" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {status === "running" ? "Recherche..." : "Découvrir des niches"}
        </button>
      </div>

      {/* Quick seed suggestions */}
      {status === "idle" && (
        <div className="flex flex-wrap gap-2">
          {SEED_SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setSeed(s)}
              className={`rounded-full px-3 py-1 text-xs transition-colors border ${
                seed === s
                  ? "border-[#10b981]/50 bg-[#10b981]/10 text-[#10b981]"
                  : "border-white/[0.06] bg-white/[0.03] text-white/40 hover:text-white/60 hover:border-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Console logs */}
      {logs.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-4 max-h-72 overflow-y-auto font-mono text-xs">
          {logs.map((log, i) => (
            <div key={i} className={`py-0.5 ${LOG_COLORS[log.type]}`}>
              {log.message}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      )}

      {/* Results grid */}
      {status === "done" && niches.length > 0 && (
        <div>
          <div className="flex items-center gap-2 text-[#10b981] text-sm mb-3">
            <CheckCircle className="h-4 w-4" />
            <span>{niches.length} niches découvertes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {niches.map((niche) => (
              <Link
                key={niche.id}
                href={`/niches/${niche.id}`}
                className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-4 hover:border-white/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#10b981] transition-colors line-clamp-1">
                    {niche.name}
                  </h4>
                  <ExternalLink className="h-3.5 w-3.5 text-white/20 group-hover:text-white/40 shrink-0 ml-2" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-bold text-white/80">
                    {niche.score}
                    <span className="text-xs text-white/30">/100</span>
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${verdictColor(niche.verdict)}`}
                  >
                    {niche.verdict}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <XCircle className="h-4 w-4" />
          <span>La découverte a échoué</span>
        </div>
      )}
    </div>
  );
}
