import Link from 'next/link';
import { fetchAvisos, deleteAviso } from './actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { DataTable, Td, rowClass } from '@/components/admin/ui/DataTable';
import { Card } from '@/components/admin/ui/Card';
import { Badge } from '@/components/admin/ui/Badge';
import { EmptyState } from '@/components/admin/ui/EmptyState';
import { Plus, Pencil, Trash2, Star, Home, Megaphone } from 'lucide-react';

export default async function AdminAvisosPage() {
  const avisos = await fetchAvisos();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Avisos / Comunicados"
        icon={Megaphone}
        description={
          avisos.length === 0
            ? 'Nenhum aviso cadastrado ainda.'
            : `${avisos.length} aviso${avisos.length > 1 ? 's' : ''} cadastrado${avisos.length > 1 ? 's' : ''}.`
        }
      >
        <Link href="/admin/avisos/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Novo Aviso
          </Button>
        </Link>
      </PageHeader>

      {avisos.length === 0 ? (
        <Card>
          <EmptyState
            icon={Megaphone}
            title="Nenhum aviso cadastrado"
            description="Publique comunicados rápidos para a comunidade."
            action={
              <Link href="/admin/avisos/novo">
                <Button as="button" variant="secondary" size="sm">
                  <Plus size={16} />
                  Criar primeiro aviso
                </Button>
              </Link>
            }
          />
        </Card>
      ) : (
        <DataTable
          columns={[
            { label: 'Título' },
            { label: 'Status' },
            { label: 'Destaques', align: 'center' },
            { label: 'Ações', align: 'right' },
          ]}
        >
          {avisos.map((aviso: any) => (
            <tr key={aviso.id} className={rowClass}>
              <Td>
                <div className="text-sm font-medium text-brand-green-deep line-clamp-1">
                  {aviso.titulo}
                </div>
                {aviso.resumo && (
                  <div className="mt-0.5 text-xs text-brand-green-deep/45 line-clamp-1">
                    {aviso.resumo}
                  </div>
                )}
              </Td>
              <Td>
                <Badge tone={aviso.status === 'publicado' ? 'success' : 'warning'} dot>
                  {aviso.status === 'publicado' ? 'Publicado' : 'Rascunho'}
                </Badge>
              </Td>
              <Td align="center">
                <div className="flex items-center justify-center gap-2">
                  {aviso.destaque && (
                    <span title="Destaque" className="text-brand-gold">
                      <Star size={16} fill="currentColor" />
                    </span>
                  )}
                  {aviso.destaque_home && (
                    <span title="Destaque na Home" className="text-brand-terracotta">
                      <Home size={16} />
                    </span>
                  )}
                  {!aviso.destaque && !aviso.destaque_home && (
                    <span className="text-xs text-brand-green-deep/25">—</span>
                  )}
                </div>
              </Td>
              <Td align="right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/avisos/${aviso.id}`}>
                    <Button as="button" variant="outline" size="sm">
                      <Pencil size={14} />
                      Editar
                    </Button>
                  </Link>
                  <form
                    action={async () => {
                      'use server';
                      await deleteAviso(aviso.id);
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
