import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);

    let created = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const row of rows) {
      const name =
        (row["Name"] as string) ||
        (row["name"] as string) ||
        (row["Produit"] as string) ||
        (row["produit"] as string) ||
        (row["Product"] as string);

      const nicheName =
        (row["Niche"] as string) ||
        (row["niche"] as string) ||
        (row["Category"] as string);

      if (!name) {
        skipped++;
        continue;
      }

      try {
        // Find or create niche
        let nicheId: string;

        if (nicheName) {
          const slug = nicheName
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

          const niche = await prisma.niche.upsert({
            where: { slug },
            update: {},
            create: { name: nicheName, slug, source: "import" },
          });
          nicheId = niche.id;
        } else {
          // Default niche
          const defaultNiche = await prisma.niche.upsert({
            where: { slug: "non-classe" },
            update: {},
            create: { name: "Non classé", slug: "non-classe", source: "import" },
          });
          nicheId = defaultNiche.id;
        }

        const purchasePrice = parseFloat(String(row["PurchasePrice"] || row["purchasePrice"] || row["Prix achat"] || "0")) || 0;
        const shippingCost = parseFloat(String(row["ShippingCost"] || row["shippingCost"] || row["Shipping"] || "0")) || 0;
        const salePrice = parseFloat(String(row["SalePrice"] || row["salePrice"] || row["Prix vente"] || "0")) || 0;

        const salePriceTTC = salePrice;
        const salePriceHT = salePrice / 1.2;
        const grossMargin = salePriceHT - purchasePrice - shippingCost;
        const grossMarginPct = salePriceHT > 0 ? (grossMargin / salePriceHT) * 100 : 0;

        await prisma.product.create({
          data: {
            name,
            nicheId,
            description: (row["Description"] as string) || (row["description"] as string) || null,
            supplierName: (row["SupplierName"] as string) || (row["Fournisseur"] as string) || "",
            supplierUrl: (row["SupplierUrl"] as string) || (row["URL"] as string) || null,
            purchasePrice,
            shippingCost,
            salePrice: salePriceHT,
            salePriceTTC,
            grossMargin,
            grossMarginPct,
            imageUrl: (row["ImageUrl"] as string) || (row["Image"] as string) || null,
            source: "import",
          },
        });
        created++;
      } catch (err) {
        errors.push(`Erreur sur "${name}": ${err instanceof Error ? err.message : "inconnue"}`);
        skipped++;
      }
    }

    await prisma.activityLog.create({
      data: {
        type: "import_completed",
        message: `Import produits: ${created} créés, ${skipped} ignorés`,
        metadata: { filename: file.name, created, skipped } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      },
    });

    return NextResponse.json({
      success: true,
      created,
      skipped,
      total: rows.length,
      errors: errors.slice(0, 10),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur lors de l'import" },
      { status: 500 }
    );
  }
}
