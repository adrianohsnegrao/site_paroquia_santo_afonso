"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface ImageUploadProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("Você deve selecionar uma imagem para fazer upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("imagens")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("imagens").getPublicUrl(filePath);

      if (onChange) {
        onChange(data.publicUrl);
      }
    } catch (error: any) {
      console.error("Erro ao fazer upload da imagem:", error);
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border border-dashed border-gray-300 p-4 rounded-md text-center">
      {value ? (
        <div className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Capa" className="max-h-48 mx-auto rounded" />
          <button
            type="button"
            onClick={() => onChange && onChange("")}
            className="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            Remover imagem
          </button>
        </div>
      ) : (
        <div>
          <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <span>{uploading ? "Fazendo upload..." : "Selecionar Imagem"}</span>
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleUpload}
              disabled={uploading}
            />
          </label>
          <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
        </div>
      )}
    </div>
  );
};
