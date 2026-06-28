import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type StatTone = "green" | "gold" | "terracotta" | "deep";

const toneStyles: Record<StatTone, { icon: string; glow: string }> = {
  green: {
    icon: "bg-brand-green/12 text-brand-green ring-brand-green/15",
    glow: "from-brand-green/[0.10]",
  },
  gold: {
    icon: "bg-brand-gold/15 text-brand-gold-dark ring-brand-gold/25",
    glow: "from-brand-gold/[0.12]",
  },
  terracotta: {
    icon: "bg-brand-terracotta/12 text-brand-terracotta ring-brand-terracotta/15",
    glow: "from-brand-terracotta/[0.10]",
  },
  deep: {
    icon: "bg-brand-green-deep/[0.08] text-brand-green-deep ring-brand-green-deep/15",
    glow: "from-brand-green-deep/[0.06]",
  },
};

/**
 * Cartão de métrica do dashboard: rótulo, valor em destaque, ícone tonalizado,
 * glow sutil no canto e dica opcional. Vira link com hover-lift quando `href`.
 */
export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "green",
  href,
}: {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  icon: LucideIcon;
  tone?: StatTone;
  href?: string;
}) {
  const t = toneStyles[tone];
  const inner = (
    <>
      {/* glow tonal no canto superior direito */}
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br to-transparent blur-2xl",
          t.glow,
        )}
      />
      <div className="relative flex items-start justify-between">
        <span className={cn("grid h-12 w-12 place-items-center rounded-xl ring-1 ring-inset", t.icon)}>
          <Icon size={22} />
        </span>
        {href && (
          <span className="grid h-7 w-7 place-items-center rounded-lg text-brand-green-deep/25 transition-all group-hover:bg-brand-cream group-hover:text-brand-green">
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
      <div className="relative mt-5">
        <div className="font-serif text-4xl font-bold leading-none tracking-tight text-brand-green-deep">
          {value}
        </div>
        <div className="mt-2 text-sm font-semibold text-brand-green-deep/75">{label}</div>
        {hint && <div className="mt-0.5 text-xs text-brand-green-deep/45">{hint}</div>}
      </div>
    </>
  );

  const base =
    "group relative overflow-hidden rounded-2xl bg-white p-5 shadow-panel ring-1 ring-brand-green-deep/[0.05]";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, "transition-all duration-300 hover:-translate-y-1 hover:shadow-panel-hover hover:ring-brand-green/20")}
      >
        {inner}
      </Link>
    );
  }
  return <div className={base}>{inner}</div>;
}
