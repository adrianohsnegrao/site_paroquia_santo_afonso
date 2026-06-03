import { UserRound, Mail, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { PastoralDetail } from "@/data/pastoralDetails";

/** Bloco final: coordenação (à esquerda) + chamada para contato (à direita). */
export function PastoralCoordinator({
  coordinator,
  contact,
}: {
  coordinator: PastoralDetail["coordinator"];
  contact: PastoralDetail["contact"];
}) {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Coordenação */}
          <div className="flex flex-col items-center gap-5 rounded-lg border border-brand-green/10 bg-white p-8 text-center shadow-card sm:flex-row sm:items-center sm:text-left">
            {/* Avatar placeholder discreto (sem foto real) */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md bg-brand-cream ring-1 ring-brand-green/10">
              <UserRound className="h-10 w-10 text-brand-green/40" strokeWidth={1.5} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                {coordinator.label}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-brand-green-dark">
                {coordinator.name}
              </h3>
              <p className="text-sm text-brand-green-dark/70">{coordinator.role}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-green-dark/75">
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                  <a href={`mailto:${coordinator.email}`} className="break-all hover:text-brand-gold-dark">
                    {coordinator.email}
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <Phone className="h-4 w-4 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                  <a href={`tel:${coordinator.phone}`} className="hover:text-brand-gold-dark">
                    {coordinator.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-brand-green-dark p-8 text-center shadow-card sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">{contact.title}</h3>
            <p className="mt-2 text-white/80">{contact.description}</p>
            <div className="mt-5">
              <Button href={contact.buttonHref} variant="primary" size="lg">
                {contact.buttonLabel}
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
