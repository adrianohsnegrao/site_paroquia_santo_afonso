import type { LucideIcon } from "lucide-react";
import { Sun, CalendarDays, Sparkles, HandHeart } from "lucide-react";

/**
 * Horários de Missa exibidos na seção "Horários de Missa".
 * Edite títulos, dias e horários livremente. O ícone vem do pacote lucide-react.
 */
export interface MassScheduleItem {
  icon: LucideIcon;
  title: string;
  lines: string[];
}

export const massSchedule: MassScheduleItem[] = [
  {
    icon: Sun,
    title: "Missa Dominical",
    lines: ["Sábado: 19h00", "Domingo: 7h00 · 9h00 · 19h00"],
  },
  {
    icon: CalendarDays,
    title: "Missa Durante a Semana",
    lines: ["Terça a Sexta: 19h00"],
  },
  {
    icon: Sparkles,
    title: "Missa e Adoração",
    lines: ["Quintas-feiras: 19h00", "com Adoração ao Santíssimo"],
  },
  {
    icon: HandHeart,
    title: "Confissões",
    lines: ["Sábados: 17h00 às 18h30", "ou com horário agendado"],
  },
];
