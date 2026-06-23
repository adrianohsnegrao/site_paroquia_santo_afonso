import React from "react";
import Sidebar from "@/components/admin/Sidebar";
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
    <div className="flex min-h-screen bg-brand-cream-light">
      <Sidebar />
      <div className="flex-1 md:ml-64 w-full transition-all duration-300">
        <main className="p-6 md:p-10 min-h-screen max-w-7xl mx-auto mt-14 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
