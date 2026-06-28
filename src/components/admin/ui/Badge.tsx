import { cn } from "@/lib/utils";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "gold"
  | "success"
  | "warning"
  | "info"
  | "danger";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-brand-green-deep/[0.06] text-brand-green-deep/70 ring-brand-green-deep/10",
  brand: "bg-brand-green/10 text-brand-green-dark ring-brand-green/20",
  gold: "bg-brand-gold/15 text-brand-gold-dark ring-brand-gold/30",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
  info: "bg-sky-50 text-sky-700 ring-sky-600/20",
  danger: "bg-red-50 text-red-700 ring-red-600/20",
};

/**
 * Selo de status compacto com variações de tom semânticas e de marca.
 */
export function Badge({
  tone = "neutral",
  children,
  className,
  dot = false,
}: {
  tone?: BadgeTone;
  children: React.ReactNode;
  className?: string;
  /** Exibe um ponto colorido antes do texto. */
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />}
      {children}
    </span>
  );
}
