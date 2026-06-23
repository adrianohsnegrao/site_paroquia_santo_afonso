'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function gerarSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ─── Queries ──────────────────────────────────────────────────────────────────

export async function fetchEventos() {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('eventos')
    .select('*')
    .order('data_inicio', { ascending: false });

  if (error) {
    console.error('Erro ao buscar eventos:', error);
    return [];
  }

  return data;
}

export async function fetchEventoById(id: string) {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('eventos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar evento por ID:', error);
    return null;
  }

  return data;
}

// ─── Mutations ────────────────────────────────────────────────────────────────

export async function createEvento(formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const descricao_curta = formData.get('descricao_curta') as string;
  const descricao = formData.get('descricao') as string;
  const data_inicio = formData.get('data_inicio') as string;
  const local = formData.get('local') as string;
  const imagem = formData.get('imagem') as string;
  const status = (formData.get('status') as string) || 'ativo';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase.from('eventos').insert({
    titulo,
    slug,
    descricao_curta,
    descricao,
    data_inicio: data_inicio ? new Date(data_inicio).toISOString() : new Date().toISOString(),
    local,
    imagem,
    status,
    destaque_home,
  });

  if (error) {
    console.error('Erro ao criar evento:', error);
    throw new Error('Falha ao criar evento.');
  }

  revalidatePath('/admin/eventos');
  redirect('/admin/eventos');
}

export async function updateEvento(id: string, formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const descricao_curta = formData.get('descricao_curta') as string;
  const descricao = formData.get('descricao') as string;
  const data_inicio = formData.get('data_inicio') as string;
  const local = formData.get('local') as string;
  const imagem = formData.get('imagem') as string;
  const status = (formData.get('status') as string) || 'ativo';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase
    .from('eventos')
    .update({
      titulo,
      slug,
      descricao_curta,
      descricao,
      data_inicio: data_inicio ? new Date(data_inicio).toISOString() : new Date().toISOString(),
      local,
      imagem,
      status,
      destaque_home,
    })
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar evento:', error);
    throw new Error('Falha ao atualizar evento.');
  }

  revalidatePath('/admin/eventos');
  redirect('/admin/eventos');
}

export async function deleteEvento(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase.from('eventos').delete().eq('id', id);

  if (error) {
    console.error('Erro ao excluir evento:', error);
    throw new Error('Falha ao excluir evento.');
  }

  revalidatePath('/admin/eventos');
}
