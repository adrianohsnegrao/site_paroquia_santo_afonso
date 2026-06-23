'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchEventoById, updateEvento } from '../actions';
import { Button } from '@/components/ui/Button';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditarEventoPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [evento, setEvento] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    async function loadEvento() {
      try {
        const data = await fetchEventoById(params.id);
        if (data) {
          setEvento(data);
          setImagem(data.imagem || '');
          setDescricao(data.descricao || '');
        } else {
          router.push('/admin/eventos');
        }
      } catch (error) {
        console.error('Erro ao carregar evento:', error);
        router.push('/admin/eventos');
      } finally {
        setIsLoading(false);
      }
    }
    loadEvento();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await updateEvento(params.id, formData);
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
      alert('Erro ao atualizar evento. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <Loader2 size={32} className="animate-spin" />
          <p className="text-sm">Carregando evento...</p>
        </div>
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Evento não encontrado.</p>
      </div>
    );
  }

  // Format date for datetime-local input (YYYY-MM-DDThh:mm)
  const formatDatetimeLocal = (isoString: string) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    // Adjust to local timezone to prevent offset shifting in input
    const tzoffset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - tzoffset).toISOString().slice(0, 16);
    return localISOTime;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/eventos"
          className="p-2 rounded-lg text-gray-400 hover:text-brand-green hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Editar Evento
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Atualize as informações do evento e salve as alterações.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl2 shadow-sm border border-brand-cream p-6 md:p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Título */}
          <div className="md:col-span-2">
            <label
              htmlFor="titulo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Título do Evento <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              required
              defaultValue={evento.titulo}
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Data de Início */}
          <div>
            <label
              htmlFor="data_inicio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data e Hora <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="data_inicio"
              id="data_inicio"
              required
              defaultValue={formatDatetimeLocal(evento.data_inicio)}
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
            />
          </div>

          {/* Local */}
          <div>
            <label
              htmlFor="local"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Local
            </label>
            <input
              type="text"
              name="local"
              id="local"
              defaultValue={evento.local || ''}
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        {/* Descrição Curta */}
        <div>
          <label
            htmlFor="descricao_curta"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descrição Curta
          </label>
          <textarea
            name="descricao_curta"
            id="descricao_curta"
            rows={2}
            defaultValue={evento.descricao_curta || ''}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* Imagem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem do Evento (Opcional)
          </label>
          <ImageUpload value={imagem} onChange={setImagem} />
          <input type="hidden" name="imagem" value={imagem} />
        </div>

        {/* Descrição (Rich Text) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descrição Completa <span className="text-red-500">*</span>
          </label>
          <RichTextEditor content={descricao} onChange={setDescricao} />
          <input type="hidden" name="descricao" value={descricao} />
        </div>

        {/* Configurações (Visibilidade e Status) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Visibilidade</p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="destaque_home"
                defaultChecked={evento.destaque_home}
                className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
              />
              <span className="text-sm text-gray-700">
                Destacar na página inicial
              </span>
            </label>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              defaultValue={evento.status || 'ativo'}
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
            >
              <option value="ativo">Ativo</option>
              <option value="cancelado">Cancelado</option>
              <option value="finalizado">Finalizado</option>
            </select>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            as="button"
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/eventos')}
          >
            Cancelar
          </Button>
          <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </div>
      </form>
    </div>
  );
}
