"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
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
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Notícias", href: "/admin/noticias", icon: Newspaper },
  { name: "Eventos", href: "/admin/eventos", icon: CalendarDays },
  { name: "Pastorais", href: "/admin/pastorais", icon: Users },
  { name: "Horários", href: "/admin/horarios", icon: Clock },
  { name: "Mensagens", href: "/admin/mensagens", icon: MessageSquare },
  { name: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

export default function Sidebar() {
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

  return (
    <>
      {/* Botão de menu hambúrguer para mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-brand-green text-white rounded-md shadow-md focus:outline-none"
        aria-label="Abrir menu de navegação"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay escuro no mobile quando o menu está aberto */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar principal */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-brand-green-deep text-white shadow-soft transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Cabeçalho da Sidebar */}
        <div className="h-16 flex items-center justify-center border-b border-brand-green-dark">
          <h1 className="text-xl font-serif font-bold text-brand-cream">
            Painel Admin
          </h1>
        </div>

        {/* Navegação */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl2 transition-colors ${
                  isActive
                    ? "bg-brand-green text-brand-gold-light font-medium"
                    : "text-brand-cream hover:bg-brand-green/50 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Rodapé da Sidebar (Botão de Sair) */}
        <div className="p-4 border-t border-brand-green-dark">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl2 text-brand-cream hover:bg-red-600/20 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}
