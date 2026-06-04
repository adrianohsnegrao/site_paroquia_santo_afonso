/**
 * Conteúdo da página "Eventos" (/eventos).
 * Centralizado aqui para futura alimentação por painel administrativo (CMS).
 *
 * Obs.: a seção de eventos da Home usa `src/data/events.ts` (outro arquivo).
 * Os ícones das categorias são strings resolvidas em `src/lib/iconMap.ts`.
 */

export interface FeaturedEvent {
  title: string;
  slug: string;
  category: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  day: string;
  month: string;
  dateLabel: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
}

export interface EventCategory {
  title: string;
  description: string;
  icon: string;
}

export const eventsPageData = {
  hero: {
    eyebrow: "Eventos",
    title: "Eventos da Nossa Paróquia",
    description:
      "Participe dos nossos eventos e momentos especiais de fé, comunhão e evangelização.",
    buttonLabel: "Ver calendário completo",
    buttonHref: "#calendario",
    image: "/images/eventos/HerobannerdapaginaEventos.png",
    imageAlt: "Celebração com adoração ao Santíssimo na paróquia",
  },

  upcomingHeading: {
    title: "Próximos Eventos",
    subtitle: "Fique por dentro dos eventos que estão por vir na nossa comunidade.",
    viewAllLabel: "Ver todos os eventos",
    viewAllHref: "#calendario",
  },

  featuredEvents: [
    {
      title: "Terço Mariano",
      slug: "terco-mariano",
      category: "Oração",
      description: "Momento de oração do Terço em honra a Nossa Senhora.",
      date: "2025-05-25",
      day: "25",
      month: "Mai",
      dateLabel: "25/05/2025",
      time: "19h00",
      location: "Igreja Matriz",
      image: "/images/eventos/EventoTercoMariano.png",
      imageAlt: "Terço sobre a Bíblia em momento de oração",
    },
    {
      title: "Noite de Adoração",
      slug: "noite-de-adoracao",
      category: "Adoração",
      description: "Adoração ao Santíssimo Sacramento com louvor e oração.",
      date: "2025-06-08",
      day: "08",
      month: "Jun",
      dateLabel: "08/06/2025",
      time: "19h00",
      location: "Igreja Matriz",
      image: "/images/eventos/EventoNoitedeAdoracao.png",
      imageAlt: "Santíssimo Sacramento exposto com velas",
    },
    {
      title: "Encontro de Famílias",
      slug: "encontro-de-familias",
      category: "Família",
      description: "Encontro para fortalecer os laços familiares à luz do Evangelho.",
      date: "2025-06-15",
      day: "15",
      month: "Jun",
      dateLabel: "15/06/2025",
      time: "15h00",
      location: "Salão Paroquial",
      image: "/images/eventos/EventoEncontrodeFamilias.png",
      imageAlt: "Família reunida em momento de fé",
    },
    {
      title: "Festa de São Pedro",
      slug: "festa-de-sao-pedro",
      category: "Festa",
      description: "Celebração em honra a São Pedro, padroeiro da nossa comunidade.",
      date: "2025-06-29",
      day: "29",
      month: "Jun",
      dateLabel: "29/06/2025",
      time: "18h00",
      location: "Igreja Matriz",
      image: "/images/eventos/EventoFestadeSaoPedro.png",
      imageAlt: "Imagem de São Pedro em ambiente religioso",
    },
  ] satisfies FeaturedEvent[],

  calendar: {
    title: "Calendário de Eventos",
    description:
      "Acompanhe nossa agenda completa e não perca nenhum momento especial da nossa paróquia.",
    buttonLabel: "Acessar calendário completo",
    buttonHref: "/eventos/calendario",
  },

  categoriesHeading: {
    eyebrow: "Categorias de Eventos",
    title: "Encontre o evento que é para você!",
  },
  categories: [
    { title: "Celebrações", description: "Missas, festas e celebrações especiais.", icon: "cross" },
    { title: "Oração", description: "Terços, adorações e momentos de oração.", icon: "hands-praying" },
    { title: "Formação", description: "Palestras, cursos e formações.", icon: "users" },
    { title: "Família", description: "Encontros e eventos para as famílias.", icon: "heart" },
    { title: "Cultura e Lazer", description: "Shows, apresentações e eventos culturais.", icon: "music" },
    { title: "Ação Social", description: "Campanhas, encontros e ações solidárias.", icon: "hand-heart" },
  ] satisfies EventCategory[],

  cta: {
    title: "Participe da vida da nossa comunidade!",
    description:
      "Os eventos são oportunidades de crescer na fé, fazer novos amigos e servir com alegria.",
    buttonLabel: "Quero participar",
    // Aponta para a seção de contato da Home; troque por "/contato" quando a página existir.
    buttonHref: "/contato",
    image: "/images/eventos/CTAParticipedacomunidade.png",
    imageAlt: "Comunidade reunida em confraternização em frente à paróquia",
  },
} as const;
