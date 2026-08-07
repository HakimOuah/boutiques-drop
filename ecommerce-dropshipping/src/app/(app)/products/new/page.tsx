import { Package } from "lucide-react";
import { ProductForm } from "@/components/products/ProductForm";
import { createProduct } from "@/lib/actions/products";
import { prisma } from "@/lib/prisma";

export default async function NewProductPage() {
  const niches = await prisma.niche.findMany({
    where: { active: true },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-6 w-6 text-[#0088ff]" />
        <h1 className="text-2xl font-bold text-white">Nouveau produit</h1>
      </div>
      <ProductForm action={createProduct} niches={niches} />
    </div>
  );
}
