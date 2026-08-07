import {
  LayoutDashboard,
  Tag,
  Package,
  FileText,
  Megaphone,
  Bot,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { getDashboardData } from "@/lib/actions/dashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { kpis, recentRuns, recentActivity, verdictDistribution } =
    await getDashboardData();

  const kpiCards = [
    {
      label: "Niches actives",
      value: kpis.niches,
      sub: `${kpis.nichesGo} GO`,
      icon: Tag,
      color: "#00d4aa",
      href: "/niches",
    },
    {
      label: "Produits",
      value: kpis.products,
      icon: Package,
      color: "#0088ff",
      href: "/products",
    },
    {
      label: "Fiches produit",
      value: kpis.productPages,
      icon: FileText,
      color: "#8b5cf6",
      href: "/fiches",
    },
    {
      label: "Campagnes Ads",
      value: kpis.campaigns,
      icon: Megaphone,
      color: "#f59e0b",
      href: "/campaigns",
    },
    {
      label: "Runs agents",
      value: kpis.agentRuns,
      icon: Bot,
      color: "#ec4899",
      href: "/agents",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <LayoutDashboard className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {kpiCards.map((kpi) => (
          <Link key={kpi.label} href={kpi.href}>
            <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-5 hover:border-white/10 transition-all">
              <div className="flex items-center justify-between mb-3">
                <kpi.icon className="h-5 w-5" style={{ color: kpi.color }} />
                <TrendingUp className="h-3 w-3 text-white/10" />
              </div>
              <p className="text-2xl font-bold font-mono text-white">
                {kpi.value}
              </p>
              <p className="text-xs text-white/40 mt-1">{kpi.label}</p>
              {kpi.sub && (
                <p className="text-xs mt-1" style={{ color: kpi.color }}>
                  {kpi.sub}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verdict Distribution */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Distribution des verdicts
          </h2>
          {verdictDistribution.length === 0 ? (
            <p className="text-white/20 text-sm">
              Aucune niche analysée pour le moment
            </p>
          ) : (
            <div className="space-y-3">
              {verdictDistribution.map((v) => {
                const total = verdictDistribution.reduce(
                  (s, x) => s + x._count,
                  0
                );
                const pct = total > 0 ? Math.round((v._count / total) * 100) : 0;
                const color =
                  v.verdict === "GO"
                    ? "#00d4aa"
                    : v.verdict === "MAYBE"
                      ? "#f59e0b"
                      : "#ef4444";

                return (
                  <div key={v.verdict}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-white/60">{v.verdict}</span>
                      <span className="font-mono text-white/80">
                        {v._count} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Agent Runs */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Dernières exécutions
          </h2>
          {recentRuns.length === 0 ? (
            <p className="text-white/20 text-sm">Aucune exécution récente</p>
          ) : (
            <div className="space-y-2">
              {recentRuns.map((run) => (
                <div
                  key={run.id}
                  className="flex items-center gap-3 py-2 border-b border-white/[0.03] last:border-0"
                >
                  <CheckCircle
                    className="h-4 w-4 shrink-0"
                    style={{
                      color:
                        run.status === "completed"
                          ? "#00d4aa"
                          : run.status === "failed"
                            ? "#ef4444"
                            : "#f59e0b",
                    }}
                  />
                  <span className="text-sm text-white/60 flex-1">
                    {run.agentType}
                  </span>
                  <span className="text-xs text-white/20 font-mono">
                    {run.duration != null ? `${run.duration}s` : "—"}
                  </span>
                  <span className="text-xs text-white/20">
                    {new Date(run.createdAt).toLocaleDateString("fr-FR")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Activité récente
        </h2>
        {recentActivity.length === 0 ? (
          <p className="text-white/20 text-sm">Aucune activité</p>
        ) : (
          <div className="space-y-2">
            {recentActivity.map((log) => (
              <div
                key={log.id}
                className="flex items-center gap-3 py-2 border-b border-white/[0.03] last:border-0 text-sm"
              >
                <span className="text-white/20 text-xs font-mono w-24 shrink-0">
                  {new Date(log.createdAt).toLocaleString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-white/50">{log.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
