import { CalendarDays, Clock, MapPin, Tag, Users, Ticket, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { EventDetail } from "@/data/eventDetails";

/** Card lateral "Informações do Evento". */
export function EventInfoCard({
  info,
  calendar,
}: {
  info: EventDetail["info"];
  calendar: EventDetail["calendar"];
}) {
  const rows = [
    { icon: CalendarDays, label: "Data", value: `${info.date} · ${info.dayOfWeek}` },
    { icon: Clock, label: "Horário", value: info.time },
    { icon: MapPin, label: "Local", value: `${info.location} — ${info.address}` },
    { icon: Tag, label: "Categoria", value: info.category },
    { icon: Users, label: "Evento para", value: info.audience },
    { icon: Ticket, label: "Entrada", value: info.entry },
  ];

  return (
    <aside className="rounded-lg border border-brand-green/10 bg-white p-6 shadow-card lg:sticky lg:top-24">
      <h2 className="font-serif text-2xl font-bold text-brand-green-dark">
        Informações do Evento
      </h2>

      <ul className="mt-4 space-y-3.5">
        {rows.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex gap-3">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                {label}
              </p>
              <p className="text-sm text-brand-green-dark/80">{value}</p>
            </div>
          </li>
        ))}
      </ul>

      <Button
        href={calendar.icsUrl}
        variant="secondary"
        size="md"
        className="mt-6 w-full"
      >
        <CalendarPlus className="h-4 w-4" aria-hidden />
        {calendar.buttonLabel}
      </Button>
      <p className="mt-2 text-center text-xs text-brand-green-dark/60">
        Compatível com Google Agenda, Outlook e Apple Calendar.
      </p>
    </aside>
  );
}
