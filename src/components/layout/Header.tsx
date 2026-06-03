"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HandHeart } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

// Ids das seções da Home observadas para o destaque de menu ativo.
const HOME_SECTIONS = [
  "inicio",
  "horarios",
  "pastorais",
  "eventos",
  "noticias",
  "contato",
];

/** Cabeçalho fixo compartilhado por todas as páginas, com item ativo por rota. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const pathname = usePathname();

  // Destaca o item conforme a seção visível — apenas na Home.
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = HOME_SECTIONS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    // Na Home, o destaque acompanha a seção visível (scroll-spy).
    if (pathname === "/") return href === `/#${activeSection}`;
    // Item de rota própria (ex.: /sobre).
    if (href === pathname) return true;
    // Páginas que pertencem a uma área cujo item do menu aponta para a seção da Home.
    if (pathname.startsWith("/pastorais")) return href === "/#pastorais";
    if (pathname.startsWith("/horarios")) return href === "/#horarios";
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-brand-cream-light/95 backdrop-blur supports-[backdrop-filter]:bg-brand-cream-light/80">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-brand-gold-dark",
                      active
                        ? "font-semibold text-brand-green after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-gold"
                        : "text-brand-green-dark/80",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/#contato"
            variant="secondary"
            size="md"
            className="hidden sm:inline-flex"
          >
            <HandHeart className="h-4 w-4" aria-hidden />
            Seja Dizimista
          </Button>

          {/* Botão de menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-green-dark hover:bg-brand-green/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-brand-green/10 bg-brand-cream-light transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <nav aria-label="Navegação principal (mobile)" className="px-4 py-4">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-brand-green/10",
                      active
                        ? "bg-brand-green/10 font-semibold text-brand-green"
                        : "text-brand-green-dark",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Button href="/#contato" variant="secondary" size="md" className="w-full">
                <HandHeart className="h-4 w-4" aria-hidden />
                Seja Dizimista
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
