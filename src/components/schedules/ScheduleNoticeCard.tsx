import { CalendarClock } from "lucide-react";
import { schedulesPageData } from "@/data/schedules";

const { notice } = schedulesPageData;

/** Aviso sobre alterações de horário em feriados (abaixo da imagem). */
export function ScheduleNoticeCard() {
  return (
    <div className="flex gap-4 rounded-md border border-brand-gold/30 bg-brand-cream p-5">
      <CalendarClock
        className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold-dark"
        strokeWidth={1.5}
        aria-hidden
      />
      <div>
        <p className="font-semibold text-brand-green-dark">{notice.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-brand-green-dark/75">
          {notice.description}
        </p>
      </div>
    </div>
  );
}
