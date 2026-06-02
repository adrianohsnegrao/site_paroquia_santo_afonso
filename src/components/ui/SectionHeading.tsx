import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

/** Cabeçalho padrão de seção: rótulo (eyebrow) + título + descrição. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em]",
            invert ? "text-brand-gold-light" : "text-brand-gold-dark",
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-4xl font-bold leading-[1.1] sm:text-5xl",
          invert ? "text-white" : "text-brand-green-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            invert ? "text-white/80" : "text-brand-green-deep/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
