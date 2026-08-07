import { BarChart3, Bot, Tag, TrendingUp } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const [
    verdictDistribution,
    marginDistribution,
    runsByAgent,
    totalNiches,
    totalProducts,
    totalPages,
    totalCampaigns,
  ] = await Promise.all([
    prisma.niche.groupBy({
      by: ["verdict"],
      _count: true,
      where: { verdict: { not: null } },
    }),
    prisma.product.groupBy({
      by: ["marginVerdict"],
      _count: true,
      where: { marginVerdict: { not: null } },
    }),
    prisma.agentRun.groupBy({
      by: ["agentType"],
      _count: true,
      _avg: { duration: true },
    }),
    prisma.niche.count(),
    prisma.product.count(),
    prisma.productPage.count(),
    prisma.campaign.count(),
  ]);

  const pipeline = [
    { label: "Niches", count: totalNiches, color: "#00d4aa" },
    { label: "Produits", count: totalProducts, color: "#0088ff" },
    { label: "Fiches", count: totalPages, color: "#8b5cf6" },
    { label: "Campagnes", count: totalCampaigns, color: "#f59e0b" },
  ];

  const maxPipeline = Math.max(...pipeline.map((p) => p.count), 1);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
      </div>

      {/* Pipeline Funnel */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-white/40" />
          Pipeline
        </h2>
        <div className="space-y-3">
          {pipeline.map((step) => (
            <div key={step.label}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white/60">{step.label}</span>
                <span className="font-mono text-white/80">{step.count}</span>
              </div>
              <div className="h-6 rounded-lg bg-white/[0.04] overflow-hidden">
                <div
                  className="h-full rounded-lg flex items-center px-3 text-xs font-mono text-white/80"
                  style={{
                    width: `${Math.max((step.count / maxPipeline) * 100, 5)}%`,
                    backgroundColor: `${step.color}30`,
                    borderLeft: `3px solid ${step.color}`,
                  }}
                >
                  {step.count > 0 && step.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verdict distribution */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5 text-[#00d4aa]" />
            Verdicts niches
          </h2>
          {verdictDistribution.length === 0 ? (
            <p className="text-white/20 text-sm">Pas encore de données</p>
          ) : (
            <div className="space-y-3">
              {verdictDistribution.map((v) => {
                const total = verdictDistribution.reduce((s, x) => s + x._count, 0);
                const pct = total > 0 ? Math.round((v._count / total) * 100) : 0;
                const color = v.verdict === "GO" ? "#00d4aa" : v.verdict === "MAYBE" ? "#f59e0b" : "#ef4444";
                return (
                  <div key={v.verdict} className="flex items-center gap-4">
                    <span className="text-sm font-mono w-16 font-bold" style={{ color }}>
                      {v.verdict}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                    </div>
                    <span className="text-sm text-white/60 font-mono w-12 text-right">{v._count}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Margin distribution */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Verdicts marges</h2>
          {marginDistribution.length === 0 ? (
            <p className="text-white/20 text-sm">Pas encore de données</p>
          ) : (
            <div className="space-y-3">
              {marginDistribution.map((v) => {
                const total = marginDistribution.reduce((s, x) => s + x._count, 0);
                const pct = total > 0 ? Math.round((v._count / total) * 100) : 0;
                const color =
                  v.marginVerdict === "WINNER" ? "#00d4aa"
                  : v.marginVerdict === "GO" ? "#0088ff"
                  : v.marginVerdict === "MAYBE" ? "#f59e0b"
                  : "#ef4444";
                return (
                  <div key={v.marginVerdict} className="flex items-center gap-4">
                    <span className="text-sm font-mono w-16 font-bold" style={{ color }}>
                      {v.marginVerdict}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                    </div>
                    <span className="text-sm text-white/60 font-mono w-12 text-right">{v._count}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Agent runs */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Bot className="h-5 w-5 text-[#ec4899]" />
          Runs par agent
        </h2>
        {runsByAgent.length === 0 ? (
          <p className="text-white/20 text-sm">Aucun run</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {runsByAgent.map((r) => (
              <div
                key={r.agentType}
                className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{r.agentType}</h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-white/40">
                    <span className="text-white font-mono">{r._count}</span> runs
                  </span>
                  <span className="text-white/40">
                    Durée moy.{" "}
                    <span className="text-white font-mono">
                      {r._avg.duration != null ? `${Math.round(r._avg.duration)}s` : "—"}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
