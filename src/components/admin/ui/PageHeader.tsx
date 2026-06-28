import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho padrão das páginas do painel: título serifado, descrição, link de
 * voltar opcional e área de ações à direita (botões).
 */
export function PageHeader({
  title,
  description,
  backHref,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  description?: React.ReactNode;
  backHref?: string;
  icon?: LucideIcon;
  /** Ações alinhadas à direita (ex.: botão "Novo"). */
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {backHref && (
          <Link
            href={backHref}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-brand-green-deep/50 ring-1 ring-brand-green-deep/[0.08] transition-colors hover:bg-brand-cream hover:text-brand-green"
            aria-label="Voltar"
          >
            <ArrowLeft size={18} />
          </Link>
        )}
        {Icon && !backHref && (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
            <Icon size={22} />
          </span>
        )}
        <div>
          <h1 className="font-serif text-2xl font-bold leading-tight text-brand-green-deep sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-sm text-brand-green-deep/55">{description}</p>
          )}
        </div>
      </div>
      {children && <div className="flex shrink-0 items-center gap-2">{children}</div>}
    </div>
  );
}
