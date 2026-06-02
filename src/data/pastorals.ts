import type { LucideIcon } from "lucide-react";
import {
  Cross,
  BookOpen,
  HandCoins,
  Users,
  HeartHandshake,
  Flower2,
  HandHeart,
  Music2,
} from "lucide-react";

/**
 * Pastorais e movimentos exibidos na seção "Pastorais e Movimentos".
 * Cada item tem um ícone (lucide-react) e um nome.
 */
export interface Pastoral {
  icon: LucideIcon;
  name: string;
}

export const pastorals: Pastoral[] = [
  { icon: Cross, name: "Liturgia" },
  { icon: BookOpen, name: "Catequese" },
  { icon: HandCoins, name: "Dízimo" },
  { icon: Users, name: "Juventude" },
  { icon: HeartHandshake, name: "Pastoral da Família" },
  { icon: Flower2, name: "Legião de Maria" },
  { icon: HandHeart, name: "Ministros Extraordinários" },
  { icon: Music2, name: "Coral" },
];
