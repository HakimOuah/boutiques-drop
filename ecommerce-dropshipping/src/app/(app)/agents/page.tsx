import {
  Bot,
  Search,
  FileText,
  Calculator,
  Megaphone,
  Target,
  Smartphone,
  ShieldCheck,
  Image,
  Compass,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { AgentCard } from "@/components/agents/AgentCard";
import { ConsoleLog } from "@/components/agents/ConsoleLog";
import { NicheAnalystLauncher } from "@/components/agents/NicheAnalystLauncher";
import { NicheDiscoveryLauncher } from "@/components/agents/NicheDiscoveryLauncher";
import { ProductWriterLauncher } from "@/components/agents/ProductWriterLauncher";
import { AdsArchitectLauncher } from "@/components/agents/AdsArchitectLauncher";

export const dynamic = "force-dynamic";

export default async function AgentsPage() {
  const [niches, products, agentRuns, runCounts] = await Promise.all([
    prisma.niche.findMany({
      where: { active: true },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.product.findMany({
      where: { active: true },
      select: { id: true, name: true, description: true, salePriceTTC: true },
      orderBy: { name: "asc" },
    }),
    prisma.agentRun.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: {
        id: true,
        agentType: true,
        status: true,
        duration: true,
        createdAt: true,
      },
    }),
    prisma.agentRun.groupBy({
      by: ["agentType"],
      _count: true,
    }),
  ]);

  const countMap: Record<string, number> = {};
  for (const r of runCounts) {
    countMap[r.agentType] = r._count;
  }

  const agents = [
    {
      name: "Niche Analyst",
      description: "Score chaque niche sur 100 points — verdict GO/MAYBE/NO-GO",
      icon: <Search className="h-5 w-5" style={{ color: "#00d4aa" }} />,
      color: "#00d4aa",
      phase: 1 as const,
      type: "niche-analyst",
    },
    {
      name: "Product Writer",
      description: "Génère des fiches produit Shopify SEO optimisées (AIDA, meta, schema.org)",
      icon: <FileText className="h-5 w-5" style={{ color: "#0088ff" }} />,
      color: "#0088ff",
      phase: 1 as const,
      type: "product-writer",
    },
    {
      name: "Pricing Engine",
      description: "Calcul de marge nette SASU avec tous les coûts (TVA, Stripe, Shopify, CPA)",
      icon: <Calculator className="h-5 w-5" style={{ color: "#8b5cf6" }} />,
      color: "#8b5cf6",
      phase: 1 as const,
      type: "pricing-engine",
    },
    {
      name: "Ads Architect",
      description: "Structure complète Google Ads (Search, Shopping, PMax) avec budget et scaling",
      icon: <Megaphone className="h-5 w-5" style={{ color: "#f59e0b" }} />,
      color: "#f59e0b",
      phase: 1 as const,
      type: "ads-architect",
    },
    {
      name: "Niche Discovery",
      description: "Découverte autonome de niches via web search — tendances, best sellers, CPC, concurrence",
      icon: <Compass className="h-5 w-5" style={{ color: "#10b981" }} />,
      color: "#10b981",
      phase: 1 as const,
      type: "niche-discovery",
    },
    {
      name: "CRO Optimizer",
      description: "Audit conversion Shopify — trust badges, social proof, CTA optimisé",
      icon: <Target className="h-5 w-5" style={{ color: "#ef4444" }} />,
      color: "#ef4444",
      phase: 2 as const,
      type: "cro-optimizer",
    },
    {
      name: "UX Auditor",
      description: "Audit UX mobile-first — parcours d'achat, WCAG, performance",
      icon: <Smartphone className="h-5 w-5" style={{ color: "#06b6d4" }} />,
      color: "#06b6d4",
      phase: 2 as const,
      type: "ux-auditor",
    },
    {
      name: "GMC Checker",
      description: "47 points de conformité Google Merchant Center 2026",
      icon: <ShieldCheck className="h-5 w-5" style={{ color: "#ec4899" }} />,
      color: "#ec4899",
      phase: 2 as const,
      type: "gmc-checker",
    },
    {
      name: "Image Maker",
      description: "Prompts optimisés pour images produit — hero, lifestyle, infographies",
      icon: <Image className="h-5 w-5" style={{ color: "#a855f7" }} />,
      color: "#a855f7",
      phase: 2 as const,
      type: "image-maker",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Bot className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Agents IA</h1>
      </div>

      {/* Agent cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {agents.map((agent) => (
          <AgentCard
            key={agent.type}
            name={agent.name}
            description={agent.description}
            icon={agent.icon}
            color={agent.color}
            phase={agent.phase}
            runsCount={countMap[agent.type] || 0}
          />
        ))}
      </div>

      {/* Launchers */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-white">Lancer un agent</h2>

        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h3 className="text-sm font-semibold text-[#00d4aa] mb-4 flex items-center gap-2">
            <Search className="h-4 w-4" />
            Niche Analyst
          </h3>
          <NicheAnalystLauncher niches={niches} />
        </div>

        <div id="niche-discovery" className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h3 className="text-sm font-semibold text-[#10b981] mb-4 flex items-center gap-2">
            <Compass className="h-4 w-4" />
            Niche Discovery
          </h3>
          <NicheDiscoveryLauncher />
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h3 className="text-sm font-semibold text-[#0088ff] mb-4 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Product Writer
          </h3>
          <ProductWriterLauncher products={products} />
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
          <h3 className="text-sm font-semibold text-[#f59e0b] mb-4 flex items-center gap-2">
            <Megaphone className="h-4 w-4" />
            Ads Architect
          </h3>
          <AdsArchitectLauncher products={products} />
        </div>
      </div>

      {/* Recent runs */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Exécutions récentes</h2>
        <ConsoleLog runs={agentRuns} />
      </div>
    </div>
  );
}
