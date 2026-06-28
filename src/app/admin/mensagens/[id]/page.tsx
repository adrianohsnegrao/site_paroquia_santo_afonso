'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchMensagemById, updateMensagemStatus } from '../actions';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/admin/ui/PageHeader';
import { Card } from '@/components/admin/ui/Card';
import { Badge, type BadgeTone } from '@/components/admin/ui/Badge';
import { Field, Select } from '@/components/admin/ui/Form';
import { Loader2, Mail, Phone, Calendar, User } from 'lucide-react';

const statusTone: Record<string, BadgeTone> = {
  nova: 'info',
  lida: 'neutral',
  respondida: 'success',
};
const statusLabel: Record<string, string> = {
  nova: 'Nova',
  lida: 'Lida',
  respondida: 'Respondida',
};

export default function VerMensagemPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [mensagem, setMensagem] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMensagem() {
      try {
        const data = await fetchMensagemById(params.id);
        if (data) {
          setMensagem(data);
        } else {
          router.push('/admin/mensagens');
        }
      } catch (error) {
        console.error('Erro ao carregar mensagem:', error);
        router.push('/admin/mensagens');
      } finally {
        setIsLoading(false);
      }
    }
    loadMensagem();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await updateMensagemStatus(params.id, formData);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-brand-green-deep/40">
          <Loader2 size={30} className="animate-spin text-brand-green" />
          <p className="text-sm">Carregando mensagem...</p>
        </div>
      </div>
    );
  }

  if (!mensagem) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-brand-green-deep/50">Mensagem não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Visualizar Mensagem"
        backHref="/admin/mensagens"
        description="Detalhes do contato recebido pelo site."
      >
        <Badge tone={statusTone[mensagem.status] ?? 'neutral'} dot>
          {statusLabel[mensagem.status] ?? mensagem.status}
        </Badge>
      </PageHeader>

      <Card className="overflow-hidden">
        {/* Cabeçalho do contato */}
        <div className="border-b border-brand-green-deep/[0.06] bg-brand-cream/40 p-6 md:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-green-deep">
                {mensagem.assunto || 'Sem assunto'}
              </h2>
              {mensagem.tipo_solicitacao && (
                <div className="mt-2">
                  <Badge tone="brand">{mensagem.tipo_solicitacao}</Badge>
                </div>
              )}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-sm text-brand-green-deep/60 ring-1 ring-brand-green-deep/[0.08]">
              <Calendar size={15} />
              {new Date(mensagem.created_at).toLocaleString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-green/10 text-brand-green">
                <User size={20} />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-green-deep">{mensagem.nome}</p>
                <p className="text-xs text-brand-green-deep/50">Remetente</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <a
                href={`mailto:${mensagem.email}`}
                className="flex items-center gap-2 text-sm text-brand-green-deep/70 hover:text-brand-green"
              >
                <Mail size={16} className="text-brand-green" />
                {mensagem.email}
              </a>
              {mensagem.telefone && (
                <a
                  href={`tel:${mensagem.telefone}`}
                  className="flex items-center gap-2 text-sm text-brand-green-deep/70 hover:text-brand-green"
                >
                  <Phone size={16} className="text-brand-green" />
                  {mensagem.telefone}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Corpo da mensagem */}
        <div className="p-6 md:p-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-green-deep/45">
            Mensagem
          </h3>
          <div className="whitespace-pre-wrap rounded-xl bg-brand-cream-light/60 p-4 text-sm leading-relaxed text-brand-green-deep/80 ring-1 ring-brand-green-deep/[0.06] md:p-6">
            {mensagem.mensagem}
          </div>
        </div>

        {/* Barra de status */}
        <div className="border-t border-brand-green-deep/[0.06] bg-brand-cream/40 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <Field label="Atualizar Status" htmlFor="status" className="w-full max-w-xs">
              <Select name="status" id="status" defaultValue={mensagem.status}>
                <option value="nova">Nova</option>
                <option value="lida">Lida</option>
                <option value="respondida">Respondida</option>
              </Select>
            </Field>
            <Button as="button" type="submit" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? 'Salvando...' : 'Salvar Status'}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
