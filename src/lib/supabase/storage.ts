import { createClient } from './client';

export async function uploadImage(file: File): Promise<string> {
  const supabase = createClient();

  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}-${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from('imagens')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading image:', error);
    throw new Error('Falha ao fazer o upload da imagem.');
  }

  const { data } = supabase.storage
    .from('imagens')
    .getPublicUrl(fileName);

  return data.publicUrl;
}
