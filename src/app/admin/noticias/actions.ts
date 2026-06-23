'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Garante que o usuário está autenticado; caso contrário lança um erro. */
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

/** Gera um slug URL-safe a partir de um título em português. */
function gerarSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s-]/g, '')   // remove caracteres especiais
    .replace(/\s+/g, '-')           // espaços → hífens
    .replace(/-+/g, '-')            // hífens duplicados → um
    .replace(/^-+|-+$/g, '');       // remove hífens no início/fim
}

// ─── Queries ──────────────────────────────────────────────────────────────────

export async function fetchNoticias() {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }

  return data;
}

export async function fetchNoticiaById(id: string) {
  const supabase = await requireAuth();

  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar notícia por ID:', error);
    return null;
  }

  return data;
}

// ─── Mutations ────────────────────────────────────────────────────────────────

export async function createNoticia(formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const resumo = formData.get('resumo') as string;
  const conteudo = formData.get('conteudo') as string;
  const categoria = formData.get('categoria') as string;
  const imagem_capa = formData.get('imagem_capa') as string;
  const status = (formData.get('status') as string) || 'rascunho';
  const destaque = formData.get('destaque') === 'on';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase.from('noticias').insert({
    titulo,
    slug,
    resumo,
    conteudo,
    categoria,
    imagem_capa,
    status,
    destaque,
    destaque_home,
  });

  if (error) {
    console.error('Erro ao criar notícia:', error);
    throw new Error('Falha ao criar notícia.');
  }

  revalidatePath('/admin/noticias');
  redirect('/admin/noticias');
}

export async function updateNoticia(id: string, formData: FormData) {
  const supabase = await requireAuth();

  const titulo = formData.get('titulo') as string;
  const resumo = formData.get('resumo') as string;
  const conteudo = formData.get('conteudo') as string;
  const categoria = formData.get('categoria') as string;
  const imagem_capa = formData.get('imagem_capa') as string;
  const status = (formData.get('status') as string) || 'rascunho';
  const destaque = formData.get('destaque') === 'on';
  const destaque_home = formData.get('destaque_home') === 'on';

  const slug = gerarSlug(titulo);

  const { error } = await supabase
    .from('noticias')
    .update({
      titulo,
      slug,
      resumo,
      conteudo,
      categoria,
      imagem_capa,
      status,
      destaque,
      destaque_home,
    })
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar notícia:', error);
    throw new Error('Falha ao atualizar notícia.');
  }

  revalidatePath('/admin/noticias');
  redirect('/admin/noticias');
}

export async function deleteNoticia(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase.from('noticias').delete().eq('id', id);

  if (error) {
    console.error('Erro ao excluir notícia:', error);
    throw new Error('Falha ao excluir notícia.');
  }

  revalidatePath('/admin/noticias');
}
