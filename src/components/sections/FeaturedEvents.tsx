import { MapPin, Clock, ArrowRight, CalendarDays } from "lucide-react";
import { eventsPageData } from "@/data/eventsPage";

const { featuredEvents } = eventsPageData;

/**
 * Seção "Eventos em Destaque" da Home (lista vertical).
 * Usa a mesma fonte da listagem/detalhe; cada card abre a página do evento.
 */
export function FeaturedEvents() {
  return (
    <section id="eventos" className="flex h-full flex-col">
      <div className="mb-6 flex items-center gap-2.5">
        <CalendarDays className="h-7 w-7 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
        <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
          Eventos em Destaque
        </h2>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {featuredEvents.map((event) => (
          <li key={event.slug} className="flex-1">
            <a
              href={`/eventos/${event.slug}`}
              className="group flex h-full items-center gap-4 rounded-lg border border-brand-green/10 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-soft"
            >
              {/* Badge da data */}
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-brand-green text-white">
                <span className="text-2xl font-bold leading-none">{event.day}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {event.month}
                </span>
              </div>

              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-terracotta-dark">
                  {event.category}
                </span>
                <h3 className="font-serif text-xl font-bold leading-snug text-brand-green-dark">
                  {event.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-brand-gold-dark">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {event.location}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/eventos"
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
      >
        Ver todos os eventos
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}
