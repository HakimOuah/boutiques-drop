"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getNiches(search?: string) {
  return prisma.niche.findMany({
    where: search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { products: true } },
    },
  });
}

export async function getNiche(id: string) {
  return prisma.niche.findUnique({
    where: { id },
    include: {
      products: {
        orderBy: { createdAt: "desc" },
        take: 20,
      },
      agentRuns: {
        orderBy: { createdAt: "desc" },
        take: 10,
      },
      _count: { select: { products: true } },
    },
  });
}

export async function createNiche(formData: FormData) {
  const name = formData.get("name") as string;
  const description = (formData.get("description") as string) || null;

  if (!name) throw new Error("Le nom est requis");

  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Check uniqueness
  const existing = await prisma.niche.findUnique({ where: { slug } });
  if (existing) throw new Error("Une niche avec ce nom existe déjà");

  const niche = await prisma.niche.create({
    data: {
      name,
      slug,
      description,
      source: "manual",
    },
  });

  revalidatePath("/niches");
  redirect(`/niches/${niche.id}`);
}

export async function updateNiche(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = (formData.get("description") as string) || null;

  if (!name) throw new Error("Le nom est requis");

  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Check uniqueness (excluding self)
  const existing = await prisma.niche.findFirst({
    where: { slug, NOT: { id } },
  });
  if (existing) throw new Error("Une niche avec ce nom existe déjà");

  await prisma.niche.update({
    where: { id },
    data: { name, slug, description },
  });

  revalidatePath("/niches");
  revalidatePath(`/niches/${id}`);
  redirect(`/niches/${id}`);
}

export async function deleteNiche(id: string) {
  await prisma.niche.delete({ where: { id } });
  revalidatePath("/niches");
  redirect("/niches");
}

export async function toggleNicheActive(id: string) {
  const niche = await prisma.niche.findUnique({ where: { id } });
  if (!niche) throw new Error("Niche introuvable");

  await prisma.niche.update({
    where: { id },
    data: { active: !niche.active },
  });

  revalidatePath("/niches");
  revalidatePath(`/niches/${id}`);
}
