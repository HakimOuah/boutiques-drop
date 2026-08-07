"use client";

import { useState, useRef } from "react";
import { Megaphone, Play, Loader2, CheckCircle, XCircle } from "lucide-react";

interface AdsArchitectLauncherProps {
  products: { id: string; name: string; salePriceTTC: number | null }[];
}

export function AdsArchitectLauncher({ products }: AdsArchitectLauncherProps) {
  const [productId, setProductId] = useState("");
  const [campaignType, setCampaignType] = useState<"search" | "shopping" | "pmax">("search");
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const logsEndRef = useRef<HTMLDivElement>(null);

  const selectedProduct = products.find((p) => p.id === productId);

  const handleLaunch = async () => {
    if (!selectedProduct) return;
    setStatus("running");
    setLogs([]);

    try {
      const res = await fetch("/api/agents/ads-architect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          salePriceTTC: selectedProduct.salePriceTTC,
          campaignType,
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
            if (data.type === "log") setLogs((prev) => [...prev, data.message]);
            else if (data.type === "result") setStatus("done");
            else if (data.type === "error") {
              setLogs((prev) => [...prev, `ERREUR: ${data.message}`]);
              setStatus("error");
            }
          } catch { /* skip */ }
        }
        logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (status === "running") setStatus("done");
    } catch (error) {
      setLogs((prev) => [...prev, `ERREUR: ${error instanceof Error ? error.message : "Erreur"}`]);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          disabled={status === "running"}
          className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white focus:border-[#f59e0b]/50 focus:outline-none disabled:opacity-50"
        >
          <option value="">-- Sélectionner un produit --</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <select
          value={campaignType}
          onChange={(e) => setCampaignType(e.target.value as "search" | "shopping" | "pmax")}
          disabled={status === "running"}
          className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white focus:border-[#f59e0b]/50 focus:outline-none disabled:opacity-50"
        >
          <option value="search">Search</option>
          <option value="shopping">Shopping</option>
          <option value="pmax">Performance Max</option>
        </select>
        <button
          onClick={handleLaunch}
          disabled={status === "running" || !productId}
          className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-[#07090f] hover:bg-[#f59e0b]/90 transition-colors disabled:opacity-50"
        >
          {status === "running" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Megaphone className="h-4 w-4" />}
          {status === "running" ? "Création..." : "Créer campagne"}
        </button>
      </div>

      {logs.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-4 max-h-48 overflow-y-auto font-mono text-xs">
          {logs.map((log, i) => (
            <div key={i} className={`py-0.5 ${log.includes("ERREUR") ? "text-red-400" : "text-white/50"}`}>{log}</div>
          ))}
          <div ref={logsEndRef} />
        </div>
      )}

      {status === "done" && (
        <div className="flex items-center gap-2 text-[#f59e0b] text-sm">
          <CheckCircle className="h-4 w-4" /><span>Campagne créée avec succès</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <XCircle className="h-4 w-4" /><span>La création a échoué</span>
        </div>
      )}
    </div>
  );
}
