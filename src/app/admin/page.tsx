import Link from "next/link";
import {
  Newspaper,
  CalendarDays,
  Users,
  Mail,
  PlusCircle,
  CalendarPlus,
  ArrowRight,
  CalendarClock,
  Inbox,
  MapPin,
} from "lucide-react";
import { fetchNoticias } from "./noticias/actions";
import { fetchEventos } from "./eventos/actions";
import { fetchPastorais } from "./pastorais/actions";
import { fetchMensagens } from "./mensagens/actions";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { StatCard } from "@/components/admin/ui/StatCard";
import { Card, CardHeader } from "@/components/admin/ui/Card";
import { Badge, type BadgeTone } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";

export const dynamic = "force-dynamic";

async function safe<T>(p: Promise<T>, fallback: T): Promise<T> {
  try {
    return await p;
  } catch {
    return fallback;
  }
}

const mensagemTone: Record<string, BadgeTone> = {
  nova: "info",
  lida: "neutral",
  respondida: "success",
};
const mensagemLabel: Record<string, string> = {
  nova: "Nova",
  lida: "Lida",
  respondida: "Respondida",
};

export default async function AdminDashboardPage() {
  const [noticias, eventos, pastorais, mensagens] = await Promise.all([
    safe(fetchNoticias(), [] as any[]),
    safe(fetchEventos(), [] as any[]),
    safe(fetchPastorais(), [] as any[]),
    safe(fetchMensagens(), [] as any[]),
  ]);

  const agora = new Date();
  const noticiasPublicadas = noticias.filter((n: any) => n.status === "publicado").length;
  const proximos = eventos
    .filter((e: any) => e.data_inicio && new Date(e.data_inicio) >= agora)
    .sort(
      (a: any, b: any) =>
        new Date(a.data_inicio).getTime() - new Date(b.data_inicio).getTime(),
    );
  const naoLidas = mensagens.filter((m: any) => m.status === "nova").length;
  const mensagensRecentes = [...mensagens]
    .sort(
      (a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .slice(0, 5);

  const quickActions = [
    { title: "Nova Notícia", href: "/admin/noticias/novo", icon: PlusCircle },
    { title: "Novo Evento", href: "/admin/eventos/novo", icon: CalendarPlus },
    { title: "Ver Mensagens", href: "/admin/mensagens", icon: Mail },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Bem-vindo ao Painel"
        description={`Hoje é ${agora.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}`}
      />

      {/* Métricas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Notícias"
          value={noticias.length}
          hint={`${noticiasPublicadas} publicada${noticiasPublicadas === 1 ? "" : "s"}`}
          icon={Newspaper}
          tone="green"
          href="/admin/noticias"
        />
        <StatCard
          label="Eventos"
          value={eventos.length}
          hint={`${proximos.length} próximo${proximos.length === 1 ? "" : "s"}`}
          icon={CalendarDays}
          tone="deep"
          href="/admin/eventos"
        />
        <StatCard
          label="Pastorais"
          value={pastorais.length}
          hint="Grupos ativos"
          icon={Users}
          tone="terracotta"
          href="/admin/pastorais"
        />
        <StatCard
          label="Mensagens não lidas"
          value={naoLidas}
          hint={`${mensagens.length} no total`}
          icon={Mail}
          tone="gold"
          href="/admin/mensagens"
        />
      </div>

      {/* Próximos eventos + Mensagens recentes */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader
            title="Próximos eventos"
            description="Eventos com data a partir de hoje"
            action={
              <Link
                href="/admin/eventos"
                className="text-sm font-medium text-brand-green hover:text-brand-green-dark"
              >
                Ver todos
              </Link>
            }
          />
          {proximos.length === 0 ? (
            <EmptyState
              icon={CalendarClock}
              title="Nenhum evento próximo"
              description="Cadastre um evento para que ele apareça aqui."
            />
          ) : (
            <ul className="divide-y divide-brand-green-deep/[0.05]">
              {proximos.slice(0, 5).map((e: any) => (
                <li key={e.id}>
                  <Link
                    href={`/admin/eventos/${e.id}`}
                    className="flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-brand-cream-light/60"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-center leading-none text-brand-green">
                      <span className="text-sm font-bold">
                        {new Date(e.data_inicio).toLocaleDateString("pt-BR", { day: "2-digit" })}
                      </span>
                      <span className="text-[9px] font-semibold uppercase">
                        {new Date(e.data_inicio).toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")}
                      </span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-brand-green-deep">
                        {e.titulo}
                      </span>
                      <span className="mt-0.5 flex items-center gap-3 text-xs text-brand-green-deep/50">
                        <span>
                          {new Date(e.data_inicio).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        {e.local && (
                          <span className="flex items-center gap-1 truncate">
                            <MapPin size={12} /> {e.local}
                          </span>
                        )}
                      </span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-brand-green-deep/25" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <CardHeader
            title="Mensagens recentes"
            description={naoLidas > 0 ? `${naoLidas} aguardando leitura` : "Tudo em dia"}
            action={
              <Link
                href="/admin/mensagens"
                className="text-sm font-medium text-brand-green hover:text-brand-green-dark"
              >
                Ver todas
              </Link>
            }
          />
          {mensagensRecentes.length === 0 ? (
            <EmptyState icon={Inbox} title="Caixa de entrada vazia" description="Nenhuma mensagem recebida ainda." />
          ) : (
            <ul className="divide-y divide-brand-green-deep/[0.05]">
              {mensagensRecentes.map((m: any) => (
                <li key={m.id}>
                  <Link
                    href={`/admin/mensagens/${m.id}`}
                    className="flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-brand-cream-light/60"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-cream font-bold uppercase text-brand-green-dark ring-1 ring-brand-green/10">
                      {(m.nome ?? "?").charAt(0)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-brand-green-deep">
                        {m.nome}
                      </span>
                      <span className="block truncate text-xs text-brand-green-deep/50">
                        {m.assunto || m.tipo_solicitacao || m.email}
                      </span>
                    </span>
                    <Badge tone={mensagemTone[m.status] ?? "neutral"} dot>
                      {mensagemLabel[m.status] ?? m.status}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      {/* Ações rápidas */}
      <Card className="bg-gradient-to-br from-brand-cream to-brand-cream-light">
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-bold text-brand-green-deep">Ações rápidas</h2>
            <p className="mt-0.5 text-sm text-brand-green-deep/55">
              Atalhos para as tarefas mais comuns.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-brand-green-deep shadow-panel-sm ring-1 ring-brand-green-deep/[0.08] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white hover:shadow-panel hover:ring-brand-green"
              >
                <a.icon size={17} />
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
