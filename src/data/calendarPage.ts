/**
 * Conteúdo da página "Calendário de Eventos" (/eventos/calendario).
 * Centralizado aqui para futura alimentação por painel administrativo (CMS).
 *
 * `monthEvents` é a fonte dos eventos do mês exibido (calendário + lista).
 * Os destaques ("Próximos destaques") são derivados de monthEvents com `featured`.
 * As imagens reutilizam as da página /eventos enquanto não houver imagens próprias.
 */

export type EventColor = "green" | "emerald" | "gold" | "terracotta";

export interface CalendarEvent {
  day: number;
  dayStr: string;
  monthStr: string;
  title: string;
  slug: string;
  category: string; // rótulo exibido
  filterCategory: string; // uma das categorias do filtro
  color: EventColor;
  time: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean; // aparece em "Próximos destaques"
}

export interface CalendarCategory {
  title: string;
  description: string;
  icon: string;
}

export const calendarPageData = {
  hero: {
    eyebrow: "Calendário",
    title: "Calendário de Eventos",
    description:
      "Acompanhe nossa agenda paroquial e encontre celebrações, encontros e momentos especiais ao longo do mês.",
    buttonLabel: "Ver próximos eventos",
    buttonHref: "#proximos-destaques",
    image: "/images/calendario/HerobannerCalendario.png",
    imageAlt: "Celebração com adoração ao Santíssimo na paróquia",
    currentMonthLabel: "Junho 2025",
    locationLabel: "Paróquia Santo Afonso",
  },

  calendar: {
    title: "Junho 2025",
    prevLabel: "Maio 2025",
    nextLabel: "Julho 2025",
    weekDays: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    firstWeekday: 0, // Junho/2025 começa no domingo
    daysInMonth: 30,
    legend: [
      { label: "Celebrações", color: "green" as EventColor },
      { label: "Encontros", color: "emerald" as EventColor },
      { label: "Adoração", color: "gold" as EventColor },
      { label: "Festas", color: "terracotta" as EventColor },
    ],
  },

  monthEvents: [
    {
      day: 8,
      dayStr: "08",
      monthStr: "Jun",
      title: "Noite de Adoração",
      slug: "noite-de-adoracao",
      category: "Adoração",
      filterCategory: "Oração",
      color: "gold",
      time: "19h00",
      location: "Igreja Matriz",
      description: "Adoração ao Santíssimo Sacramento com louvor e oração.",
      image: "/images/calendario/EventoNoitedeAdoracao.png",
      imageAlt: "Santíssimo Sacramento exposto com velas",
      featured: true,
    },
    {
      day: 15,
      dayStr: "15",
      monthStr: "Jun",
      title: "Encontro de Famílias",
      slug: "encontro-de-familias",
      category: "Família",
      filterCategory: "Família",
      color: "emerald",
      time: "15h00",
      location: "Salão Paroquial",
      description: "Encontro para fortalecer os laços familiares à luz do Evangelho.",
      image: "/images/calendario/EventoEncontrodeFamilias.png",
      imageAlt: "Família reunida em momento de fé",
      featured: true,
    },
    {
      day: 19,
      dayStr: "19",
      monthStr: "Jun",
      title: "Corpus Christi",
      slug: "corpus-christi",
      category: "Celebrações",
      filterCategory: "Celebrações",
      color: "green",
      time: "9h00",
      location: "Igreja Matriz",
      description: "Celebração solene de Corpus Christi com procissão.",
      image: "/images/calendario/EventoNoitedeAdoracao.png",
      imageAlt: "Celebração solene de Corpus Christi",
      featured: false,
    },
    {
      day: 29,
      dayStr: "29",
      monthStr: "Jun",
      title: "Festa de São Pedro",
      slug: "festa-de-sao-pedro",
      category: "Festa",
      filterCategory: "Celebrações",
      color: "terracotta",
      time: "18h00",
      location: "Igreja Matriz",
      description: "Celebração em honra a São Pedro, padroeiro da comunidade.",
      image: "/images/calendario/EventoFestadeSaoPedro.png",
      imageAlt: "Imagem de São Pedro em ambiente religioso",
      featured: true,
    },
  ] satisfies CalendarEvent[],

  categories: [
    { title: "Celebrações", description: "Missas, festas e celebrações especiais.", icon: "cross" },
    { title: "Oração", description: "Terços, adorações e momentos de oração.", icon: "hands-praying" },
    { title: "Formação", description: "Palestras, cursos e formações.", icon: "users" },
    { title: "Família", description: "Encontros e eventos para as famílias.", icon: "heart" },
    { title: "Cultura e Lazer", description: "Shows, apresentações e eventos culturais.", icon: "music" },
    { title: "Ação Social", description: "Campanhas, encontros e ações solidárias.", icon: "hand-heart" },
  ] satisfies CalendarCategory[],

  cta: {
    title: "Não perca nenhum momento especial da nossa comunidade!",
    description:
      "Acompanhe o calendário completo e participe das celebrações e encontros da paróquia.",
    buttonLabel: "Quero participar",
    // Aponta para a seção de contato da Home; troque por "/contato" quando a página existir.
    buttonHref: "/contato",
    image: "/images/calendario/CTAIgreja.png",
    imageAlt: "Fachada da Paróquia Santo Afonso Maria de Ligório iluminada à noite",
  },
} as const;

/** Eventos em destaque (derivados dos eventos do mês marcados como `featured`). */
export const calendarHighlights = calendarPageData.monthEvents.filter(
  (event) => event.featured,
);
