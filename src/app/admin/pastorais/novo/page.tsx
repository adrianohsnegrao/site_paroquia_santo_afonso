'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPastoral } from '../actions';
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
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Nova Pastoral / Movimento"
        backHref="/admin/pastorais"
        description="Cadastre as informações de uma nova pastoral ou movimento."
      />

      <FormCard onSubmit={handleSubmit}>
        <Field label="Nome da Pastoral/Movimento" htmlFor="titulo" required>
          <Input type="text" name="titulo" id="titulo" required placeholder="Ex: Pastoral Familiar" />
        </Field>

        <Field label="Ícone (emoji ou código)" htmlFor="icone">
          <Input type="text" name="icone" id="icone" placeholder="Ex: 👨‍👩‍👧‍👦" />
        </Field>

        <Field label="Descrição Curta" htmlFor="descricao_curta" hint="Resumo sobre a missão da pastoral.">
          <Textarea name="descricao_curta" id="descricao_curta" rows={2} placeholder="Breve resumo sobre a missão da pastoral..." />
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
            <CheckboxField name="destaque_home" label="Destacar na página inicial" />
          </div>
          <Field label="Status" htmlFor="status">
            <Select name="status" id="status" defaultValue="ativo">
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
            {isSubmitting ? 'Salvando...' : 'Salvar Registro'}
          </Button>
        </FormActions>
      </FormCard>
    </div>
  );
}
