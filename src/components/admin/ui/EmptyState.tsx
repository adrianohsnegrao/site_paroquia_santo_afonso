import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Estado vazio padronizado: ícone em moldura, título, descrição e ação opcional.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-16 text-center",
        className,
      )}
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-cream text-brand-green/50 ring-1 ring-brand-green/10">
        <Icon size={26} strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 font-serif text-lg font-bold text-brand-green-deep">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-brand-green-deep/55">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
