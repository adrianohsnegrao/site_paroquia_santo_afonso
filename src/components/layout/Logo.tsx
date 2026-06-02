import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Tamanho do brasão em pixels. */
  size?: number;
  /** Cor do texto do nome (claro para fundos escuros). */
  invert?: boolean;
  /** Oculta o texto, mostrando apenas o brasão. */
  hideText?: boolean;
  className?: string;
}

/** Brasão + nome da paróquia, usado no header e no footer. */
export function Logo({
  size = 48,
  invert = false,
  hideText = false,
  className,
}: LogoProps) {
  return (
    <a
      href="/#inicio"
      className={cn("flex items-center gap-3", className)}
      aria-label={`Ir para o início — ${site.fullName}`}
    >
      <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={size}
          height={size}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {!hideText && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-serif text-base font-bold uppercase tracking-wide sm:text-lg",
              invert ? "text-white" : "text-brand-green-dark",
            )}
          >
            {site.name}
          </span>
          <span
            className={cn(
              "text-[11px] font-medium uppercase tracking-[0.2em]",
              invert ? "text-brand-gold-light" : "text-brand-gold-dark",
            )}
          >
            {site.tagline}
          </span>
        </span>
      )}
    </a>
  );
}
