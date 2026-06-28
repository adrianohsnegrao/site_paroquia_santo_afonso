import Link from 'next/link';
import { fetchEventos, deleteEvento } from './actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { DataTable, Td, rowClass } from '@/components/admin/ui/DataTable';
import { Card } from '@/components/admin/ui/Card';
import { Badge, type BadgeTone } from '@/components/admin/ui/Badge';
import { EmptyState } from '@/components/admin/ui/EmptyState';
import { Plus, Pencil, Trash2, Home, CalendarDays, Calendar as CalendarIcon } from 'lucide-react';

const statusTone: Record<string, BadgeTone> = {
  ativo: 'success',
  cancelado: 'danger',
  finalizado: 'neutral',
};
const statusLabel: Record<string, string> = {
  ativo: 'Ativo',
  cancelado: 'Cancelado',
  finalizado: 'Finalizado',
};

export default async function AdminEventosPage() {
  const eventos = await fetchEventos();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Eventos"
        icon={CalendarDays}
        description={
          eventos.length === 0
            ? 'Nenhum evento cadastrado ainda.'
            : `${eventos.length} evento${eventos.length > 1 ? 's' : ''} cadastrado${eventos.length > 1 ? 's' : ''}.`
        }
      >
        <Link href="/admin/eventos/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Novo Evento
          </Button>
        </Link>
      </PageHeader>

      {eventos.length === 0 ? (
        <Card>
          <EmptyState
            icon={CalendarDays}
            title="Nenhum evento cadastrado"
            description="Adicione eventos ao calendário da paróquia."
            action={
              <Link href="/admin/eventos/novo">
                <Button as="button" variant="secondary" size="sm">
                  <Plus size={16} />
                  Criar primeiro evento
                </Button>
              </Link>
            }
          />
        </Card>
      ) : (
        <DataTable
          columns={[
            { label: 'Evento' },
            { label: 'Data/Hora' },
            { label: 'Status' },
            { label: 'Destaques', align: 'center' },
            { label: 'Ações', align: 'right' },
          ]}
        >
          {eventos.map((evento: any) => (
            <tr key={evento.id} className={rowClass}>
              <Td>
                <div className="text-sm font-medium text-brand-green-deep line-clamp-1">
                  {evento.titulo}
                </div>
                {evento.local && (
                  <div className="mt-0.5 text-xs text-brand-green-deep/45 line-clamp-1">
                    Local: {evento.local}
                  </div>
                )}
              </Td>
              <Td>
                <div className="flex items-center gap-1.5 text-sm text-brand-green-deep/70">
                  <CalendarIcon size={14} className="text-brand-green" />
                  {new Date(evento.data_inicio).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </Td>
              <Td>
                <Badge tone={statusTone[evento.status] ?? 'warning'} dot>
                  {statusLabel[evento.status] ?? evento.status}
                </Badge>
              </Td>
              <Td align="center">
                {evento.destaque_home ? (
                  <span title="Destaque na Home" className="text-brand-terracotta">
                    <Home size={16} />
                  </span>
                ) : (
                  <span className="text-xs text-brand-green-deep/25">—</span>
                )}
              </Td>
              <Td align="right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/eventos/${evento.id}`}>
                    <Button as="button" variant="outline" size="sm">
                      <Pencil size={14} />
                      Editar
                    </Button>
                  </Link>
                  <form
                    action={async () => {
                      'use server';
                      await deleteEvento(evento.id);
                    }}
                  >
                    <Button
                      as="button"
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 size={14} />
                      Excluir
                    </Button>
                  </form>
                </div>
              </Td>
            </tr>
          ))}
        </DataTable>
      )}
    </div>
  );
}
