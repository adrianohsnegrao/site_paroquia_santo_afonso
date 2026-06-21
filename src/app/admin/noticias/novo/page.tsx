"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNoticia } from "../actions";
import { Button } from "@/components/ui/Button";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { RichTextEditor } from "@/components/admin/RichTextEditor";

export default function NovaNoticiaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      await createNoticia(formData);
      router.push("/admin/noticias");
    } catch (error) {
      console.error("Erro ao criar notícia", error);
      alert("Erro ao criar notícia. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Nova Notícia</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Resumo</label>
          <textarea
            name="summary"
            id="summary"
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoria</label>
          <input
            type="text"
            name="category"
            id="category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Imagem de Capa</label>
          <ImageUpload value={coverImage} onChange={setCoverImage} />
          <input type="hidden" name="cover_image" value={coverImage} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
          <RichTextEditor content={content} onChange={setContent} />
          <input type="hidden" name="content" value={content} />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_featured"
              id="is_featured"
              className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
            />
            <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
              Destaque
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_home_featured"
              id="is_home_featured"
              className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
            />
            <label htmlFor="is_home_featured" className="ml-2 block text-sm text-gray-900">
              Destaque na Home
            </label>
          </div>
        </div>

        <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select name="status" id="status" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="draft">Rascunho</option>
                <option value="published">Publicado</option>
            </select>
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="button" as="button" variant="outline" onClick={() => router.push("/admin/noticias")}>
            Cancelar
          </Button>
          <Button type="submit" as="button" disabled={isSubmitting}>
            {isSubmitting ? "Salvando..." : "Salvar Notícia"}
          </Button>
        </div>
      </form>
    </div>
  );
}
