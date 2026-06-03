import { Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { calendarPageData } from "@/data/calendarPage";

const { monthEvents } = calendarPageData;

/** Card lateral "Eventos do Mês". */
export function MonthEventsCard() {
  return (
    <aside className="rounded-lg border border-brand-green/10 bg-white p-5 shadow-card sm:p-6">
      <h2 className="font-serif text-2xl font-bold text-brand-green-dark">
        Eventos do Mês
      </h2>

      <ul className="mt-4 space-y-3">
        {monthEvents.map((event) => (
          <li key={event.slug}>
            <a
              href={`/eventos/${event.slug}`}
              className="flex gap-3 rounded-md border border-brand-green/10 bg-brand-cream-light p-3 transition-colors hover:border-brand-gold/40"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md bg-brand-green text-white">
                <span className="text-lg font-bold leading-none">{event.dayStr}</span>
                <span className="text-[10px] font-semibold uppercase">{event.monthStr}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-bold leading-snug text-brand-green-dark">
                  {event.title}
                </h3>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs font-medium text-brand-gold-dark">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" aria-hidden />
                    {event.category}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <Button href="/eventos" variant="secondary" size="md" className="mt-5 w-full">
        Ver todos os eventos do mês
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </aside>
  );
}
