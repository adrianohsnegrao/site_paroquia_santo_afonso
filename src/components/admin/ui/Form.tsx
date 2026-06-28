import { cn } from "@/lib/utils";

/** Classe base compartilhada por input, textarea e select. */
export const inputClass =
  "w-full rounded-xl bg-brand-cream-light/60 px-4 py-2.5 text-sm text-brand-green-deep " +
  "ring-1 ring-inset ring-brand-green-deep/[0.12] outline-none transition " +
  "placeholder:text-brand-green-deep/35 focus:bg-white focus:ring-2 focus:ring-brand-green";

/** Campo: rótulo + obrigatório + dica, envolvendo o controle. */
export function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-brand-green-deep/80"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-terracotta">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-brand-green-deep/45">{hint}</p>}
    </div>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputClass, className)} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(inputClass, "resize-none", className)} />;
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={cn(inputClass, "bg-white pr-10", className)}>
      {children}
    </select>
  );
}

/** Checkbox com rótulo, estilizado dentro de uma faixa clicável. */
export function CheckboxField({
  label,
  description,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 ring-1 ring-inset ring-brand-green-deep/[0.10] transition-colors hover:bg-brand-cream-light/60",
        className,
      )}
    >
      <input
        type="checkbox"
        {...props}
        className="mt-0.5 h-4 w-4 rounded border-brand-green-deep/30 text-brand-green focus:ring-brand-green"
      />
      <span>
        <span className="block text-sm font-medium text-brand-green-deep">{label}</span>
        {description && (
          <span className="block text-xs text-brand-green-deep/50">{description}</span>
        )}
      </span>
    </label>
  );
}

/** Contêiner em cartão para formulários. */
export function FormCard({
  children,
  onSubmit,
  className,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  className?: string;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-6 rounded-2xl bg-white p-6 shadow-panel ring-1 ring-brand-green-deep/[0.05] md:p-8",
        className,
      )}
    >
      {children}
    </form>
  );
}

/** Barra de ações no rodapé do formulário. */
export function FormActions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end gap-3 border-t border-brand-green-deep/[0.06] pt-5">
      {children}
    </div>
  );
}

/** Título de seção dentro de um formulário longo. */
export function FieldGroup({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-green-deep/45">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
