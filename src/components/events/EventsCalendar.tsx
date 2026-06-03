import { CalendarDays, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { eventsPageData } from "@/data/eventsPage";

const { calendar } = eventsPageData;

/** Bloco horizontal "Calendário de Eventos" (id="calendario"). */
export function EventsCalendar() {
  return (
    <section id="calendario" className="bg-brand-cream py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-lg border border-brand-green/10 bg-brand-cream-light p-8 text-center shadow-card md:flex-row md:justify-between md:gap-8 md:p-10 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <CalendarDays
              className="h-12 w-12 shrink-0 text-brand-gold-dark"
              strokeWidth={1.25}
              aria-hidden
            />
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-green-dark sm:text-3xl">
                {calendar.title}
              </h2>
              <p className="mt-2 text-brand-green-dark/75">{calendar.description}</p>
            </div>
          </div>
          <Button href={calendar.buttonHref} variant="secondary" size="lg" className="shrink-0">
            {calendar.buttonLabel}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
