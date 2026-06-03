import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Users,
  Heart,
  Sun,
  CalendarDays,
  MapPin,
  Mail,
  Phone,
  HandHeart,
  Church,
  Cross,
  Music2,
  HeartHandshake,
  Sparkles,
  Flame,
  Baby,
  Megaphone,
  Eye,
  Compass,
  Gift,
  Bird,
  Hand,
  Clock,
} from "lucide-react";

/**
 * Mapeia nomes de ícones (strings vindas dos dados/CMS) para componentes lucide-react.
 * Permite que o conteúdo seja totalmente serializável (pronto para um painel admin).
 */
export const iconMap: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  users: Users,
  heart: Heart,
  sun: Sun,
  calendar: CalendarDays,
  "map-pin": MapPin,
  mail: Mail,
  phone: Phone,
  "hand-heart": HandHeart,
  church: Church,
  cross: Cross,
  music: Music2,
  "heart-handshake": HeartHandshake,
  sparkles: Sparkles,
  flame: Flame,
  baby: Baby,
  megaphone: Megaphone,
  eye: Eye,
  compass: Compass,
  gift: Gift,
  bird: Bird,
  hand: Hand,
  "hands-praying": Hand,
  clock: Clock,
  rosary: HandHeart,
  dove: Bird,
};

/** Retorna o ícone correspondente ao nome; usa Church como fallback seguro. */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Church;
}
