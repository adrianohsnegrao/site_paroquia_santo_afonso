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
        <div className="relative rounded-lg overflow-hidden border border-gray-200 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-auto max-h-64 object-cover"
          />
          {isUploading ? (
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
            </div>
          ) : (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-600 hover:bg-brand-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          <Upload className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Clique para selecionar uma imagem</span>
          <span className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP até 5MB</span>
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
