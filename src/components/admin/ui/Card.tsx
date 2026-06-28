import { cn } from "@/lib/utils";

/**
 * Superfície base do painel — cartão branco com anel e sombra sutis, cantos
 * generosos. Usado como contêiner de seções, tabelas e formulários.
 */
export function Card({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "article";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl bg-white shadow-panel ring-1 ring-brand-green-deep/[0.05]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({
  title,
  description,
  action,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 border-b border-brand-green-deep/[0.06] px-6 py-5",
        className,
      )}
    >
      <div>
        <h2 className="font-serif text-xl font-bold text-brand-green-deep">{title}</h2>
        {description && (
          <p className="mt-0.5 text-sm text-brand-green-deep/55">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
