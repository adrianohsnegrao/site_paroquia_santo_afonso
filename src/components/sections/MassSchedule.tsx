import { ArrowRight, Cross } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { massSchedule } from "@/data/massSchedule";

/** Seção "Horários de Missa": título solto + cards individuais (sem container geral). */
export function MassSchedule() {
  return (
    <section id="horarios" className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        {/* Cabeçalho centralizado com traços laterais */}
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <Cross className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
            Horários de Missa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-green-dark/70">
            Participe das nossas celebrações eucarísticas e momentos de oração ao
            longo da semana.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {massSchedule.map(({ icon: Icon, title, lines }) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-lg border border-brand-green/10 bg-white p-5 text-center shadow-card"
            >
              <Icon className="h-9 w-9 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-3 font-serif text-xl font-bold text-brand-green-dark">
                {title}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-brand-green-dark/70">
                {lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
          >
            Ver todos os horários
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
