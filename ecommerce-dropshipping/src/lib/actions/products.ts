"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProducts(search?: string, nicheId?: string) {
  return prisma.product.findMany({
    where: {
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" as const } },
              { description: { contains: search, mode: "insensitive" as const } },
              { supplierName: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
      ...(nicheId ? { nicheId } : {}),
    },
    orderBy: { createdAt: "desc" },
    include: {
      niche: { select: { id: true, name: true, verdict: true } },
      _count: { select: { productPages: true, campaigns: true } },
    },
  });
}

export async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      niche: { select: { id: true, name: true, verdict: true } },
      productPages: { orderBy: { createdAt: "desc" } },
      campaigns: { orderBy: { createdAt: "desc" } },
      pricingResults: { orderBy: { createdAt: "desc" }, take: 5 },
      agentRuns: { orderBy: { createdAt: "desc" }, take: 10 },
      _count: { select: { productPages: true, campaigns: true } },
    },
  });
}

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const nicheId = formData.get("nicheId") as string;
  const description = (formData.get("description") as string) || null;
  const supplierName = (formData.get("supplierName") as string) || "";
  const supplierUrl = (formData.get("supplierUrl") as string) || null;
  const purchasePrice = parseFloat(formData.get("purchasePrice") as string) || 0;
  const shippingCost = parseFloat(formData.get("shippingCost") as string) || 0;
  const salePrice = parseFloat(formData.get("salePrice") as string) || 0;
  const imageUrl = (formData.get("imageUrl") as string) || null;

  if (!name || !nicheId) throw new Error("Nom et niche sont requis");

  const salePriceTTC = salePrice;
  const salePriceHT = salePrice / 1.2;
  const grossMargin = salePriceHT - purchasePrice - shippingCost;
  const grossMarginPct = salePriceHT > 0 ? (grossMargin / salePriceHT) * 100 : 0;

  const product = await prisma.product.create({
    data: {
      name,
      nicheId,
      description,
      supplierName,
      supplierUrl,
      purchasePrice,
      shippingCost,
      salePrice: salePriceHT,
      salePriceTTC,
      grossMargin,
      grossMarginPct,
      imageUrl,
      source: "manual",
    },
  });

  revalidatePath("/products");
  redirect(`/products/${product.id}`);
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const nicheId = formData.get("nicheId") as string;
  const description = (formData.get("description") as string) || null;
  const supplierName = (formData.get("supplierName") as string) || "";
  const supplierUrl = (formData.get("supplierUrl") as string) || null;
  const purchasePrice = parseFloat(formData.get("purchasePrice") as string) || 0;
  const shippingCost = parseFloat(formData.get("shippingCost") as string) || 0;
  const salePrice = parseFloat(formData.get("salePrice") as string) || 0;
  const imageUrl = (formData.get("imageUrl") as string) || null;

  if (!name || !nicheId) throw new Error("Nom et niche sont requis");

  const salePriceTTC = salePrice;
  const salePriceHT = salePrice / 1.2;
  const grossMargin = salePriceHT - purchasePrice - shippingCost;
  const grossMarginPct = salePriceHT > 0 ? (grossMargin / salePriceHT) * 100 : 0;

  await prisma.product.update({
    where: { id },
    data: {
      name,
      nicheId,
      description,
      supplierName,
      supplierUrl,
      purchasePrice,
      shippingCost,
      salePrice: salePriceHT,
      salePriceTTC,
      grossMargin,
      grossMarginPct,
      imageUrl,
    },
  });

  revalidatePath("/products");
  revalidatePath(`/products/${id}`);
  redirect(`/products/${id}`);
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/products");
  redirect("/products");
}

export async function toggleProductActive(id: string) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) throw new Error("Produit introuvable");

  await prisma.product.update({
    where: { id },
    data: { active: !product.active },
  });

  revalidatePath("/products");
  revalidatePath(`/products/${id}`);
}
