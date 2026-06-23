import Link from 'next/link';
import { fetchEventos, deleteEvento } from './actions';
import { Button } from '@/components/ui/Button';
import { Plus, Pencil, Trash2, Home, Calendar as CalendarIcon } from 'lucide-react';

export default async function AdminEventosPage() {
  const eventos = await fetchEventos();

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Eventos
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {eventos.length === 0
              ? 'Nenhum evento cadastrado ainda.'
              : `${eventos.length} evento${eventos.length > 1 ? 's' : ''} cadastrado${eventos.length > 1 ? 's' : ''}.`}
          </p>
        </div>
        <Link href="/admin/eventos/novo">
          <Button as="button" variant="secondary" size="md">
            <Plus size={18} />
            Novo Evento
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
                  Evento
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Data/Hora
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
              {eventos.map((evento: any) => (
                <tr
                  key={evento.id}
                  className="hover:bg-brand-cream-light transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                      {evento.titulo}
                    </div>
                    {evento.local && (
                      <div className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                        Local: {evento.local}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-600 gap-1.5">
                      <CalendarIcon size={14} className="text-brand-green" />
                      {new Date(evento.data_inicio).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        evento.status === 'ativo'
                          ? 'bg-green-100 text-green-700'
                          : evento.status === 'cancelado'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {evento.status === 'ativo'
                        ? 'Ativo'
                        : evento.status === 'cancelado'
                        ? 'Cancelado'
                        : 'Finalizado'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {evento.destaque_home && (
                        <span title="Destaque na Home" className="text-brand-terracotta">
                          <Home size={16} />
                        </span>
                      )}
                      {!evento.destaque_home && (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                </tr>
              ))}

              {eventos.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Plus size={32} className="text-gray-300" />
                      <p>Nenhum evento cadastrado.</p>
                      <Link href="/admin/eventos/novo">
                        <Button as="button" variant="secondary" size="sm">
                          Criar primeiro evento
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
