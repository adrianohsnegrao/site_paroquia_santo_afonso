import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarPageData, type EventColor } from "@/data/calendarPage";
import { cn } from "@/lib/utils";

const { calendar, monthEvents } = calendarPageData;

// Classes fixas por cor (Tailwind precisa de classes estáticas).
const dotClass: Record<EventColor, string> = {
  green: "bg-brand-green",
  emerald: "bg-brand-green-light",
  gold: "bg-brand-gold",
  terracotta: "bg-brand-terracotta",
};

/** Calendário mensal (mockado em Junho/2025) com destaque nos dias com evento. */
export function MonthCalendar() {
  const eventsByDay = new Map<number, EventColor>();
  monthEvents.forEach((event) => eventsByDay.set(event.day, event.color));

  // Monta as células: vazias iniciais + dias do mês + dias do próximo mês (cinza).
  const cells: Array<
    | { type: "blank"; key: string }
    | { type: "day"; day: number }
    | { type: "next"; day: number; key: string }
  > = [];
  for (let i = 0; i < calendar.firstWeekday; i++) {
    cells.push({ type: "blank", key: `b${i}` });
  }
  for (let d = 1; d <= calendar.daysInMonth; d++) {
    cells.push({ type: "day", day: d });
  }
  const trailing = (7 - (cells.length % 7)) % 7;
  for (let i = 1; i <= trailing; i++) {
    cells.push({ type: "next", day: i, key: `n${i}` });
  }

  return (
    <div className="rounded-lg border border-brand-green/10 bg-white p-5 shadow-card sm:p-6">
      {/* Cabeçalho com controles */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label={`Mês anterior — ${calendar.prevLabel}`}
          className="flex h-9 w-9 items-center justify-center rounded-md text-brand-green-dark transition-colors hover:bg-brand-green/10"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <h2 className="font-serif text-2xl font-bold text-brand-green-dark">
          {calendar.title}
        </h2>
        <button
          type="button"
          aria-label={`Próximo mês — ${calendar.nextLabel}`}
          className="flex h-9 w-9 items-center justify-center rounded-md text-brand-green-dark transition-colors hover:bg-brand-green/10"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Dias da semana */}
      <div className="mt-5 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-wide text-brand-gold-dark">
        {calendar.weekDays.map((wd) => (
          <span key={wd}>{wd}</span>
        ))}
      </div>

      {/* Grade de dias */}
      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((cell) => {
          if (cell.type === "blank") {
            return <div key={cell.key} aria-hidden />;
          }
          if (cell.type === "next") {
            return (
              <div
                key={cell.key}
                className="flex aspect-square items-center justify-center rounded-md text-sm text-brand-green-dark/25"
              >
                {cell.day}
              </div>
            );
          }
          const color = eventsByDay.get(cell.day);
          return (
            <div
              key={`d${cell.day}`}
              className={cn(
                "flex aspect-square flex-col items-center justify-center rounded-md text-sm",
                color
                  ? "bg-brand-cream font-bold text-brand-green-dark ring-1 ring-brand-gold/40"
                  : "text-brand-green-dark/80",
              )}
            >
              <span>{cell.day}</span>
              {color && (
                <span className={cn("mt-0.5 h-1.5 w-1.5 rounded-full", dotClass[color])} aria-hidden />
              )}
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-green/10 pt-4 text-xs text-brand-green-dark/75">
        {calendar.legend.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span className={cn("h-2.5 w-2.5 rounded-full", dotClass[item.color])} aria-hidden />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
