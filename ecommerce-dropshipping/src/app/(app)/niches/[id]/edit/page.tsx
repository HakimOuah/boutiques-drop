import { notFound } from "next/navigation";
import { Tag } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getNiche, updateNiche } from "@/lib/actions/niches";
import { NicheForm } from "@/components/niches/NicheForm";

export default async function EditNichePage({
  params,
}: {
  params: { id: string };
}) {
  const niche = await getNiche(params.id);
  if (!niche) return notFound();

  const updateWithId = updateNiche.bind(null, params.id);

  return (
    <div className="max-w-2xl">
      <Link
        href={`/niches/${params.id}`}
        className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 mb-4 transition-colors"
      >
        <ArrowLeft className="h-3 w-3" />
        Retour
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <Tag className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Modifier : {niche.name}</h1>
      </div>
      <NicheForm
        action={updateWithId}
        defaultValues={{
          name: niche.name,
          description: niche.description || undefined,
        }}
        submitLabel="Enregistrer"
      />
    </div>
  );
}
