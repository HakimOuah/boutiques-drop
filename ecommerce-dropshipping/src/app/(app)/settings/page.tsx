"use client";

import { Settings, User, Key, Mail } from "lucide-react";
import { useSession } from "next-auth/react";

export default function SettingsPage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6 text-[#00d4aa]" />
        <h1 className="text-2xl font-bold text-white">Paramètres</h1>
      </div>

      {/* Profile */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-white/40" />
          Profil
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
            <input
              type="email"
              value={session?.user?.email || ""}
              disabled
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white/40 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Nom
            </label>
            <input
              type="text"
              defaultValue={session?.user?.name || ""}
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Key className="h-5 w-5 text-white/40" />
          Clés API
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Anthropic API Key
            </label>
            <input
              type="password"
              defaultValue="••••••••••••••••"
              disabled
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white/40 cursor-not-allowed"
            />
            <p className="text-xs text-white/20 mt-1">
              Configurée via la variable d&apos;environnement ANTHROPIC_API_KEY
            </p>
          </div>
        </div>
      </div>

      {/* SMTP */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0c1019] p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-white/40" />
          Configuration SMTP
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Host</label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Port</label>
              <input
                type="number"
                placeholder="587"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          disabled
          className="flex items-center gap-2 rounded-lg bg-[#00d4aa]/50 px-5 py-2.5 text-sm font-semibold text-[#07090f] cursor-not-allowed"
        >
          Enregistrer (bientôt)
        </button>
      </div>
    </div>
  );
}
