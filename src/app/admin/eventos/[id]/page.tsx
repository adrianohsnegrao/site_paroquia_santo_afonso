'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchEventoById, updateEvento } from '../actions';
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

export default function EditarEventoPage({ params }: { params: { id: string } }) {
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

  // Formata a data ISO para o input datetime-local (YYYY-MM-DDThh:mm) no fuso local.
  const formatDatetimeLocal = (isoString: string) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const tzoffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - tzoffset).toISOString().slice(0, 16);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-brand-green-deep/40">
          <Loader2 size={30} className="animate-spin text-brand-green" />
          <p className="text-sm">Carregando evento...</p>
        </div>
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-brand-green-deep/50">Evento não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Editar Evento"
        backHref="/admin/eventos"
        description="Atualize as informações do evento e salve as alterações."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Título do Evento" htmlFor="titulo" required>
          <Input type="text" name="titulo" id="titulo" required defaultValue={evento.titulo} />
        </Field>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Data e Hora" htmlFor="data_inicio" required>
            <Input
              type="datetime-local"
              name="data_inicio"
              id="data_inicio"
              required
              defaultValue={formatDatetimeLocal(evento.data_inicio)}
              className="bg-white"
            />
          </Field>
          <Field label="Local" htmlFor="local">
            <Input type="text" name="local" id="local" defaultValue={evento.local || ''} />
          </Field>
        </div>

        <Field label="Descrição Curta" htmlFor="descricao_curta">
          <Textarea name="descricao_curta" id="descricao_curta" rows={2} defaultValue={evento.descricao_curta || ''} />
        </Field>

        <Field label="Imagem do Evento (opcional)">
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
            <CheckboxField name="destaque_home" label="Destacar na página inicial" defaultChecked={evento.destaque_home} />
          </div>
          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue={evento.status || 'ativo'}>
              <option value="ativo">Ativo</option>
              <option value="cancelado">Cancelado</option>
              <option value="finalizado">Finalizado</option>
            </Select>
          </Field>
        </div>

        <FormActions>
          <Button as="button" type="button" variant="outline" onClick={() => router.push('/admin/eventos')}>
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
