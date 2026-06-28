'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchNoticiaById, updateNoticia } from '../actions';
import { Button } from '@/components/ui/Button';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import {
  FormCard,
  FormActions,
  Field,
  Input,
  Textarea,
  Select,
  CheckboxField,
} from '@/components/admin/ui/Form';
import { Loader2 } from 'lucide-react';

export default function EditarNoticiaPage({ params }: { params: { id: string } }) {
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
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-brand-green-deep/40">
          <Loader2 size={30} className="animate-spin text-brand-green" />
          <p className="text-sm">Carregando notícia...</p>
        </div>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-brand-green-deep/50">Notícia não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Editar Notícia"
        backHref="/admin/noticias"
        description="Atualize os campos e salve para aplicar as alterações."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Título" htmlFor="titulo" required>
          <Input type="text" name="titulo" id="titulo" required defaultValue={noticia.titulo} />
        </Field>

        <Field label="Resumo" htmlFor="resumo">
          <Textarea name="resumo" id="resumo" rows={3} defaultValue={noticia.resumo || ''} />
        </Field>

        <Field label="Categoria" htmlFor="categoria">
          <Input type="text" name="categoria" id="categoria" defaultValue={noticia.categoria || ''} />
        </Field>

        <Field label="Imagem de Capa">
          <ImageUpload value={coverImage} onChange={setCoverImage} />
          <input type="hidden" name="imagem_capa" value={coverImage} />
        </Field>

        <Field label="Conteúdo" required>
          <RichTextEditor content={conteudo} onChange={setConteudo} />
          <input type="hidden" name="conteudo" value={conteudo} />
        </Field>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-brand-green-deep/80">Visibilidade</p>
            <CheckboxField name="destaque" label="Marcar como destaque" defaultChecked={noticia.destaque} />
            <CheckboxField name="destaque_home" label="Exibir na página inicial" defaultChecked={noticia.destaque_home} />
          </div>

          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue={noticia.status || 'rascunho'}>
              <option value="rascunho">Rascunho</option>
              <option value="publicado">Publicado</option>
            </Select>
          </Field>
        </div>

        <FormActions>
          <Button as="button" type="button" variant="outline" onClick={() => router.push('/admin/noticias')}>
            Cancelar
          </Button>
          <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </FormActions>
      </FormCard>
    </div>
  );
}
