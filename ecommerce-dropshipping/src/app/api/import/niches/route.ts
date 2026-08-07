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
        (row["Niche"] as string) ||
        (row["niche"] as string) ||
        (row["Name"] as string) ||
        (row["name"] as string) ||
        (row["Nom"] as string) ||
        (row["nom"] as string);

      if (!name) {
        skipped++;
        continue;
      }

      const slug = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      try {
        await prisma.niche.upsert({
          where: { slug },
          update: {},
          create: {
            name,
            slug,
            description: (row["Description"] as string) || (row["description"] as string) || null,
            source: "import",
          },
        });
        created++;
      } catch {
        errors.push(`Erreur sur "${name}"`);
        skipped++;
      }
    }

    await prisma.activityLog.create({
      data: {
        type: "import_completed",
        message: `Import niches: ${created} créées, ${skipped} ignorées`,
        metadata: { filename: file.name, created, skipped, errors: errors.slice(0, 10) } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      },
    });

    return NextResponse.json({
      success: true,
      created,
      skipped,
      total: rows.length,
      errors,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur lors de l'import",
      },
      { status: 500 }
    );
  }
}
