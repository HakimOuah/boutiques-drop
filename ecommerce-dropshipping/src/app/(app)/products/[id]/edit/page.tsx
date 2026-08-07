import { notFound } from "next/navigation";
import { Package, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getProduct, updateProduct } from "@/lib/actions/products";
import { ProductForm } from "@/components/products/ProductForm";
import { prisma } from "@/lib/prisma";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  const niches = await prisma.niche.findMany({
    where: { active: true },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  const updateWithId = updateProduct.bind(null, params.id);

  return (
    <div className="max-w-2xl">
      <Link
        href={`/products/${params.id}`}
        className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 mb-4 transition-colors"
      >
        <ArrowLeft className="h-3 w-3" />
        Retour
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-6 w-6 text-[#0088ff]" />
        <h1 className="text-2xl font-bold text-white">
          Modifier : {product.name}
        </h1>
      </div>
      <ProductForm
        action={updateWithId}
        niches={niches}
        defaultValues={{
          name: product.name,
          nicheId: product.nicheId,
          description: product.description || undefined,
          supplierName: product.supplierName || undefined,
          supplierUrl: product.supplierUrl || undefined,
          purchasePrice: product.purchasePrice,
          shippingCost: product.shippingCost,
          salePrice: product.salePriceTTC || undefined,
          imageUrl: product.imageUrl || undefined,
        }}
        submitLabel="Enregistrer"
      />
    </div>
  );
}
