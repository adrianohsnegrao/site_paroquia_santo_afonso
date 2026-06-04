/**
 * Conteúdo da página "Notícias e Comunicados" (/noticias).
 * Centralizado aqui para futura alimentação por painel administrativo (CMS).
 *
 * Obs.: a seção de notícias da Home usa `src/data/news.ts` (outro arquivo).
 * `filterCategory` mapeia cada notícia para uma das categorias do filtro.
 * As imagens são placeholders (SVG) enquanto não houver imagens reais.
 */

export interface NewsArticle {
  title: string;
  slug: string;
  category: string;
  filterCategory: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export interface NoticeItem {
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  icon: string;
}

export const newsPageData = {
  hero: {
    eyebrow: "Notícias",
    title: "Notícias e Comunicados",
    description:
      "Acompanhe as novidades, avisos e comunicados da nossa comunidade paroquial.",
    buttonLabel: "Ver últimas notícias",
    buttonHref: "#ultimas-noticias",
    image: "/images/noticias/01-hero-noticias.png",
    imageAlt: "Registro fotográfico de atividades da comunidade paroquial",
  },

  featured: {
    title:
      "Solenidade de Santo Afonso Maria de Ligório reúne comunidade em fé e gratidão",
    slug: "solenidade-santo-afonso-comunidade-fe-gratidao",
    category: "Liturgia",
    date: "2025-05-15",
    formattedDate: "15 Mai 2025",
    badge: "Destaque",
    excerpt:
      "Com grande alegria, nossa paróquia celebrou o dia de seu padroeiro com missa solene, procissão, momentos de oração e confraternização. Veja os melhores momentos desta bela celebração.",
    image: "/images/noticias/02-solenidade-santo-afonso.png",
    imageAlt: "Celebração na Paróquia Santo Afonso Maria de Ligório",
  },

  news: [
    {
      title: "Formação Bíblica para Todos",
      slug: "formacao-biblica-para-todos",
      category: "Formação",
      filterCategory: "Formação",
      date: "2025-05-12",
      formattedDate: "12 Mai 2025",
      excerpt: "Inscrições abertas para o curso de Introdução à Sagrada Escritura.",
      image: "/images/noticias/03-formacao-biblica.png",
      imageAlt: "Bíblia aberta para formação bíblica",
    },
    {
      title: "Novena de Santo Afonso",
      slug: "novena-de-santo-afonso",
      category: "Festa",
      filterCategory: "Liturgia",
      date: "2025-05-08",
      formattedDate: "08 Mai 2025",
      excerpt: "Acompanhe a programação da novena em preparação para a nossa festa.",
      image: "/images/noticias/04-novena-santo-afonso.jpeg",
      imageAlt: "Imagem de Santo Afonso em celebração paroquial",
    },
    {
      title: "Campanha do Agasalho 2025",
      slug: "campanha-do-agasalho-2025",
      category: "Ação Social",
      filterCategory: "Ação Social",
      date: "2025-05-05",
      formattedDate: "05 Mai 2025",
      excerpt: "Doe amor, doe calor. Sua doação pode transformar o inverno de muitas famílias.",
      image: "/images/noticias/05-campanha-do-agasalho.png",
      imageAlt: "Doações organizadas para campanha solidária",
    },
    {
      title: "Reunião do CPP",
      slug: "reuniao-do-cpp",
      category: "Pastoral",
      filterCategory: "Comunicados",
      date: "2025-04-30",
      formattedDate: "30 Abr 2025",
      excerpt: "A próxima reunião do Conselho Pastoral Paroquial será dia 22/05, às 20h.",
      image: "/images/noticias/06-reuniao-cpp.png",
      imageAlt: "Reunião pastoral com membros da comunidade",
    },
    {
      title: "Inscrições para Catequese",
      slug: "inscricoes-para-catequese",
      category: "Catequese",
      filterCategory: "Família",
      date: "2025-04-28",
      formattedDate: "28 Abr 2025",
      excerpt: "Pais e responsáveis, fiquem atentos ao período de inscrições para 2025.",
      image: "/images/noticias/07-inscricoes-catequese.png",
      imageAlt: "Encontro de catequese com crianças",
    },
    {
      title: "Retiro Espiritual Paroquial",
      slug: "retiro-espiritual-paroquial",
      category: "Espiritualidade",
      filterCategory: "Juventude",
      date: "2025-04-24",
      formattedDate: "24 Abr 2025",
      excerpt: "Viva um final de semana de oração, silêncio e renovação espiritual.",
      image: "/images/noticias/08-retiro-espiritual.png",
      imageAlt: "Pessoa em momento de oração ao ar livre",
    },
  ] satisfies NewsArticle[],

  notices: [
    {
      title: "Horários especiais de Missa",
      date: "2025-05-18",
      formattedDate: "18 Mai 2025",
      description: "No dia 25/05, as missas serão às 7h, 9h e 19h.",
      icon: "calendar",
    },
    {
      title: "Mutirão de Limpeza da Igreja",
      date: "2025-05-16",
      formattedDate: "16 Mai 2025",
      description: "Participe do mutirão de limpeza no dia 24/05, às 8h.",
      icon: "hand-heart",
    },
    {
      title: "Adoração ao Santíssimo",
      date: "2025-05-12",
      formattedDate: "12 Mai 2025",
      description: "Terça-feira, das 18h às 19h30. Participe deste momento de graça!",
      icon: "cross",
    },
    {
      title: "Secretaria Paroquial",
      date: "2025-05-08",
      formattedDate: "08 Mai 2025",
      description: "Informamos que não haverá expediente no dia 12/05.",
      icon: "info",
    },
  ] satisfies NoticeItem[],

  categories: [
    "Todos",
    "Comunicados",
    "Formação",
    "Liturgia",
    "Juventude",
    "Família",
    "Ação Social",
  ],

  cta: {
    title: "Fique por dentro da nossa comunidade",
    description:
      "Receba nossas notícias e avisos diretamente no seu e-mail e não perca nenhuma novidade da paróquia.",
    buttonLabel: "Receber avisos",
    buttonHref: "/contato",
    secondaryLabel: "Entrar em contato",
    secondaryHref: "/contato",
  },
} as const;
