'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function requireAuth() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Não autorizado. Faça login para continuar.');
  }

  return supabase;
}

export async function fetchMensagens() {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('mensagens_contato')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar mensagens:', error);
    return [];
  }

  console.log('Total de mensagens encontradas no DB:', data?.length);

  return data;
}

export async function fetchMensagemById(id: string) {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('mensagens_contato')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar mensagem por ID:', error);
    return null;
  }

  return data;
}

export async function updateMensagemStatus(id: string, formData: FormData) {
  const supabase = await requireAuth();

  const status = formData.get('status') as string;

  const { error } = await supabase
    .from('mensagens_contato')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar status da mensagem:', error);
    throw new Error('Falha ao atualizar status da mensagem.');
  }

  revalidatePath('/admin/mensagens');
  redirect('/admin/mensagens');
}

export async function deleteMensagem(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase.from('mensagens_contato').delete().eq('id', id);

  if (error) {
    console.error('Erro ao excluir mensagem:', error);
    throw new Error('Falha ao excluir mensagem.');
  }

  revalidatePath('/admin/mensagens');
}
