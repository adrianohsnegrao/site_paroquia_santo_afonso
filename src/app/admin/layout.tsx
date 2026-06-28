import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import { TopBar } from "@/components/admin/TopBar";
import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: "Painel Admin",
  description: "Área administrativa da Paróquia Santo Afonso",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Sem usuário autenticado: renderiza apenas os children (ex: página de login)
  // sem o shell do admin. A proteção de rotas é feita pelo middleware.
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-brand-cream-light bg-[radial-gradient(60rem_40rem_at_120%_-10%,rgba(217,163,41,0.06),transparent),radial-gradient(50rem_40rem_at_-10%_110%,rgba(47,107,79,0.06),transparent)]">
      <Sidebar userEmail={user.email} />
      <div className="md:pl-64">
        <TopBar />
        <main className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-20 sm:px-6 md:px-10 md:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
