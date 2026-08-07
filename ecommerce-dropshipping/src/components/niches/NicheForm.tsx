"use client";

import { useRef } from "react";
import { Tag, Save } from "lucide-react";

interface NicheFormProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    name?: string;
    description?: string;
  };
  submitLabel?: string;
}

export function NicheForm({
  action,
  defaultValues,
  submitLabel = "Créer la niche",
}: NicheFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={action} className="space-y-6">
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/60 mb-2"
          >
            Nom de la niche *
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue={defaultValues?.name}
              placeholder="ex: Lampes de bureau LED"
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] pl-10 pr-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4aa]/50"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white/60 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue={defaultValues?.description}
            placeholder="Description optionnelle de la niche..."
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none focus:ring-1 focus:ring-[#00d4aa]/50 resize-none"
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
