/**
 * Dados completos de cada evento (página dinâmica /eventos/[slug]).
 * Estrutura preparada para futura alimentação por painel administrativo (CMS).
 *
 * Os `slug` correspondem aos da listagem em `src/data/eventsPage.ts`.
 * Os ícones (values) são strings resolvidas em `src/lib/iconMap.ts`.
 */

export interface EventValue {
  title: string;
  description: string;
  icon: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
}

export interface EventDetail {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    quoteReference: string;
    image: string;
  };
  info: {
    date: string;
    dayOfWeek: string;
    time: string;
    location: string;
    address: string;
    category: string;
    audience: string;
    entry: string;
  };
  values: EventValue[];
  schedule: {
    title: string;
    image: string;
    items: ScheduleItem[];
  };
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  organization: {
    label: string;
    name: string;
    parish: string;
    image?: string;
    email: string;
    phone: string;
  };
  contact: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  calendar: {
    buttonLabel: string;
    googleCalendarUrl: string;
    icsUrl: string;
  };
}

const PARISH = "Paróquia Santo Afonso Maria de Ligório";
const ADDRESS = "Praça da Matriz, 100 — Centro, São Paulo - SP";
const SCHEDULE_IMAGE = "/images/eventos/detalhes/evento_detalhe_programacao.png";

// Valores reutilizáveis para contato e calendário (iguais em todos os eventos por ora).
const CONTACT = {
  title: "Fale com a Pastoral",
  description: "Entre em contato para mais informações sobre este e outros eventos.",
  buttonLabel: "Entrar em contato",
  buttonHref: "/contato",
};
const CALENDAR = {
  buttonLabel: "Adicionar ao calendário",
  googleCalendarUrl: "#",
  icsUrl: "#",
};

