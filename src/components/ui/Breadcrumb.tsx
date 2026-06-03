import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

/** Trilha de navegação (breadcrumb). O último item é o ativo (dourado). */
export function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Trilha de navegação" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-brand-green-dark/70">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand-gold-dark"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={last ? "font-semibold text-brand-gold-dark" : undefined}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && (
                <ChevronRight className="h-3.5 w-3.5 text-brand-green/40" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
