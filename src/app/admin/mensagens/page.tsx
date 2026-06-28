import Link from 'next/link';
import { fetchMensagens, deleteMensagem } from './actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { DataTable, Td, rowClass } from '@/components/admin/ui/DataTable';
import { Card } from '@/components/admin/ui/Card';
import { Badge, type BadgeTone } from '@/components/admin/ui/Badge';
import { EmptyState } from '@/components/admin/ui/EmptyState';
import { Eye, Trash2, Mail, Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

export const dynamic = 'force-dynamic';

const statusTone: Record<string, BadgeTone> = {
  nova: 'info',
  lida: 'neutral',
  respondida: 'success',
};
const statusLabel: Record<string, string> = {
  nova: 'Nova',
  lida: 'Lida',
  respondida: 'Respondida',
};

export default async function AdminMensagensPage() {
  const mensagens = await fetchMensagens();
  const naoLidas = mensagens.filter((m: any) => m.status === 'nova').length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mensagens de Contato"
        icon={Mail}
        description={
          mensagens.length === 0
            ? 'Nenhuma mensagem recebida ainda.'
            : `${mensagens.length} mensagem(ns)${naoLidas > 0 ? ` · ${naoLidas} não lida(s)` : ''}.`
        }
      />

      {mensagens.length === 0 ? (
        <Card>
          <EmptyState
            icon={Inbox}
            title="Caixa de entrada vazia"
            description="As mensagens enviadas pelo formulário de contato aparecerão aqui."
          />
        </Card>
      ) : (
        <DataTable
          columns={[
            { label: 'Remetente' },
            { label: 'Assunto / Solicitação' },
            { label: 'Data' },
            { label: 'Status' },
            { label: 'Ações', align: 'right' },
          ]}
        >
          {mensagens.map((mensagem: any) => (
            <tr
              key={mensagem.id}
              className={cn(rowClass, mensagem.status === 'nova' && 'bg-sky-50/40')}
            >
              <Td>
                <div className="text-sm font-medium text-brand-green-deep line-clamp-1">
                  {mensagem.nome}
                </div>
                <div className="mt-0.5 text-xs text-brand-green-deep/45">{mensagem.email}</div>
              </Td>
              <Td>
                <div className="text-sm text-brand-green-deep/80 line-clamp-1">
                  {mensagem.assunto || 'Sem assunto'}
                </div>
                <div className="mt-0.5 text-xs font-medium text-brand-green">
                  {mensagem.tipo_solicitacao}
                </div>
              </Td>
              <Td>
                <div className="text-sm text-brand-green-deep/70">
                  {new Date(mensagem.created_at).toLocaleDateString('pt-BR')}
                </div>
                <div className="mt-0.5 text-xs text-brand-green-deep/40">
                  {new Date(mensagem.created_at).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </Td>
              <Td>
                <Badge tone={statusTone[mensagem.status] ?? 'neutral'} dot>
                  {statusLabel[mensagem.status] ?? mensagem.status}
                </Badge>
              </Td>
              <Td align="right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/mensagens/${mensagem.id}`}>
                    <Button as="button" variant="outline" size="sm">
                      <Eye size={14} />
                      Ver
                    </Button>
                  </Link>
                  <form
                    action={async () => {
                      'use server';
                      await deleteMensagem(mensagem.id);
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