export const eventDetails: EventDetail[] = [
  {
    title: "Terço Mariano",
    slug: "terco-mariano",
    category: "Oração",
    shortDescription: "Momento de oração do Terço em honra a Nossa Senhora.",
    description:
      "O Terço Mariano é um momento especial de oração e contemplação dos mistérios da vida de Jesus e de Nossa Senhora. Juntos, elevamos nossas intenções, agradecimentos e súplicas, confiando à intercessão da Mãe de Deus.",
    hero: {
      eyebrow: "Evento",
      title: "Terço Mariano",
      description: "Momento de oração do Terço em honra a Nossa Senhora.",
      quote: "Rezem o terço todos os dias, para alcançar a paz do mundo e o fim da guerra.",
      quoteReference: "Nossa Senhora de Fátima",
      image: "/images/eventos/detalhes/evento_detalhe_hero_terco_mariano.png",
    },
    info: {
      date: "25 de Maio de 2025",
      dayOfWeek: "Domingo",
      time: "19h00",
      location: "Igreja Matriz",
      address: ADDRESS,
      category: "Oração",
      audience: "Todos os públicos",
      entry: "Livre",
    },
    values: [
      { title: "Oração", description: "Unimos nossas vozes em oração confiante.", icon: "rosary" },
      { title: "Devoção", description: "Fortalecemos nossa devoção a Maria.", icon: "heart" },
      { title: "Comunhão", description: "Vivemos a fé em comunidade.", icon: "users" },
      { title: "Paz", description: "Buscamos a paz para nossas famílias e o mundo.", icon: "dove" },
    ],
    schedule: {
      title: "Programação",
      image: SCHEDULE_IMAGE,
      items: [
        { time: "19h00", title: "Acolhida e abertura" },
        { time: "19h10", title: "Terço Mariano" },
        { time: "19h50", title: "Oração final e intenções" },
        { time: "20h00", title: "Bênção final" },
      ],
    },
    cta: {
      title: "Venha participar deste momento de fé!",
      description:
        "Traga sua família e amigos para rezarmos juntos o Terço Mariano. Nossa Senhora espera por você!",
      buttonLabel: "Quero participar",
      buttonHref: "/contato",
      secondaryLabel: "Convidar amigos",
      secondaryHref: "/eventos/terco-mariano",
    },
    organization: {
      label: "Organização",
      name: "Apostolado da Oração",
      parish: PARISH,
      image: "/images/eventos/detalhes/evento_detalhe_organizacao_pastoral_oracao.png",
      email: "apostolado.oracao@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: CONTACT,
    calendar: CALENDAR,
  },

  {
    title: "Noite de Adoração",
    slug: "noite-de-adoracao",
    category: "Adoração",
    shortDescription: "Adoração ao Santíssimo Sacramento com louvor e oração.",
    description:
      "A Noite de Adoração é um tempo de encontro silencioso e profundo com Jesus presente no Santíssimo Sacramento. Em clima de louvor, oração e contemplação, abrimos o coração à graça e à paz que só Ele pode oferecer.",
    hero: {
      eyebrow: "Evento",
      title: "Noite de Adoração",
      description: "Adoração ao Santíssimo Sacramento com louvor e oração.",
      quote: "Vinde a mim todos vós que estais cansados e sobrecarregados, e eu vos aliviarei.",
      quoteReference: "Mateus 11,28",
      image: "/images/eventos/EventoNoitedeAdoracao.png",
    },
    info: {
      date: "08 de Junho de 2025",
      dayOfWeek: "Domingo",
      time: "19h00",
      location: "Igreja Matriz",
      address: ADDRESS,
      category: "Adoração",
      audience: "Todos os públicos",
      entry: "Livre",
    },
    values: [
      { title: "Adoração", description: "Contemplamos Jesus presente na Eucaristia.", icon: "cross" },
      { title: "Silêncio", description: "Acolhemos Deus no silêncio do coração.", icon: "sparkles" },
      { title: "Presença", description: "Reconhecemos a presença real de Cristo.", icon: "heart" },
      { title: "Graça", description: "Recebemos a paz e a graça que vêm do alto.", icon: "sun" },
    ],
    schedule: {
      title: "Programação",
      image: SCHEDULE_IMAGE,
      items: [
        { time: "19h00", title: "Exposição do Santíssimo" },
        { time: "19h15", title: "Louvor e adoração" },
        { time: "19h45", title: "Momento de silêncio e oração" },
        { time: "20h00", title: "Bênção do Santíssimo" },
      ],
    },
    cta: {
      title: "Venha adorar a Jesus Eucarístico!",
      description:
        "Reserve esta noite para estar diante do Santíssimo e renovar suas forças na presença do Senhor.",
      buttonLabel: "Quero participar",
      buttonHref: "/contato",
      secondaryLabel: "Convidar amigos",
      secondaryHref: "/eventos/noite-de-adoracao",
    },
    organization: {
      label: "Organização",
      name: "Pastoral Litúrgica",
      parish: PARISH,
      email: "pastoral.liturgia@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: CONTACT,
    calendar: CALENDAR,
  },

  {
    title: "Encontro de Famílias",
    slug: "encontro-de-familias",
    category: "Família",
    shortDescription: "Encontro para fortalecer os laços familiares à luz do Evangelho.",
    description:
      "O Encontro de Famílias é um momento de partilha, oração e fraternidade, no qual casais e famílias se reúnem para fortalecer seus vínculos à luz do Evangelho. Um espaço para crescer juntos na fé e no amor.",
    hero: {
      eyebrow: "Evento",
      title: "Encontro de Famílias",
      description: "Encontro para fortalecer os laços familiares à luz do Evangelho.",
      quote: "Eu e a minha casa serviremos ao Senhor.",
      quoteReference: "Josué 24,15",
      image: "/images/eventos/EventoEncontrodeFamilias.png",
    },
    info: {
      date: "15 de Junho de 2025",
      dayOfWeek: "Domingo",
      time: "15h00",
      location: "Salão Paroquial",
      address: ADDRESS,
      category: "Família",
      audience: "Famílias e casais",
      entry: "Livre",
    },
    values: [
      { title: "União", description: "Fortalecemos os laços que unem a família.", icon: "heart-handshake" },
      { title: "Diálogo", description: "Cultivamos a escuta e o diálogo no lar.", icon: "users" },
      { title: "Fé", description: "Colocamos Deus no centro da família.", icon: "cross" },
      { title: "Amor", description: "Renovamos o amor e o cuidado mútuo.", icon: "heart" },
    ],
    schedule: {
      title: "Programação",
      image: SCHEDULE_IMAGE,
      items: [
        { time: "15h00", title: "Acolhida das famílias" },
        { time: "15h20", title: "Dinâmica em família" },
        { time: "16h00", title: "Partilha e reflexão" },
        { time: "17h00", title: "Lanche fraterno" },
      ],
    },
    cta: {
      title: "Traga sua família para este encontro!",
      description:
        "Um momento especial para crescer na fé e fortalecer os vínculos do seu lar. Todos são bem-vindos!",
      buttonLabel: "Quero participar",
      buttonHref: "/contato",
      secondaryLabel: "Convidar amigos",
      secondaryHref: "/eventos/encontro-de-familias",
    },
    organization: {
      label: "Organização",
      name: "Pastoral da Família",
      parish: PARISH,
      email: "pastoral.familia@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: CONTACT,
    calendar: CALENDAR,
  },

  {
    title: "Festa de São Pedro",
    slug: "festa-de-sao-pedro",
    category: "Festa",
    shortDescription: "Celebração em honra a São Pedro, padroeiro da nossa comunidade.",
    description:
      "A Festa de São Pedro é uma das celebrações mais queridas da nossa comunidade. Com missa solene, procissão e confraternização, honramos o apóstolo Pedro e vivemos a alegria de sermos uma só família de fé.",
    hero: {
      eyebrow: "Evento",
      title: "Festa de São Pedro",
      description: "Celebração em honra a São Pedro, padroeiro da nossa comunidade.",
      quote: "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja.",
      quoteReference: "Mateus 16,18",
      image: "/images/eventos/EventoFestadeSaoPedro.png",
    },
    info: {
      date: "29 de Junho de 2025",
      dayOfWeek: "Domingo",
      time: "18h00",
      location: "Igreja Matriz",
      address: ADDRESS,
      category: "Festa",
      audience: "Todos os públicos",
      entry: "Livre",
    },
    values: [
      { title: "Celebração", description: "Celebramos com fé e alegria nosso padroeiro.", icon: "church" },
      { title: "Comunidade", description: "Reunimos toda a comunidade em festa.", icon: "users" },
      { title: "Alegria", description: "Vivemos a alegria de pertencer à Igreja.", icon: "sparkles" },
      { title: "Tradição", description: "Mantemos viva uma bela tradição de fé.", icon: "cross" },
    ],
    schedule: {
      title: "Programação",
      image: SCHEDULE_IMAGE,
      items: [
        { time: "18h00", title: "Santa Missa Solene" },
        { time: "19h00", title: "Procissão pelas ruas da comunidade" },
        { time: "19h45", title: "Quermesse e confraternização" },
        { time: "21h00", title: "Encerramento e bênção final" },
      ],
    },
    cta: {
      title: "Celebre conosco nosso padroeiro!",
      description:
        "Participe da missa, da procissão e da festa. Traga sua família para esta grande celebração de fé!",
      buttonLabel: "Quero participar",
      buttonHref: "/contato",
      secondaryLabel: "Convidar amigos",
      secondaryHref: "/eventos/festa-de-sao-pedro",
    },
    organization: {
      label: "Organização",
      name: "Comissão da Festa do Padroeiro",
      parish: PARISH,
      email: "festa.padroeiro@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: CONTACT,
    calendar: CALENDAR,
  },
];

/** Busca um evento pelo slug (usado na página dinâmica). */
export function getEventBySlug(slug: string): EventDetail | undefined {
  return eventDetails.find((event) => event.slug === slug);
}
