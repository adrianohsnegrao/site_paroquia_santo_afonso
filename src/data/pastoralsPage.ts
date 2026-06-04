import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Church,
  Cross,
  Users,
  HeartHandshake,
  Sparkles,
  Music2,
  HandHeart,
  CalendarDays,
  Heart,
} from "lucide-react";

/**
 * Conteúdo da página "Pastorais e Movimentos".
 * Centralizado aqui para futura alimentação via painel administrativo (CMS).
 *
 * Obs.: este arquivo é da PÁGINA /pastorais. A grade de ícones da Home usa
 * `src/data/pastorals.ts` (outro arquivo) — não confundir.
 */

export interface PastoralCard {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

export interface ParticipationStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const pastoralsPageData = {
  hero: {
    eyebrow: "Pastorais e Movimentos",
    title: "Pastorais e Movimentos",
    description:
      "Cada pastoral é um caminho de fé, serviço e amor ao próximo. Encontre o seu lugar e faça parte da nossa missão!",
    image: "/images/pastorais/pastorais-hero-banner.png",
    imageAlt: "Comunidade reunida em oração na paróquia",
  },

  gridHeading: {
    title: "Nossas Pastorais e Movimentos",
    subtitle:
      "Conheça as pastorais que tornam nossa comunidade viva e missionária.",
  },

  pastorals: [
    {
      title: "Pastoral da Palavra",
      slug: "pastoral-da-palavra",
      description: "Anuncia e partilha a Palavra de Deus, alimentando nossa fé.",
      image: "/images/pastorais/pastoral-palavra.png",
      imageAlt: "Bíblia aberta iluminada por vela",
      icon: BookOpen,
    },
    {
      title: "Pastoral Litúrgica",
      slug: "pastoral-liturgica",
      description:
        "Cuida das celebrações para que sejam vividas com beleza e devoção.",
      image: "/images/pastorais/pastoral-liturgia.png",
      imageAlt: "Celebração da Eucaristia durante a missa",
      icon: Church,
    },
    {
      title: "Pastoral da Catequese",
      slug: "pastoral-da-catequese",
      description: "Formação cristã para crianças, jovens e adultos.",
      image: "/images/pastorais/pastoral-catequese.png",
      imageAlt: "Crianças participando de encontro de catequese",
      icon: Cross,
    },
    {
      title: "Pastoral da Família",
      slug: "pastoral-da-familia",
      description:
        "Fortalece e acompanha as famílias em sua missão e vocação.",
      image: "/images/pastorais/pastoral-familia.png",
      imageAlt: "Família caminhando unida ao pôr do sol",
      icon: Users,
    },
    {
      title: "Pastoral Social",
      slug: "pastoral-social",
      description: "Promove a caridade e o cuidado com os mais necessitados.",
      image: "/images/pastorais/pastoral-social.png",
      imageAlt: "Mãos entregando alimento em ação solidária",
      icon: HeartHandshake,
    },
    {
      title: "Pastoral da Juventude",
      slug: "pastoral-da-juventude",
      description: "Caminhada de fé, amizade e protagonismo juvenil.",
      image: "/images/pastorais/pastoral-juventude.png",
      imageAlt: "Jovens reunidos em encontro comunitário",
      icon: Sparkles,
    },
    {
      title: "Pastoral da Música",
      slug: "pastoral-da-musica",
      description: "Anima nossas celebrações com música e louvor.",
      image: "/images/pastorais/pastoral-musica.png",
      imageAlt: "Violão sendo tocado em ambiente religioso",
      icon: Music2,
    },
    {
      title: "Apostolado da Oração",
      slug: "apostolado-da-oracao",
      description: "Reza e intercede pelas intenções da Igreja e do mundo.",
      image: "/images/pastorais/pastoral-oracao.png",
      imageAlt: "Mãos segurando terço em oração",
      icon: HandHeart,
    },
  ] satisfies PastoralCard[],

  highlight: {
    title: "Cada serviço é um chamado de Deus.",
    description:
      "As pastorais são sinais do amor de Cristo em ação em nossa comunidade. Juntos, construímos uma Igreja viva, participativa e missionária.",
  },

  participation: {
    eyebrow: "Como participar?",
    title: "Sua presença faz a diferença!",
    description:
      "Servir na Igreja é uma forma concreta de viver o Evangelho e transformar vidas, começando pela sua.",
    image: "/images/pastorais/pastoral-como-participar.png",
    imageAlt: "Mãos unidas representando união e serviço",
    steps: [
      {
        title: "Encontre sua Vocação",
        description:
          "Descubra onde seus talentos e carismas podem servir melhor.",
        icon: Users,
      },
      {
        title: "Participe dos Encontros",
        description:
          "Cada pastoral tem dias e horários de reuniões e formações.",
        icon: CalendarDays,
      },
      {
        title: "Faça Diferença",
        description: "Pequenos gestos de amor transformam o mundo.",
        icon: Heart,
      },
    ] satisfies ParticipationStep[],
    ctaText: "Fale com a Secretaria Paroquial e saiba como participar!",
    buttonLabel: "Entrar em contato",
    // Aponta para a seção de contato da Home; troque por "/contato" quando a página existir.
    buttonHref: "/contato",
  },
} as const;
