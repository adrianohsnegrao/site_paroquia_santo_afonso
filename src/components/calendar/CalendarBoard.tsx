import { Container } from "@/components/ui/Container";
import { MonthCalendar } from "./MonthCalendar";
import { MonthEventsCard } from "./MonthEventsCard";

/** Bloco principal: calendário mensal (esquerda) + eventos do mês (direita). */
export function CalendarBoard() {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <MonthCalendar />
          <MonthEventsCard />
        </div>
      </Container>
    </section>
  );
}
