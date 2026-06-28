'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPastoral } from '../actions';
import { Button } from '@/components/ui/Button';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NovaPastoralPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createPastoral(formData);
    } catch (error) {
      console.error('Erro ao criar pastoral:', error);
      alert('Erro ao criar pastoral. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/pastorais"
          className="p-2 rounded-lg text-gray-400 hover:text-brand-green hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-green-deep">
            Nova Pastoral / Movimento
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Cadastre as informações de uma nova pastoral ou movimento.
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
              Nome da Pastoral/Movimento <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              required
              placeholder="Ex: Pastoral Familiar"
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Ícone */}
          <div className="md:col-span-2">
            <label
              htmlFor="icone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ícone (Emoji ou Código)
            </label>
            <input
              type="text"
              name="icone"
              id="icone"
              placeholder="Ex: 👨‍👩‍👧‍👦"
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
            placeholder="Breve resumo sobre a missão da pastoral..."
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* Imagem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem Representativa (Opcional)
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
              className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-white"
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            as="button"
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/pastorais')}
          >
            Cancelar
          </Button>
          <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar Registro'}
          </Button>
        </div>
      </form>
    </div>
  );
}
