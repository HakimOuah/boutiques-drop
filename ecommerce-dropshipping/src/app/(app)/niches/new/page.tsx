import { Tag } from "lucide-react";
import { NicheForm } from "@/components/niches/NicheForm";
import { createNiche } from "@/lib/actions/niches";

export default function NewNichePage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Tag className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Nouvelle niche</h1>
      </div>
      <NicheForm action={createNiche} />
    </div>
  );
}
