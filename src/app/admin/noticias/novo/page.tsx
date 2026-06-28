'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNoticia } from '../actions';
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

export default function NovaNoticiaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createNoticia(formData);
      // O redirect acontece dentro da Server Action
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
      alert('Erro ao criar notícia. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Nova Notícia"
        backHref="/admin/noticias"
        description="Preencha os campos abaixo para publicar uma nova notícia."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Título" htmlFor="titulo" required>
          <Input
            type="text"
            name="titulo"
            id="titulo"
            required
            placeholder="Ex: Solenidade de Santo Afonso Maria de Ligório"
          />
        </Field>

        <Field label="Resumo" htmlFor="resumo" hint="Aparece nos cards de listagem.">
          <Textarea
            name="resumo"
            id="resumo"
            rows={3}
            placeholder="Breve descrição que aparecerá nos cards de listagem..."
          />
        </Field>

        <Field label="Categoria" htmlFor="categoria">
          <Input type="text" name="categoria" id="categoria" placeholder="Ex: Paróquia, Liturgia, Comunidade" />
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
            <CheckboxField name="destaque" label="Marcar como destaque" />
            <CheckboxField name="destaque_home" label="Exibir na página inicial" />
          </div>

          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue="rascunho">
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
            {isSubmitting ? 'Salvando...' : 'Salvar Notícia'}
          </Button>
        </FormActions>
      </FormCard>
    </div>
  );
}
