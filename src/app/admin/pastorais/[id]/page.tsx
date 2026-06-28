'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchPastoralById, updatePastoral } from '../actions';
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

export default function EditarPastoralPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [pastoral, setPastoral] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    async function loadPastoral() {
      try {
        const data = await fetchPastoralById(params.id);
        if (data) {
          setPastoral(data);
          setImagem(data.imagem || '');
          setDescricao(data.descricao || '');
        } else {
          router.push('/admin/pastorais');
        }
      } catch (error) {
        console.error('Erro ao carregar pastoral:', error);
        router.push('/admin/pastorais');
      } finally {
        setIsLoading(false);
      }
    }
    loadPastoral();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await updatePastoral(params.id, formData);
    } catch (error) {
      console.error('Erro ao atualizar pastoral:', error);
      alert('Erro ao atualizar pastoral. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-brand-green-deep/40">
          <Loader2 size={30} className="animate-spin text-brand-green" />
          <p className="text-sm">Carregando informações...</p>
        </div>
      </div>
    );
  }

  if (!pastoral) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-brand-green-deep/50">Pastoral/Movimento não encontrado(a).</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Editar Pastoral / Movimento"
        backHref="/admin/pastorais"
        description="Atualize as informações e salve as alterações."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Nome da Pastoral/Movimento" htmlFor="titulo" required>
          <Input type="text" name="titulo" id="titulo" required defaultValue={pastoral.titulo} />
        </Field>

        <Field label="Ícone (emoji ou código)" htmlFor="icone">
          <Input type="text" name="icone" id="icone" defaultValue={pastoral.icone || ''} placeholder="Ex: 👨‍👩‍👧‍👦" />
        </Field>

        <Field label="Descrição Curta" htmlFor="descricao_curta">
          <Textarea name="descricao_curta" id="descricao_curta" rows={2} defaultValue={pastoral.descricao_curta || ''} />
        </Field>

        <Field label="Imagem Representativa (opcional)">
          <ImageUpload value={imagem} onChange={setImagem} />
          <input type="hidden" name="imagem" value={imagem} />
        </Field>

        <Field label="Descrição Completa" required>
          <RichTextEditor content={descricao} onChange={setDescricao} />
          <input type="hidden" name="descricao" value={descricao} />
        </Field>

        <div className="grid grid-cols-1 gap-6 rounded-xl bg-brand-cream-light/50 p-4 ring-1 ring-brand-green-deep/[0.06] md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-brand-green-deep/80">Visibilidade</p>
            <CheckboxField name="destaque_home" label="Destacar na página inicial" defaultChecked={pastoral.destaque_home} />
          </div>
          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue={pastoral.status || 'ativo'}>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </Select>
          </Field>
        </div>

        <FormActions>
          <Button as="button" type="button" variant="outline" onClick={() => router.push('/admin/pastorais')}>
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
