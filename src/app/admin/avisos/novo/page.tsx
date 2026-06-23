'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createAviso } from '../actions';
import { Button } from '@/components/ui/Button';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NovoAvisoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createAviso(formData);
      // O redirect acontece dentro da Server Action
    } catch (error) {
      console.error('Erro ao criar aviso:', error);
      alert('Erro ao criar aviso. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/avisos"
          className="p-2 rounded-lg text-gray-400 hover:text-brand-green hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Novo Aviso
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Preencha os campos abaixo para publicar um novo aviso ou comunicado.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl2 shadow-sm border border-brand-cream p-6 md:p-8 space-y-6"
      >
        {/* Título */}
        <div>
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            required
            placeholder="Ex: Mudança no horário de missa"
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
          />
        </div>

        {/* Resumo */}
        <div>
          <label
            htmlFor="resumo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Resumo
          </label>
          <textarea
            name="resumo"
            id="resumo"
            rows={3}
            placeholder="Breve descrição que aparecerá nos cards de listagem..."
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* Imagem de Capa */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem de Capa (Opcional)
          </label>
          <ImageUpload value={coverImage} onChange={setCoverImage} />
          <input type="hidden" name="imagem_capa" value={coverImage} />
        </div>

        {/* Conteúdo (Rich Text) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conteúdo <span className="text-red-500">*</span>
          </label>
          <RichTextEditor content={conteudo} onChange={setConteudo} />
          <input type="hidden" name="conteudo" value={conteudo} />
        </div>

        {/* Destaques e Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Checkboxes de destaque */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">Visibilidade</p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="destaque"
                className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
              />
              <span className="text-sm text-gray-700">
                Marcar como destaque
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="destaque_home"
                className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
              />
              <span className="text-sm text-gray-700">
                Exibir na página inicial
              </span>
            </label>
          </div>

          {/* Status */}
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
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
            >
              <option value="rascunho">Rascunho</option>
              <option value="publicado">Publicado</option>
            </select>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            as="button"
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/avisos')}
          >
            Cancelar
          </Button>
          <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar Aviso'}
          </Button>
        </div>
      </form>
    </div>
  );
}
