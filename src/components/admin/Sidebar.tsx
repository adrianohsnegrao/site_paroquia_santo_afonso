"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Newspaper,
  CalendarDays,
  Users,
  Clock,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Megaphone,
  ExternalLink,
} from "lucide-react";

const navGroups = [
  {
    label: null,
    items: [{ name: "Dashboard", href: "/admin", icon: LayoutDashboard }],
  },
  {
    label: "Conteúdo",
    items: [
      { name: "Notícias", href: "/admin/noticias", icon: Newspaper },
      { name: "Avisos", href: "/admin/avisos", icon: Megaphone },
      { name: "Eventos", href: "/admin/eventos", icon: CalendarDays },
      { name: "Pastorais", href: "/admin/pastorais", icon: Users },
      { name: "Horários", href: "/admin/horarios", icon: Clock },
    ],
  },
  {
    label: "Comunicação",
    items: [{ name: "Mensagens", href: "/admin/mensagens", icon: MessageSquare }],
  },
  {
    label: "Sistema",
    items: [{ name: "Configurações", href: "/admin/configuracoes", icon: Settings }],
  },
];

export default function Sidebar({ userEmail }: { userEmail?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClient();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      {/* Barra superior no mobile */}
      <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-3 border-b border-brand-green-deep/[0.06] bg-white/90 px-4 backdrop-blur md:hidden">
        <button
          onClick={toggleSidebar}
          className="grid h-9 w-9 place-items-center rounded-lg text-brand-green-deep ring-1 ring-brand-green-deep/10"
          aria-label="Abrir menu de navegação"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <span className="font-serif font-bold text-brand-green-deep">Painel</span>
      </div>

      {/* Overlay no mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-green-deep/40 backdrop-blur-sm transition-opacity md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-brand-green-deep text-white shadow-soft",
          "bg-gradient-to-b from-brand-green-dark to-brand-green-deep",
          "transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Marca */}
        <div className="flex items-center gap-3 px-5 py-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white/95 shadow-sm ring-1 ring-white/10">
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-bold text-brand-cream">
              Santo Afonso
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-gold-light">
              Painel Administrativo
            </span>
          </span>
        </div>

        {/* Navegação */}
        <nav className="scrollbar-minimal scrollbar-minimal-light flex-1 space-y-5 overflow-y-auto px-3 py-3">
          {navGroups.map((group, gi) => (
            <div key={gi} className="space-y-1">
              {group.label && (
                <p className="px-3.5 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-cream/35">
                  {group.label}
                </p>
              )}
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-all duration-200",
                      active
                        ? "bg-gradient-to-r from-white/[0.14] to-white/[0.04] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-inset ring-white/[0.07]"
                        : "text-brand-cream/70 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-brand-gold shadow-[0_0_12px_rgba(217,163,41,0.7)]" />
                    )}
                    <item.icon
                      size={19}
                      className={cn(
                        "shrink-0 transition-colors",
                        active
                          ? "text-brand-gold-light"
                          : "text-brand-cream/55 group-hover:text-brand-cream",
                      )}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Link para o site público */}
        <div className="px-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-brand-cream/70 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <ExternalLink size={18} className="shrink-0 text-brand-cream/50" />
            <span>Ver site público</span>
          </a>
        </div>

        {/* Usuário + sair */}
        <div className="mt-2 border-t border-white/10 p-3">
          {userEmail && (
            <div className="mb-2 flex items-center gap-3 rounded-xl px-3 py-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gold/20 text-sm font-bold uppercase text-brand-gold-light">
                {userEmail.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-brand-cream">Administrador</span>
                <span className="block truncate text-[11px] text-brand-cream/55">{userEmail}</span>
              </span>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-brand-cream/75 transition-colors hover:bg-red-500/15 hover:text-red-200"
          >
            <LogOut size={18} className="shrink-0" />
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}
