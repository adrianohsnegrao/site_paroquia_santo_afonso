'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createEvento } from '../actions';
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

export default function NovoEventoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createEvento(formData);
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      alert('Erro ao criar evento. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Novo Evento"
        backHref="/admin/eventos"
        description="Cadastre as informações de um novo evento da paróquia."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Título do Evento" htmlFor="titulo" required>
          <Input type="text" name="titulo" id="titulo" required placeholder="Ex: Festa de Santo Afonso" />
        </Field>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Data e Hora" htmlFor="data_inicio" required>
            <Input type="datetime-local" name="data_inicio" id="data_inicio" required className="bg-white" />
          </Field>
          <Field label="Local" htmlFor="local">
            <Input type="text" name="local" id="local" placeholder="Ex: Salão Paroquial" />
          </Field>
        </div>

        <Field label="Descrição Curta" htmlFor="descricao_curta" hint="Resumo para os cards e listagens.">
          <Textarea name="descricao_curta" id="descricao_curta" rows={2} placeholder="Breve resumo para os cards e listagens..." />
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
            <CheckboxField name="destaque_home" label="Destacar na página inicial" />
          </div>
          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue="ativo">
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
            {isSubmitting ? 'Salvando...' : 'Salvar Evento'}
          </Button>
        </FormActions>
      </FormCard>
    </div>
  );
}
