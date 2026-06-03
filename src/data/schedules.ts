import type { LucideIcon } from "lucide-react";
import { UserRound, Flame, Baby, HeartHandshake } from "lucide-react";
import { massSchedule } from "./massSchedule";

/**
 * Conteúdo da página "Horários".
 * Centralizado aqui para futura alimentação via painel administrativo (CMS).
 *
 * Os horários de missa reutilizam `massSchedule` (mesma fonte da Home),
 * garantindo um único lugar para editar os horários das celebrações.
 */

export interface ParishService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const schedulesPageData = {
  hero: {
    eyebrow: "Horários de Missa",
    title: "Horários de Missa e Atendimento",
    description:
      "Participe das nossas celebrações e momentos de oração ao longo da semana. Todos são bem-vindos!",
    image: "/images/schedules/igreja_interna.png",
    imageAlt: "Interior da igreja da Paróquia Santo Afonso Maria de Ligório",
  },

  massHeading: {
    title: "Horários de Missa",
    subtitle: "Celebrações que nos reúnem para louvar, agradecer e crescer na fé.",
  },
  // Fonte única dos horários (compartilhada com a Home)
  massSchedules: massSchedule,

  servicesHeading: {
    title: "Atendimentos na Secretaria Paroquial",
    subtitle: "Estamos aqui para acolher, orientar e servir você e sua família.",
  },
  services: [
    {
      icon: UserRound,
      title: "Secretaria Paroquial",
      description: "Segunda a Sexta: 8h às 12h | 14h às 18h",
    },
    {
      icon: Flame,
      title: "Direção Espiritual",
      description: "Agendamento na Secretaria",
    },
    {
      icon: Baby,
      title: "Batizados",
      description: "Agendamento na Secretaria",
    },
    {
      icon: HeartHandshake,
      title: "Casamentos",
      description: "Agendamento com 6 meses de antecedência",
    },
  ] satisfies ParishService[],

  notice: {
    title: "Em dias de feriados, os horários podem sofrer alterações.",
    description: "Acompanhe nossas redes sociais para mais informações.",
    image: "/images/schedules/altar.png",
    imageAlt: "Altar da igreja com crucifixo e imagens religiosas",
  },

  cta: {
    title: "Faça da Missa o centro da sua semana.",
    description:
      "Venha celebrar, adorar e se encontrar com Deus e com nossa comunidade.",
    buttonLabel: "Ver todas as celebrações",
    // Página de eventos já existe.
    buttonHref: "/eventos",
  },
} as const;
