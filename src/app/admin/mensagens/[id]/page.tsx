'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchMensagemById, updateMensagemStatus } from '../actions';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Loader2, Mail, Phone, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function VerMensagemPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [mensagem, setMensagem] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMensagem() {
      try {
        const data = await fetchMensagemById(params.id);
        if (data) {
          setMensagem(data);
        } else {
          router.push('/admin/mensagens');
        }
      } catch (error) {
        console.error('Erro ao carregar mensagem:', error);
        router.push('/admin/mensagens');
      } finally {
        setIsLoading(false);
      }
    }
    loadMensagem();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await updateMensagemStatus(params.id, formData);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <Loader2 size={32} className="animate-spin" />
          <p className="text-sm">Carregando mensagem...</p>
        </div>
      </div>
    );
  }

  if (!mensagem) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Mensagem não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/mensagens"
          className="p-2 rounded-lg text-gray-400 hover:text-brand-green hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Visualizar Mensagem
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Detalhes do contato recebido pelo site.
          </p>
        </div>
      </div>

      {/* Cartão de Detalhes da Mensagem */}
      <div className="bg-white rounded-xl2 shadow-sm border border-brand-cream overflow-hidden">
        {/* Top Info */}
        <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {mensagem.assunto || 'Sem assunto'}
              </h2>
              <div className="inline-flex mt-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-green/10 text-brand-green">
                {mensagem.tipo_solicitacao}
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <Calendar size={16} />
              {new Date(mensagem.created_at).toLocaleString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{mensagem.nome}</p>
                <p className="text-xs text-gray-500">Remetente</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="text-brand-green" />
                <a href={`mailto:${mensagem.email}`} className="hover:underline">
                  {mensagem.email}
                </a>
              </div>
              {mensagem.telefone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} className="text-brand-green" />
                  <a href={`tel:${mensagem.telefone}`} className="hover:underline">
                    {mensagem.telefone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mensagem Corpo */}
        <div className="p-6 md:p-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Mensagem</h3>
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 text-gray-700 whitespace-pre-wrap border border-gray-100 text-sm leading-relaxed">
            {mensagem.mensagem}
          </div>
        </div>

        {/* Formulário de Status */}
        <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex-1 max-w-sm">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Atualizar Status
              </label>
              <select
                name="status"
                id="status"
                defaultValue={mensagem.status}
                className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
              >
                <option value="nova">Nova</option>
                <option value="lida">Lida</option>
                <option value="respondida">Respondida</option>
              </select>
            </div>
            <div className="flex gap-3">
              <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
                {isSubmitting ? 'Salvando...' : 'Salvar Status'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
