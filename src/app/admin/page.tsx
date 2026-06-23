import React from "react";
import Link from "next/link";
import { PlusCircle, CalendarPlus, MailOpen, ArrowRight } from "lucide-react";

export default function AdminDashboardPage() {
  const quickActions = [
    {
      title: "Nova Notícia",
      description: "Publicar aviso ou artigo na área de notícias.",
      href: "/admin/noticias/novo",
      icon: PlusCircle,
      colorClass: "bg-brand-green",
    },
    {
      title: "Novo Evento",
      description: "Adicionar evento ao calendário da paróquia.",
      href: "/admin/eventos/novo",
      icon: CalendarPlus,
      colorClass: "bg-brand-gold-dark",
    },
    {
      title: "Ver Mensagens",
      description: "Acessar mensagens enviadas pelo formulário de contato.",
      href: "/admin/mensagens",
      icon: MailOpen,
      colorClass: "bg-brand-terracotta",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-green-deep">
          Bem-vindo ao Painel
        </h1>
        <p className="mt-2 text-gray-600">
          Gerencie o conteúdo do site da Paróquia de forma rápida e fácil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <Link
              key={idx}
              href={action.href}
              className="group block bg-white rounded-xl2 shadow-sm hover:shadow-card transition-all p-6 border border-brand-cream"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg text-white ${action.colorClass}`}
                >
                  <Icon size={24} />
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-all"
                />
              </div>
              <h3 className="text-lg font-semibold text-brand-green-deep mb-2">
                {action.title}
              </h3>
              <p className="text-sm text-gray-500">{action.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-brand-cream rounded-xl2 p-6 md:p-8 mt-10">
        <h2 className="text-xl font-serif font-bold text-brand-green-deep mb-4">
          Resumo do Site
        </h2>
        <p className="text-gray-700">
          Selecione uma opção no menu lateral para visualizar e editar os
          registros existentes. O sistema está em fase de implantação.
        </p>
      </div>
    </div>
  );
}
