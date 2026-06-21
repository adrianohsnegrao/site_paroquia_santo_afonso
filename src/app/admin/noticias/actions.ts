"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function fetchNoticias() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("noticias").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching noticias:", error);
    return [];
  }

  return data;
}

export async function fetchNoticiaById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("noticias").select("*").eq("id", id).single();

  if (error) {
    console.error("Error fetching noticia by id:", error);
    return null;
  }

  return data;
}

export async function createNoticia(formData: FormData) {
  const supabase = await createClient();

  const titulo = formData.get("title") as string;
  const resumo = formData.get("summary") as string;
  const conteudo = formData.get("content") as string;
  const categoria = formData.get("category") as string;
  const imagem_capa = formData.get("cover_image") as string;
  const status = formData.get("status") as string || "rascunho";
  const destaque = formData.get("is_featured") === "on";
  const destaque_home = formData.get("is_home_featured") === "on";

  // Gerar slug a partir do título
  const slug = titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();

  const { error } = await supabase.from("noticias").insert({
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
    console.error("Error creating noticia:", error);
    throw new Error("Failed to create noticia");
  }

  revalidatePath("/admin/noticias");
}

export async function updateNoticia(id: string, formData: FormData) {
  const supabase = await createClient();

  const titulo = formData.get("title") as string;
  const resumo = formData.get("summary") as string;
  const conteudo = formData.get("content") as string;
  const categoria = formData.get("category") as string;
  const imagem_capa = formData.get("cover_image") as string;
  const status = formData.get("status") as string || "rascunho";
  const destaque = formData.get("is_featured") === "on";
  const destaque_home = formData.get("is_home_featured") === "on";

  // Gerar slug a partir do título
  const slug = titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();

  const { error } = await supabase.from("noticias").update({
    titulo,
    slug,
    resumo,
    conteudo,
    categoria,
    imagem_capa,
    status,
    destaque,
    destaque_home,
    updated_at: new Date().toISOString(),
  }).eq("id", id);

  if (error) {
    console.error("Error updating noticia:", error);
    throw new Error("Failed to update noticia");
  }

  revalidatePath("/admin/noticias");
}

export async function deleteNoticia(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("noticias").delete().eq("id", id);

  if (error) {
    console.error("Error deleting noticia:", error);
    throw new Error("Failed to delete noticia");
  }

  revalidatePath("/admin/noticias");
}
