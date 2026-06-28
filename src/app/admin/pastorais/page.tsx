import Link from 'next/link';
import { fetchPastorais, deletePastoral } from './actions';
import { Button } from '@/components/ui/Button';
import { Plus, Pencil, Trash2, Home, Users } from 'lucide-react';

export default async function AdminPastoraisPage() {
  const pastorais = await fetchPastorais();

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Pastorais e Movimentos
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {pastorais.length === 0
              ? 'Nenhuma pastoral ou movimento cadastrado ainda.'
              : `${pastorais.length} registro${pastorais.length > 1 ? 's' : ''} encontrado${pastorais.length > 1 ? 's' : ''}.`}
          </p>
        </div>
        <Link href="/admin/pastorais/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Novo Cadastro
          </Button>
        </Link>
      </div>

      {/* Tabela de listagem */}
      <div className="bg-white rounded-xl2 shadow-sm border border-brand-cream overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Pastoral / Movimento
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ícone
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Destaques
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {pastorais.map((pastoral: any) => (
                <tr
                  key={pastoral.id}
                  className="hover:bg-brand-cream-light transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                      {pastoral.titulo}
                    </div>
                    {pastoral.descricao_curta && (
                      <div className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                        {pastoral.descricao_curta}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {pastoral.icone ? (
                      <span className="text-xl">{pastoral.icone}</span>
                    ) : (
                      <span className="text-gray-300 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        pastoral.status === 'ativo'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {pastoral.status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {pastoral.destaque_home && (
                        <span title="Destaque na Home" className="text-brand-terracotta">
                          <Home size={16} />
                        </span>
                      )}
                      {!pastoral.destaque_home && (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                </tr>
              ))}

              {pastorais.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Users size={32} className="text-gray-300" />
                      <p>Nenhuma pastoral cadastrada.</p>
                      <Link href="/admin/pastorais/novo">
                        <Button as="button" variant="secondary" size="sm">
                          Criar o primeiro cadastro
                        </Button>
                      </Link>
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
