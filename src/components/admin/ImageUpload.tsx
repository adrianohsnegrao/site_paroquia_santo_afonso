'use client';

import React, { useState, useCallback, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { uploadImage } from '@/lib/supabase/storage';

interface ImageUploadProps {
  onChange: (url: string) => void;
  value?: string;
  className?: string;
}

export function ImageUpload({ onChange, value, className = '' }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setIsUploading(true);

    try {
      const publicUrl = await uploadImage(file);
      onChange(publicUrl);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Falha ao enviar a imagem. Tente novamente.');
      // Revert preview on failure if it wasn't there before
      if (!value) {
        setPreviewUrl(null);
      } else {
        setPreviewUrl(value);
      }
    } finally {
      setIsUploading(false);
      // Clean up the object URL to avoid memory leaks
      URL.revokeObjectURL(objectUrl);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset input
      }
    }
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {previewUrl ? (
        <div className="group relative overflow-hidden rounded-xl ring-1 ring-brand-green-deep/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt="Preview"
            className="h-auto max-h-64 w-full object-cover"
          />
          {isUploading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm">
              <Loader2 className="h-8 w-8 animate-spin text-brand-green" />
            </div>
          ) : (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white opacity-0 shadow-sm transition-opacity hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 group-hover:opacity-100"
              aria-label="Remover imagem"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand-green-deep/15 bg-brand-cream-light/50 text-brand-green-deep/50 transition-colors hover:border-brand-green/50 hover:bg-brand-cream hover:text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Upload className="mb-2 h-7 w-7" />
          <span className="text-sm font-medium">Clique para selecionar uma imagem</span>
          <span className="mt-1 text-xs text-brand-green-deep/40">PNG, JPG, WEBP até 5MB</span>
        </button>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
        aria-label="Upload image"
      />
    </div>
  );
}
