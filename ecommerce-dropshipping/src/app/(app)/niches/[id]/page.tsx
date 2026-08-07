import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Tag,
  Pencil,
  Trash2,
  Package,
  Bot,
  ArrowLeft,
} from "lucide-react";
import { getNiche, deleteNiche, toggleNicheActive } from "@/lib/actions/niches";
import { VerdictBadge } from "@/components/niches/VerdictBadge";
import { NicheScoreBar } from "@/components/niches/NicheScoreBar";
import { NicheAnalystLauncher } from "@/components/agents/NicheAnalystLauncher";

export const dynamic = "force-dynamic";

export default async function NicheDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const niche = await getNiche(params.id);
  if (!niche) return notFound();

  const keywords = (niche.keywords as string[] | null) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/niches"
            className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 mb-2 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Retour aux niches
          </Link>
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6 text-[#00d4aa]" />
            <h1 className="text-2xl font-bold text-white">{niche.name}</h1>
            <VerdictBadge verdict={niche.verdict} />
          </div>
          {niche.description && (
            <p className="text-white/40 mt-2 max-w-xl">{niche.description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <form action={async () => { "use server"; await toggleNicheActive(params.id); }}>
            <button
              type="submit"
              className={`rounded-lg border px-3 py-2 text-xs transition-colors ${
                niche.active
                  ? "border-[#00d4aa]/20 text-[#00d4aa] hover:bg-[#00d4aa]/10"
                  : "border-white/10 text-white/40 hover:bg-white/5"
              }`}
            >
              {niche.active ? "Active" : "Inactive"}
            </button>
          </form>
          <Link
            href={`/niches/${params.id}/edit`}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs text-white/60 hover:text-white transition-colors"
          >
            <Pencil className="h-3 w-3" />
            Modifier
          </Link>
          <form action={async () => { "use server"; await deleteNiche(params.id); }}>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="h-3 w-3" />
              Supprimer
            </button>
          </form>
        </div>
      </div>

      {/* Score + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Scores */}
        <div className="lg:col-span-2 space-y-6">
          {niche.totalScore != null ? (
            <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Score d&apos;analyse
                </h2>
                <span className="text-3xl font-bold font-mono text-white">
                  {niche.totalScore}
                  <span className="text-lg text-white/30">/100</span>
                </span>
              </div>
              <div className="space-y-3">
                <NicheScoreBar
                  label="Volume de recherche"
                  score={niche.volumeScore}
                  max={20}
                  color="#00d4aa"
                />
                <NicheScoreBar
                  label="CPC moyen"
                  score={niche.cpcScore}
                  max={20}
                  color="#0088ff"
                />
                <NicheScoreBar
                  label="Concurrence"
                  score={niche.concurrenceScore}
                  max={20}
                  color="#8b5cf6"
                />
                <NicheScoreBar
                  label="Marge potentielle"
                  score={niche.margeScore}
                  max={25}
                  color="#f59e0b"
                />
                <NicheScoreBar
                  label="Disponibilité fournisseurs"
                  score={niche.fournisseursScore}
                  max={15}
                  color="#ec4899"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6 text-center">
              <Bot className="h-8 w-8 text-white/10 mx-auto mb-3" />
              <p className="text-white/40 mb-1">Pas encore analysée</p>
              <p className="text-white/20 text-sm">
                Lancez le Niche Analyst ci-dessous
              </p>
            </div>
          )}

          {/* Agent Launcher */}
          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#00d4aa]" />
              Niche Analyst
            </h2>
            <NicheAnalystLauncher
              defaultNicheId={niche.id}
              defaultNicheName={niche.name}
            />
          </div>
        </div>

        {/* Right: Metadata */}
        <div className="space-y-6">
          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
              Données marché
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-white/30">CPC moyen</dt>
                <dd className="text-white font-mono">
                  {niche.avgCPC != null ? `${niche.avgCPC.toFixed(2)}€` : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/30">Volume mensuel</dt>
                <dd className="text-white font-mono">
                  {niche.avgVolume?.toLocaleString("fr-FR") ?? "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/30">Difficulté (KD)</dt>
                <dd className="text-white font-mono">
                  {niche.avgKD != null ? `${niche.avgKD.toFixed(1)}` : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/30">Prix</dt>
                <dd className="text-white font-mono">
                  {niche.priceRangeMin != null && niche.priceRangeMax != null
                    ? `${niche.priceRangeMin}–${niche.priceRangeMax}€`
                    : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/30">Source</dt>
                <dd className="text-white/60">{niche.source}</dd>
              </div>
            </dl>
          </div>

          {keywords.length > 0 && (
            <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
              <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-white/50"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
            <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Package className="h-4 w-4" />
              Produits ({niche._count.products})
            </h3>
            {niche.products.length > 0 ? (
              <ul className="space-y-2">
                {niche.products.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.id}`}
                      className="block rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2 text-sm text-white/60 hover:text-white hover:border-white/10 transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/20 text-sm">Aucun produit</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
