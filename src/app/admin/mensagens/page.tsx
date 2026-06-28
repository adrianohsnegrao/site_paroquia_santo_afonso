import Link from 'next/link';
import { fetchMensagens, deleteMensagem } from './actions';
import { Button } from '@/components/ui/Button';
import { Eye, Trash2, Mail } from 'lucide-react';

export default async function AdminMensagensPage() {
  const mensagens = await fetchMensagens();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'nova':
        return 'bg-blue-100 text-blue-700 font-semibold';
      case 'lida':
        return 'bg-gray-100 text-gray-700';
      case 'respondida':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'nova':
        return 'Nova';
      case 'lida':
        return 'Lida';
      case 'respondida':
        return 'Respondida';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Mensagens de Contato
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {mensagens.length === 0
              ? 'Nenhuma mensagem recebida ainda.'
              : `${mensagens.length} mensagem(ns) encontrada(s).`}
          </p>
        </div>
      </div>

      {/* Tabela de listagem */}
      <div className="bg-white rounded-xl2 shadow-sm border border-brand-cream overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Remetente
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Assunto / Solicitação
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mensagens.map((mensagem: any) => (
                <tr
                  key={mensagem.id}
                  className={`transition-colors hover:bg-brand-cream-light ${
                    mensagem.status === 'nova' ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                      {mensagem.nome}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {mensagem.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 line-clamp-1">
                      {mensagem.assunto || 'Sem assunto'}
                    </div>
                    <div className="text-xs text-brand-green font-medium mt-0.5">
                      {mensagem.tipo_solicitacao}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {new Date(mensagem.created_at).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {new Date(mensagem.created_at).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${getStatusColor(
                        mensagem.status
                      )}`}
                    >
                      {getStatusLabel(mensagem.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                </tr>
              ))}

              {mensagens.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Mail size={32} className="text-gray-300" />
                      <p>Caixa de entrada vazia.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
