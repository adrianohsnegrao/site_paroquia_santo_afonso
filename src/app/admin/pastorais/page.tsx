import Link from 'next/link';
import { fetchPastorais, deletePastoral } from './actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { DataTable, Td, rowClass } from '@/components/admin/ui/DataTable';
import { Card } from '@/components/admin/ui/Card';
import { Badge } from '@/components/admin/ui/Badge';
import { EmptyState } from '@/components/admin/ui/EmptyState';
import { Plus, Pencil, Trash2, Home, Users } from 'lucide-react';

export default async function AdminPastoraisPage() {
  const pastorais = await fetchPastorais();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pastorais e Movimentos"
        icon={Users}
        description={
          pastorais.length === 0
            ? 'Nenhuma pastoral ou movimento cadastrado ainda.'
            : `${pastorais.length} registro${pastorais.length > 1 ? 's' : ''} encontrado${pastorais.length > 1 ? 's' : ''}.`
        }
      >
        <Link href="/admin/pastorais/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Novo Cadastro
          </Button>
        </Link>
      </PageHeader>

      {pastorais.length === 0 ? (
        <Card>
          <EmptyState
            icon={Users}
            title="Nenhuma pastoral cadastrada"
            description="Cadastre as pastorais e movimentos da comunidade."
            action={
              <Link href="/admin/pastorais/novo">
                <Button as="button" variant="secondary" size="sm">
                  <Plus size={16} />
                  Criar o primeiro cadastro
                </Button>
              </Link>
            }
          />
        </Card>
      ) : (
        <DataTable
          columns={[
            { label: 'Pastoral / Movimento' },
            { label: 'Ícone' },
            { label: 'Status' },
            { label: 'Destaques', align: 'center' },
            { label: 'Ações', align: 'right' },
          ]}
        >
          {pastorais.map((pastoral: any) => (
            <tr key={pastoral.id} className={rowClass}>
              <Td>
                <div className="text-sm font-medium text-brand-green-deep line-clamp-1">
                  {pastoral.titulo}
                </div>
                {pastoral.descricao_curta && (
                  <div className="mt-0.5 text-xs text-brand-green-deep/45 line-clamp-1">
                    {pastoral.descricao_curta}
                  </div>
                )}
              </Td>
              <Td>
                {pastoral.icone ? (
                  <span className="text-xl">{pastoral.icone}</span>
                ) : (
                  <span className="text-xs text-brand-green-deep/25">—</span>
                )}
              </Td>
              <Td>
                <Badge tone={pastoral.status === 'ativo' ? 'success' : 'neutral'} dot>
                  {pastoral.status === 'ativo' ? 'Ativo' : 'Inativo'}
                </Badge>
              </Td>
              <Td align="center">
                {pastoral.destaque_home ? (
                  <span title="Destaque na Home" className="text-brand-terracotta">
                    <Home size={16} />
                  </span>
                ) : (
                  <span className="text-xs text-brand-green-deep/25">—</span>
                )}
              </Td>
              <Td align="right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/pastorais/${pastoral.id}`}>
                    <Button as="button" variant="outline" size="sm">
                      <Pencil size={14} />
                      Editar
                    </Button>
                  </Link>
                  <form
                    action={async () => {
                      'use server';
                      await deletePastoral(pastoral.id);
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
