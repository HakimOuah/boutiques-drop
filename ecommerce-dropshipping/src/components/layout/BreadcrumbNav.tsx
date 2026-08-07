"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const labels: Record<string, string> = {
  dashboard: "Dashboard",
  niches: "Niches",
  products: "Catalogue",
  fiches: "Fiches Produit",
  campaigns: "Campagnes Ads",
  agents: "Agents IA",
  analytics: "Analytics",
  settings: "Parametres",
  new: "Nouveau",
  edit: "Modifier",
  import: "Import",
};

export function BreadcrumbNav() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-1 text-sm">
      {segments.map((segment, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const label = labels[segment] || segment;
        const isLast = i === segments.length - 1;

        return (
          <span key={href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 text-white/20" />}
            {isLast ? (
              <span className="text-white/60">{label}</span>
            ) : (
              <Link
                href={href}
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
