"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ExternalLink, Home } from "lucide-react";

const labels: Record<string, string> = {
  admin: "Painel",
  noticias: "Notícias",
  avisos: "Avisos",
  eventos: "Eventos",
  pastorais: "Pastorais",
  horarios: "Horários",
  mensagens: "Mensagens",
  configuracoes: "Configurações",
  novo: "Novo",
};

function buildCrumbs(pathname: string) {
  const parts = pathname.split("/").filter(Boolean); // ['admin', 'noticias', ...]
  const crumbs: { label: string; href: string }[] = [];
  let href = "";
  parts.forEach((part, i) => {
    href += `/${part}`;
    if (part === "admin") {
      crumbs.push({ label: "Dashboard", href: "/admin" });
      return;
    }
    // segmento dinâmico (id) → "Editar"
    const isId = /^[0-9a-f-]{8,}$/i.test(part) && i === parts.length - 1;
    crumbs.push({ label: isId ? "Editar" : labels[part] ?? part, href });
  });
  return crumbs;
}

export function TopBar() {
  const pathname = usePathname() || "/admin";
  const crumbs = buildCrumbs(pathname);

  return (
    <header className="sticky top-0 z-20 hidden h-16 items-center justify-between border-b border-brand-green-deep/[0.06] bg-brand-cream-light/70 px-6 backdrop-blur-xl md:flex md:px-10">
      <nav aria-label="Trilha" className="flex items-center gap-1.5 text-sm">
        <Home size={15} className="text-brand-green-deep/35" />
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-brand-green-deep/25" />}
              {last ? (
                <span className="font-semibold text-brand-green-deep">{c.label}</span>
              ) : (
                <Link
                  href={c.href}
                  className="text-brand-green-deep/50 transition-colors hover:text-brand-green"
                >
                  {c.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>

      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-brand-green-deep/60 transition-colors hover:bg-white hover:text-brand-green"
      >
        <ExternalLink size={15} />
        <span className="hidden sm:inline">Ver site</span>
      </a>
    </header>
  );
}
