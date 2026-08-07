import { Megaphone } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { CampaignCard } from "@/components/campaigns/CampaignCard";

export const dynamic = "force-dynamic";

export default async function CampaignsPage() {
  const campaigns = await prisma.campaign.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      product: { select: { id: true, name: true } },
    },
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Megaphone className="h-6 w-6 text-[#f59e0b]" />
        <h1 className="text-2xl font-bold text-white">Campagnes Ads</h1>
        <span className="text-sm text-white/30 font-mono">
          ({campaigns.length})
        </span>
      </div>

      {campaigns.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-12 text-center">
          <Megaphone className="h-10 w-10 text-white/10 mx-auto mb-4" />
          <p className="text-white/40 mb-2">Aucune campagne créée</p>
          <p className="text-white/20 text-sm">
            Utilisez l&apos;Ads Architect depuis la page Agents pour générer des campagnes
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}
    </div>
  );
}
