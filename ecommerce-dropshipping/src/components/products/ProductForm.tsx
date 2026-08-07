"use client";

import { Package, Save, DollarSign, Link as LinkIcon } from "lucide-react";

interface ProductFormProps {
  action: (formData: FormData) => Promise<void>;
  niches: { id: string; name: string }[];
  defaultValues?: {
    name?: string;
    nicheId?: string;
    description?: string;
    supplierName?: string;
    supplierUrl?: string;
    purchasePrice?: number;
    shippingCost?: number;
    salePrice?: number;
    imageUrl?: string;
  };
  submitLabel?: string;
}

export function ProductForm({
  action,
  niches,
  defaultValues,
  submitLabel = "Créer le produit",
}: ProductFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6 space-y-5">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
          Informations produit
        </h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
            Nom du produit *
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue={defaultValues?.name}
              placeholder="ex: Lampe de bureau LED articulée"
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4aa]/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="nicheId" className="block text-sm font-medium text-white/60 mb-2">
            Niche *
          </label>
          <select
            id="nicheId"
            name="nicheId"
            required
            defaultValue={defaultValues?.nicheId}
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white focus:border-[#00d4aa]/50 focus:outline-none"
          >
            <option value="">-- Sélectionner --</option>
            {niches.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white/60 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            defaultValue={defaultValues?.description}
            placeholder="Description du produit..."
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none resize-none"
          />
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6 space-y-5">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
          Fournisseur & Prix
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="supplierName" className="block text-sm font-medium text-white/60 mb-2">
              Nom fournisseur
            </label>
            <input
              type="text"
              id="supplierName"
              name="supplierName"
              defaultValue={defaultValues?.supplierName}
              placeholder="ex: AliExpress, CJ Dropshipping"
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="supplierUrl" className="block text-sm font-medium text-white/60 mb-2">
              URL fournisseur
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
              <input
                type="url"
                id="supplierUrl"
                name="supplierUrl"
                defaultValue={defaultValues?.supplierUrl}
                placeholder="https://..."
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium text-white/60 mb-2">
              Prix d&apos;achat (€)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
              <input
                type="number"
                id="purchasePrice"
                name="purchasePrice"
                step="0.01"
                min="0"
                defaultValue={defaultValues?.purchasePrice}
                placeholder="0.00"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="shippingCost" className="block text-sm font-medium text-white/60 mb-2">
              Frais de port (€)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
              <input
                type="number"
                id="shippingCost"
                name="shippingCost"
                step="0.01"
                min="0"
                defaultValue={defaultValues?.shippingCost}
                placeholder="0.00"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="salePrice" className="block text-sm font-medium text-white/60 mb-2">
              Prix de vente TTC (€)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
              <input
                type="number"
                id="salePrice"
                name="salePrice"
                step="0.01"
                min="0"
                defaultValue={defaultValues?.salePrice}
                placeholder="0.00"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-white/60 mb-2">
            URL image
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            defaultValue={defaultValues?.imageUrl}
            placeholder="https://..."
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-[#00d4aa] px-5 py-2.5 text-sm font-semibold text-[#07090f] hover:bg-[#00d4aa]/90 transition-colors"
        >
          <Save className="h-4 w-4" />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
