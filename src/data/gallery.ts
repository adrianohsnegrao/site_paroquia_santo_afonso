/**
 * Galeria da comunidade — faixa de 5 fotos em uma única linha (desktop).
 * Para usar fotos reais, troque MediaPlaceholder por <Image> em Gallery.tsx.
 */
export interface GalleryItem {
  caption: string;
}

export const gallery: GalleryItem[] = [
  { caption: "Missa de domingo" },
  { caption: "Primeira Eucaristia" },
  { caption: "Procissão do padroeiro" },
  { caption: "Grupo de jovens" },
  { caption: "Coral paroquial" },
];
