"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { BreadcrumbNav } from "./BreadcrumbNav";

export function TopBar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-white/[0.08] bg-[#07090f]/80 px-6 backdrop-blur-sm">
      <BreadcrumbNav />
      <div className="flex items-center gap-3">
        {session?.user && (
          <span className="text-xs text-white/40">{session.user.email}</span>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-white/40 hover:bg-white/[0.04] hover:text-white transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Quitter</span>
        </button>
      </div>
    </header>
  );
}
