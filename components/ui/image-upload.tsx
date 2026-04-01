"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Trash2, Edit2, ImageIcon } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: File | string | null;
  onChange: (file: File | null) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    if (typeof value !== "string") {
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(value);
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.[0]) {
        onChange(acceptedFiles[0]);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [], "image/webp": [] },
    maxSize: 5242880, // Limite de 5MB
    multiple: false,
    noClick: !!value, 
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={open}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#090612] bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-[rgba(59,130,246,0.02)] border border-gray-700 hover:border-violet-600 rounded-lg text-sm font-medium transition-all text-white w-full sm:w-auto"
        >
          <Upload className="w-5 h-4" />
          Anexar imagem
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-gray-800 hover:border-gray-600 rounded-lg text-sm font-medium text-gray-400 transition-all w-full sm:w-auto">
          <ImageIcon className="w-5 h-4" />
          Utilize nosso banco de imagens
        </button>
      </div>

      <div
        {...getRootProps()}
        className={`
          relative flex flex-col items-center justify-center w-full h-[400px] rounded-[16px] transition-all overflow-hidden
          ${!value ? "border border-dashed border-gray-700 hover:border-violet-500 bg-[#090612] cursor-pointer" : "border border-gray-800 bg-[#090612]"}
          ${isDragActive ? "border-violet-500 bg-violet-500/10 scale-[0.99]" : ""}
        `}
      >     
        <input {...getInputProps()} />

        {!value && (
          <div className="flex flex-col items-center justify-center text-center p-6">
            <div className="w-12 h-12 mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
              <Upload className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-200 mb-1">
              Clique para fazer upload ou arraste a imagem
            </p>
            <p className="text-xs text-gray-500">
              Formatos suportados: PNG, JPG, WEBP (Até 5MB)
            </p>
          </div>
        )}

        {value && preview && (
          <div className="absolute inset-0 w-full h-full flex flex-col">
            <div className="relative flex-1 p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black/20">
                <Image
                  src={preview}
                  alt="Referência"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border-t border-gray-800 bg-[#0F0F14]">
              <div className="flex flex-col overflow-hidden pr-4">
                <span className="text-sm font-medium text-gray-200 truncate">
                  {value instanceof File ? value.name : "imagem_referencia.jpg"}
                </span>
                <span className="text-xs text-gray-500">
                  {value instanceof File
                    ? `${(value.size / (1024 * 1024)).toFixed(1)} MB`
                    : ""}
                </span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={open}
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  title="Trocar imagem"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRemove}
                  className="p-2 rounded-md text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Remover imagem"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}