import { Cross } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getIcon } from "@/lib/iconMap";
import { EventInfoCard } from "./EventInfoCard";
import type { EventDetail } from "@/data/eventDetails";

/** Layout principal: "Sobre o Evento" + valores (esquerda) e card de informações (direita). */
export function EventAbout({ event }: { event: EventDetail }) {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Coluna principal */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <Cross className="h-7 w-7 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                Sobre o Evento
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-green-dark/75">
                {event.description}
              </p>
            </div>

            {/* Valores / benefícios */}
            <div className="rounded-lg border border-brand-green/10 bg-brand-cream p-6 sm:p-8">
              <ul className="grid grid-cols-2 gap-6 sm:gap-8">
                {event.values.map((value) => {
                  const Icon = getIcon(value.icon);
                  return (
                    <li key={value.title} className="text-center sm:text-left">
                      <Icon
                        className="mx-auto h-9 w-9 text-brand-gold-dark sm:mx-0"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <h3 className="mt-3 font-serif text-xl font-bold text-brand-green-dark">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-green-dark/75">
                        {value.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Card de informações */}
          <div className="lg:col-span-1">
            <EventInfoCard info={event.info} calendar={event.calendar} />
          </div>
        </div>
      </Container>
    </section>
  );
}
