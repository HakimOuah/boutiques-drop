"use client";

import { useState, useRef } from "react";
import { Calculator, Play, Loader2, CheckCircle, XCircle } from "lucide-react";

interface PricingEngineLauncherProps {
  productId: string;
  productName: string;
  purchasePrice: number;
  shippingCost: number;
  salePriceTTC?: number;
}

export function PricingEngineLauncher({
  productId,
  productName,
  purchasePrice,
  shippingCost,
  salePriceTTC: defaultSalePriceTTC,
}: PricingEngineLauncherProps) {
  const [salePriceTTC, setSalePriceTTC] = useState(
    defaultSalePriceTTC?.toString() || ""
  );
  const [cpaEstimate, setCpaEstimate] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">(
    "idle"
  );
  const logsEndRef = useRef<HTMLDivElement>(null);

  const handleLaunch = async () => {
    if (!salePriceTTC) return;
    setStatus("running");
    setLogs([]);

    try {
      const res = await fetch("/api/agents/pricing-engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          purchasePrice,
          shippingCost,
          salePriceTTC: parseFloat(salePriceTTC),
          cpaEstimate: cpaEstimate ? parseFloat(cpaEstimate) : undefined,
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
              setStatus("done");
            } else if (data.type === "error") {
              setLogs((prev) => [...prev, `ERREUR: ${data.message}`]);
              setStatus("error");
            }
          } catch {
            // skip
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
      <p className="text-sm text-white/40">
        Calcul de marge nette SASU pour{" "}
        <span className="text-white/60 font-medium">{productName}</span>
      </p>

      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-xs text-white/30 mb-1">
            Prix de vente TTC (€)
          </label>
          <input
            type="number"
            step="0.01"
            value={salePriceTTC}
            onChange={(e) => setSalePriceTTC(e.target.value)}
            placeholder="0.00"
            disabled={status === "running"}
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#8b5cf6]/50 focus:outline-none disabled:opacity-50"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-white/30 mb-1">
            CPA estimé (€, optionnel)
          </label>
          <input
            type="number"
            step="0.01"
            value={cpaEstimate}
            onChange={(e) => setCpaEstimate(e.target.value)}
            placeholder="auto"
            disabled={status === "running"}
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#8b5cf6]/50 focus:outline-none disabled:opacity-50"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleLaunch}
            disabled={status === "running" || !salePriceTTC}
            className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#8b5cf6]/90 transition-colors disabled:opacity-50"
          >
            {status === "running" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Calculator className="h-4 w-4" />
            )}
            {status === "running" ? "Calcul..." : "Calculer"}
          </button>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-[#07090f] p-4 max-h-48 overflow-y-auto font-mono text-xs">
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

      {status === "done" && (
        <div className="flex items-center gap-2 text-[#8b5cf6] text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>Calcul terminé — Rechargez la page pour voir les résultats</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <XCircle className="h-4 w-4" />
          <span>Le calcul a échoué</span>
        </div>
      )}
    </div>
  );
}
