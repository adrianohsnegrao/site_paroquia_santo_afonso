import { cn } from "@/lib/utils";

export interface Column {
  label: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

/** Classe de linha padrão (aplicar em cada <tr> do corpo). */
export const rowClass =
  "border-t border-brand-green-deep/[0.05] transition-colors hover:bg-brand-cream-light/70";

/**
 * Tabela do painel dentro de um cartão com rolagem horizontal. Recebe a
 * definição das colunas e as linhas (<tr>) como children, mantendo o controle
 * de cada célula com a página.
 */
export function DataTable({
  columns,
  children,
  className,
}: {
  columns: Column[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-panel ring-1 ring-brand-green-deep/[0.05]",
        className,
      )}
    >
      <div className="scrollbar-minimal scrollbar-minimal-dark overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-brand-cream/50">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-6 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-brand-green-deep/50",
                    alignClass[col.align ?? "left"],
                    col.className,
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

/** Célula de corpo com alinhamento opcional. */
export function Td({
  children,
  align = "left",
  className,
  colSpan,
}: {
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  colSpan?: number;
}) {
  return (
    <td className={cn("px-6 py-4 align-middle", alignClass[align], className)} colSpan={colSpan}>
      {children}
    </td>
  );
}
