"use client";

import { useState } from "react";
import { Upload, FileUp, CheckCircle, AlertCircle } from "lucide-react";

export default function ImportProductsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle"
  );
  const [result, setResult] = useState<{
    created: number;
    skipped: number;
    total: number;
    errors: string[];
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setStatus("uploading");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/import/products", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'import");

      setResult(data);
      setStatus("done");
    } catch (error) {
      setResult({
        created: 0,
        skipped: 0,
        total: 0,
        errors: [error instanceof Error ? error.message : "Erreur inconnue"],
      });
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Upload className="h-6 w-6 text-[#0088ff]" />
        <h1 className="text-2xl font-bold text-white">Import Produits</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <p className="text-white/40 text-sm mb-4">
            Importez un fichier Excel contenant les colonnes : Name/Produit, Niche, PurchasePrice, ShippingCost, SalePrice, SupplierName, SupplierUrl.
          </p>

          <label
            htmlFor="file"
            className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 cursor-pointer transition-colors ${
              file
                ? "border-[#0088ff]/30 bg-[#0088ff]/5"
                : "border-white/[0.06] hover:border-white/10"
            }`}
          >
            <FileUp className={`h-8 w-8 mb-3 ${file ? "text-[#0088ff]" : "text-white/20"}`} />
            {file ? (
              <span className="text-[#0088ff] text-sm font-medium">{file.name}</span>
            ) : (
              <span className="text-white/30 text-sm">Cliquez ou glissez un fichier .xlsx</span>
            )}
            <input
              id="file"
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={!file || status === "uploading"}
          className="flex items-center gap-2 rounded-lg bg-[#00d4aa] px-5 py-2.5 text-sm font-semibold text-[#07090f] hover:bg-[#00d4aa]/90 transition-colors disabled:opacity-50"
        >
          <Upload className="h-4 w-4" />
          {status === "uploading" ? "Import en cours..." : "Importer"}
        </button>
      </form>

      {result && (
        <div
          className={`mt-6 rounded-xl border p-6 ${
            status === "done"
              ? "border-[#00d4aa]/20 bg-[#00d4aa]/5"
              : "border-red-500/20 bg-red-500/5"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            {status === "done" ? (
              <CheckCircle className="h-5 w-5 text-[#00d4aa]" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400" />
            )}
            <h3 className="text-white font-semibold">
              {status === "done" ? "Import terminé" : "Erreur"}
            </h3>
          </div>
          {status === "done" && (
            <div className="space-y-1 text-sm text-white/60">
              <p><span className="text-[#00d4aa] font-mono">{result.created}</span> produits créés</p>
              <p><span className="text-white/40 font-mono">{result.skipped}</span> ignorés</p>
            </div>
          )}
          {result.errors.length > 0 && (
            <ul className="mt-3 space-y-1 text-xs text-red-400/80">
              {result.errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
