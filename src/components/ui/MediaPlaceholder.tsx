import type { LucideIcon } from "lucide-react";
import { Church } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label?: string;
  className?: string;
  icon?: LucideIcon;
}

/**
 * Moldura neutra e discreta para imagens temporárias (notícias, galeria, mapa).
 * Visual sóbrio em creme + ícone fino — sem gradientes berrantes.
 *
 * Para usar fotos reais, troque este componente por <Image> do next/image
 * apontando para arquivos em /public/images.
 */
export function MediaPlaceholder({
  label,
  className,
  icon: Icon = Church,
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label ? `Imagem: ${label}` : "Imagem ilustrativa"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-brand-cream",
        className,
      )}
    >
      <div
        className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_35%,rgba(47,107,79,0.10),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-brand-green/10"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-1.5 px-3 text-center">
        <Icon className="h-8 w-8 text-brand-green/30" strokeWidth={1.5} aria-hidden />
        {label && (
          <span className="text-xs font-medium text-brand-green/45">{label}</span>
        )}
      </div>
    </div>
  );
}
