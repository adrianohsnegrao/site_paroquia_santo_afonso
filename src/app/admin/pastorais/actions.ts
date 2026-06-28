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

export async function fetchPastorais() {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('pastorais')
    .select('*')
    .order('titulo', { ascending: true });

  if (error) {
    console.error('Erro ao buscar pastorais/movimentos:', error);
    return [];
  }

  return data;
}

export async function fetchPastoralById(id: string) {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('pastorais')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar pastoral/movimento por ID:', error);
    return null;
  }

  return data;
}

// ─── Mutations ────────────────────────────────────────────────────────────────

export async function createPastoral(formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const descricao_curta = formData.get('descricao_curta') as string;
  const descricao = formData.get('descricao') as string;
  const icone = formData.get('icone') as string;
  const imagem = formData.get('imagem') as string;
  const status = (formData.get('status') as string) || 'ativo';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase.from('pastorais').insert({
    titulo,
    slug,
    descricao_curta,
    descricao,
    icone,
    imagem,
    status,
    destaque_home,
  });

  if (error) {
    console.error('Erro ao criar pastoral/movimento:', error);
    throw new Error('Falha ao criar pastoral/movimento.');
  }

  revalidatePath('/admin/pastorais');
  redirect('/admin/pastorais');
}

export async function updatePastoral(id: string, formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const descricao_curta = formData.get('descricao_curta') as string;
  const descricao = formData.get('descricao') as string;
  const icone = formData.get('icone') as string;
  const imagem = formData.get('imagem') as string;
  const status = (formData.get('status') as string) || 'ativo';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase
    .from('pastorais')
    .update({
      titulo,
      slug,
      descricao_curta,
      descricao,
      icone,
      imagem,
      status,
      destaque_home,
    })
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar pastoral/movimento:', error);
    throw new Error('Falha ao atualizar pastoral/movimento.');
  }

  revalidatePath('/admin/pastorais');
  redirect('/admin/pastorais');
}

export async function deletePastoral(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase.from('pastorais').delete().eq('id', id);

  if (error) {
    console.error('Erro ao excluir pastoral/movimento:', error);
    throw new Error('Falha ao excluir pastoral/movimento.');
  }

  revalidatePath('/admin/pastorais');
}
