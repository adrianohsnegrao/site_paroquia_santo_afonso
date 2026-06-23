'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchNoticiaById, updateNoticia } from '../actions';
import { Button } from '@/components/ui/Button';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditarNoticiaPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [noticia, setNoticia] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [coverImage, setCoverImage] = useState('');
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    async function loadNoticia() {
      try {
        const data = await fetchNoticiaById(params.id);
        if (data) {
          setNoticia(data);
          setCoverImage(data.imagem_capa || '');
          setConteudo(data.conteudo || '');
        } else {
          router.push('/admin/noticias');
        }
      } catch (error) {
        console.error('Erro ao carregar notícia:', error);
        router.push('/admin/noticias');
      } finally {
        setIsLoading(false);
      }
    }
    loadNoticia();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await updateNoticia(params.id, formData);
      // O redirect acontece dentro da Server Action
    } catch (error) {
      console.error('Erro ao atualizar notícia:', error);
      alert('Erro ao atualizar notícia. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <Loader2 size={32} className="animate-spin" />
          <p className="text-sm">Carregando notícia...</p>
        </div>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Notícia não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/noticias"
          className="p-2 rounded-lg text-gray-400 hover:text-brand-green hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Editar Notícia
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Atualize os campos e salve para aplicar as alterações.
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
            defaultValue={noticia.titulo}
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
            defaultValue={noticia.resumo || ''}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* Categoria */}
        <div>
          <label
            htmlFor="categoria"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categoria
          </label>
          <input
            type="text"
            name="categoria"
            id="categoria"
            defaultValue={noticia.categoria || ''}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
          />
        </div>

        {/* Imagem de Capa */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem de Capa
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
                defaultChecked={noticia.destaque}
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
                defaultChecked={noticia.destaque_home}
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
              defaultValue={noticia.status || 'rascunho'}
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
            onClick={() => router.push('/admin/noticias')}
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
