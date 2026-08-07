"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Zap, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07090f]">
      <div className="w-full max-w-sm rounded-2xl border border-white/[0.06] bg-[#0c1019] p-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00d4aa]/10">
            <Zap className="h-5 w-5 text-[#00d4aa]" />
          </div>
          <span className="text-xl font-semibold text-white">
            Dropshipping<span className="text-[#00d4aa]">AI</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-white/40 mb-1.5">Email</label>
            <input
              name="email"
              type="email"
              required
              defaultValue="admin@dropshipping.local"
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/40 mb-1.5">Mot de passe</label>
            <input
              name="password"
              type="password"
              required
              defaultValue="admin123"
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#00d4aa]/50 focus:outline-none transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#00d4aa] py-2.5 text-sm font-semibold text-[#07090f] hover:bg-[#00e4ba] transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
