"use client";

import { useState, type FormEvent } from "react";
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactPageData, type ContactRequest } from "@/data/contact";
import { cn } from "@/lib/utils";

const { form } = contactPageData;

const emptyForm: ContactRequest = {
  name: "",
  email: "",
  phone: "",
  requestType: "",
  subject: "",
  message: "",
};

const fieldClass =
  "w-full rounded-md border border-brand-green/20 bg-white px-3.5 py-2.5 text-sm text-brand-green-dark shadow-sm outline-none transition-colors placeholder:text-brand-green-dark/40 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-brand-green-dark";

function RequiredMark() {
  return <span className="text-brand-terracotta-dark" aria-hidden> *</span>;
}

/** Formulário de contato (envio simulado client-side, pronto para API/admin). */
export function ContactForm() {
  const [data, setData] = useState<ContactRequest>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactRequest, boolean>>>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof ContactRequest) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData((prev) => ({ ...prev, [key]: event.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const required: (keyof ContactRequest)[] = ["name", "email", "requestType", "subject", "message"];
    const nextErrors: Partial<Record<keyof ContactRequest, boolean>> = {};
    required.forEach((key) => {
      if (!String(data[key] ?? "").trim()) nextErrors[key] = true;
    });
    if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      nextErrors.email = true;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO (backend/admin): enviar `data` (ContactRequest) para a API.
    // await fetch("/api/contato", { method: "POST", body: JSON.stringify(data) });

    setSent(true);
    setData(emptyForm);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-brand-green/15 bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="h-10 w-10 text-brand-green" aria-hidden />
        <p className="font-serif text-xl font-bold text-brand-green-dark">
          {form.successMessage}
        </p>
        <Button as="button" variant="outline" size="md" onClick={() => setSent(false)}>
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {form.fields.name}
            <RequiredMark />
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={update("name")}
            aria-required="true"
            aria-invalid={errors.name || undefined}
            className={cn(fieldClass, errors.name && "border-brand-terracotta")}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {form.fields.email}
            <RequiredMark />
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={update("email")}
            aria-required="true"
            aria-invalid={errors.email || undefined}
            className={cn(fieldClass, errors.email && "border-brand-terracotta")}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            {form.fields.phone}
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={update("phone")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="requestType" className={labelClass}>
            {form.fields.type}
            <RequiredMark />
          </label>
          <select
            id="requestType"
            value={data.requestType}
            onChange={update("requestType")}
            aria-required="true"
            aria-invalid={errors.requestType || undefined}
            className={cn(fieldClass, errors.requestType && "border-brand-terracotta")}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {form.requestTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          {form.fields.subject}
          <RequiredMark />
        </label>
        <input
          id="subject"
          type="text"
          value={data.subject}
          onChange={update("subject")}
          aria-required="true"
          aria-invalid={errors.subject || undefined}
          className={cn(fieldClass, errors.subject && "border-brand-terracotta")}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {form.fields.message}
          <RequiredMark />
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={update("message")}
          aria-required="true"
          aria-invalid={errors.message || undefined}
          className={cn(fieldClass, "resize-y", errors.message && "border-brand-terracotta")}
        />
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-brand-terracotta-dark">
          Por favor, preencha os campos obrigatórios corretamente.
        </p>
      )}

      <Button as="button" type="submit" variant="secondary" size="lg">
        <Send className="h-4 w-4" aria-hidden />
        {form.submitLabel}
      </Button>

      <p className="flex items-start gap-2 text-xs text-brand-green-dark/60">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" aria-hidden />
        {form.privacyText}
      </p>
    </form>
  );
}
