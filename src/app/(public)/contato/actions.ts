'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitContact(formData: FormData) {
  const supabase = await createClient();
  
  const nome = formData.get('nome')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const telefone = formData.get('telefone')?.toString().trim();
  const assunto = formData.get('assunto')?.toString().trim();
  const mensagem = formData.get('mensagem')?.toString().trim();
  
  // Validação no servidor
  if (!nome || !email || !assunto || !mensagem) {
    return { error: 'Por favor, preencha todos os campos obrigatórios.' };
  }

  // Regex super simples para email
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { error: 'E-mail em formato inválido.' };
  }

  const { error } = await supabase.from('mensagens_contato').insert({
    nome,
    email,
    telefone: telefone || null,
    tipo_solicitacao: 'Contato via Site', // Pode ser expandido no futuro
    assunto,
    mensagem,
    status: 'nova'
  });

  if (error) {
    console.error('Erro ao salvar mensagem de contato:', error);
    return { error: 'Ocorreu um erro inesperado ao enviar sua mensagem. Tente novamente mais tarde.' };
  }

  revalidatePath('/admin/mensagens');

  return { success: true };
}
