import Link from 'next/link';
import { fetchNoticias, deleteNoticia } from './actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { DataTable, Td, rowClass } from '@/components/admin/ui/DataTable';
import { Card } from '@/components/admin/ui/Card';
import { Badge } from '@/components/admin/ui/Badge';
import { EmptyState } from '@/components/admin/ui/EmptyState';
import { Plus, Pencil, Trash2, Star, Home, Newspaper } from 'lucide-react';

export default async function AdminNoticiasPage() {
  const noticias = await fetchNoticias();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notícias"
        icon={Newspaper}
        description={
          noticias.length === 0
            ? 'Nenhuma notícia cadastrada ainda.'
            : `${noticias.length} notícia${noticias.length > 1 ? 's' : ''} cadastrada${noticias.length > 1 ? 's' : ''}.`
        }
      >
        <Link href="/admin/noticias/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Nova Notícia
          </Button>
        </Link>
      </PageHeader>

      {noticias.length === 0 ? (
        <Card>
          <EmptyState
            icon={Newspaper}
            title="Nenhuma notícia cadastrada"
            description="Comece publicando a primeira notícia da paróquia."
            action={
              <Link href="/admin/noticias/novo">
                <Button as="button" variant="secondary" size="sm">
                  <Plus size={16} />
                  Criar primeira notícia
                </Button>
              </Link>
            }
          />
        </Card>
      ) : (
        <DataTable
          columns={[
            { label: 'Título' },
            { label: 'Categoria' },
            { label: 'Status' },
            { label: 'Destaques', align: 'center' },
            { label: 'Ações', align: 'right' },
          ]}
        >
          {noticias.map((noticia: any) => (
            <tr key={noticia.id} className={rowClass}>
              <Td>
                <div className="text-sm font-medium text-brand-green-deep line-clamp-1">
                  {noticia.titulo}
                </div>
                {noticia.resumo && (
                  <div className="mt-0.5 text-xs text-brand-green-deep/45 line-clamp-1">
                    {noticia.resumo}
                  </div>
                )}
              </Td>
              <Td>
                <Badge tone="brand">{noticia.categoria || '—'}</Badge>
              </Td>
              <Td>
                <Badge tone={noticia.status === 'publicado' ? 'success' : 'warning'} dot>
                  {noticia.status === 'publicado' ? 'Publicado' : 'Rascunho'}
                </Badge>
              </Td>
              <Td align="center">
                <div className="flex items-center justify-center gap-2">
                  {noticia.destaque && (
                    <span title="Destaque" className="text-brand-gold">
                      <Star size={16} fill="currentColor" />
                    </span>
                  )}
                  {noticia.destaque_home && (
                    <span title="Destaque na Home" className="text-brand-terracotta">
                      <Home size={16} />
                    </span>
                  )}
                  {!noticia.destaque && !noticia.destaque_home && (
                    <span className="text-xs text-brand-green-deep/25">—</span>
                  )}
                </div>
              </Td>
              <Td align="right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/noticias/${noticia.id}`}>
                    <Button as="button" variant="outline" size="sm">
                      <Pencil size={14} />
                      Editar
                    </Button>
                  </Link>
                  <form
                    action={async () => {
                      'use server';
                      await deleteNoticia(noticia.id);
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
