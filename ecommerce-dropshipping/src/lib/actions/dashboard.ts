"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  const [
    nichesCount,
    nichesGoCount,
    productsCount,
    productPagesCount,
    campaignsCount,
    agentRunsCount,
    recentRuns,
    recentActivity,
    verdictDistribution,
  ] = await Promise.all([
    prisma.niche.count({ where: { active: true } }),
    prisma.niche.count({ where: { verdict: "GO" } }),
    prisma.product.count({ where: { active: true } }),
    prisma.productPage.count(),
    prisma.campaign.count(),
    prisma.agentRun.count(),
    prisma.agentRun.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: {
        id: true,
        agentType: true,
        status: true,
        duration: true,
        createdAt: true,
      },
    }),
    prisma.activityLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.niche.groupBy({
      by: ["verdict"],
      _count: true,
      where: { verdict: { not: null } },
    }),
  ]);

  return {
    kpis: {
      niches: nichesCount,
      nichesGo: nichesGoCount,
      products: productsCount,
      productPages: productPagesCount,
      campaigns: campaignsCount,
      agentRuns: agentRunsCount,
    },
    recentRuns,
    recentActivity,
    verdictDistribution,
  };
}
