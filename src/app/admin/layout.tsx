import React from "react";
import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Painel Admin",
  description: "Área administrativa da Paróquia Santo Afonso",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
