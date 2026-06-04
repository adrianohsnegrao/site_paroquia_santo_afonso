/**
 * Dados completos de cada notícia (página dinâmica /noticias/[slug]).
 * Estrutura preparada para futura alimentação por painel administrativo (CMS).
 *
 * Os `slug` correspondem aos da listagem em `src/data/newsPage.ts`.
 * Helpers: getNewsBySlug, getRelatedNews, getOtherNews.
 */

export interface NewsQuote {
  text: string;
  author: string;
}

export interface GalleryImage {
  image: string;
  alt: string;
}

export interface RelatedNews {
  title: string;
  slug: string;
  category: string;
  formattedDate: string;
  image: string;
}

export interface NewsDetail {
  title: string;
  slug: string;
  category: string;
  date: string;
  formattedDate: string;
  author: string;
  shortDescription: string;
  cardImage: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  content: {
    mainImage: string;
    paragraphs: string[];
    quote?: NewsQuote;
    secondaryImage?: string;
  };
  gallery?: GalleryImage[];
  info: {
    category: string;
    publishedAt: string;
    author: string;
  };
  related?: RelatedNews[];
}

const AUTHOR = "Equipe de Comunicação Paroquial";
const EYEBROW = "Notícia";

export const newsDetails: NewsDetail[] = [
  {
    title: "Solenidade de Santo Afonso Maria de Ligório reúne comunidade em fé e gratidão",
    slug: "solenidade-santo-afonso-comunidade-fe-gratidao",
    category: "Liturgia",
    date: "2025-05-15",
    formattedDate: "15 Mai 2025",
    author: AUTHOR,
    shortDescription:
      "Com grande alegria, nossa paróquia celebrou o dia de seu padroeiro com missa solene, procissão, momentos de oração e confraternização.",
    cardImage: "/images/noticias/02-solenidade-santo-afonso.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Solenidade de Santo Afonso Maria de Ligório reúne comunidade em fé e gratidão",
      description:
        "Com grande alegria, nossa paróquia celebrou o dia de seu padroeiro com missa solene, procissão, momentos de oração e confraternização. Veja os melhores momentos desta bela celebração.",
      image: "/images/noticias/detalhes/noticia-detalhe-hero-solenidade-santo-afonso.png",
    },
    content: {
      mainImage: "/images/noticias/detalhes/noticia-detalhe-missa-solenidade.png",
      paragraphs: [
        "No último domingo, 15 de maio, nossa comunidade paroquial celebrou com grande alegria a Solenidade de Santo Afonso Maria de Ligório, padroeiro de nossa paróquia. A data, marcada pela fé e pela comunhão, reuniu fiéis de todas as comunidades para um dia de profunda espiritualidade, oração e gratidão.",
        "A programação teve início com a Santa Missa Solene, presidida pelo pároco, Pe. José Roberto, que destacou em sua homilia o exemplo de santidade, zelo pastoral e amor aos pobres de Santo Afonso, inspirando todos a viverem o Evangelho com generosidade e dedicação.",
        "Após a celebração, realizamos a tradicional procissão pelas ruas do bairro, levando a imagem de nosso padroeiro e testemunhando publicamente nossa fé.",
        "O dia continuou com momentos de convivência fraterna, com apresentação do coral, partilha de alimentos e atividades para as crianças. Agradecemos a todos os voluntários, ministérios e grupos que contribuíram para que esta festa fosse tão especial.",
        "Que Santo Afonso Maria de Ligório continue intercedendo por nossa comunidade, abençoando cada família e fortalecendo nossa missão de anunciar o Evangelho.",
      ],
      quote: {
        text: "Tudo por amor, nada por força.",
        author: "Santo Afonso Maria de Ligório",
      },
      secondaryImage: "/images/noticias/detalhes/noticia-detalhe-procissao-comunidade.png",
    },
    gallery: [
      { image: "/images/noticias/detalhes/noticia-galeria-celebracao-altar.png", alt: "Celebração solene no altar da paróquia" },
      { image: "/images/noticias/detalhes/noticia-galeria-comunidade-reunida.png", alt: "Comunidade reunida em confraternização paroquial" },
      { image: "/images/noticias/detalhes/noticia-galeria-partilha-comunidade.png", alt: "Momento de partilha comunitária" },
    ],
    info: {
      category: "Liturgia",
      publishedAt: "15 de Maio de 2025",
      author: AUTHOR,
    },
    related: [
      { title: "Formação Bíblica para Todos", slug: "formacao-biblica-para-todos", category: "Formação", formattedDate: "12 Mai 2025", image: "/images/noticias/detalhes/noticia-relacionada-formacao-biblica.png" },
      { title: "Novena de Santo Afonso", slug: "novena-de-santo-afonso", category: "Liturgia", formattedDate: "08 Mai 2025", image: "/images/noticias/detalhes/noticia-relacionada-novena-santo-afonso.png" },
      { title: "Campanha do Agasalho 2025", slug: "campanha-do-agasalho-2025", category: "Ação Social", formattedDate: "05 Mai 2025", image: "/images/noticias/detalhes/noticia-relacionada-campanha-agasalho.png" },
    ],
  },

  {
    title: "Formação Bíblica para Todos",
    slug: "formacao-biblica-para-todos",
    category: "Formação",
    date: "2025-05-12",
    formattedDate: "12 Mai 2025",
    author: AUTHOR,
    shortDescription: "Inscrições abertas para o curso de Introdução à Sagrada Escritura.",
    cardImage: "/images/noticias/03-formacao-biblica.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Formação Bíblica para Todos",
      description:
        "Estão abertas as inscrições para o curso de Introdução à Sagrada Escritura, um convite a aprofundar a fé pela Palavra de Deus.",
      image: "/images/noticias/03-formacao-biblica.png",
    },
    content: {
      mainImage: "/images/noticias/03-formacao-biblica.png",
      paragraphs: [
        "Nossa paróquia tem a alegria de anunciar a abertura das inscrições para o curso de Introdução à Sagrada Escritura, destinado a todos que desejam conhecer e amar mais a Palavra de Deus.",
        "Os encontros acontecerão semanalmente e abordarão a história da salvação, a formação dos livros bíblicos e a leitura orante das Escrituras, sempre em clima de oração e partilha comunitária.",
        "As inscrições podem ser feitas na secretaria paroquial. Não é necessário conhecimento prévio: basta o desejo de crescer na fé. Venha participar!",
      ],
      quote: {
        text: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
        author: "Salmo 119,105",
      },
    },
    info: { category: "Formação", publishedAt: "12 de Maio de 2025", author: AUTHOR },
  },

  {
    title: "Novena de Santo Afonso",
    slug: "novena-de-santo-afonso",
    category: "Liturgia",
    date: "2025-05-08",
    formattedDate: "08 Mai 2025",
    author: AUTHOR,
    shortDescription: "Acompanhe a programação da novena em preparação para a nossa festa.",
    cardImage: "/images/noticias/04-novena-santo-afonso.jpeg",
    hero: {
      eyebrow: EYEBROW,
      title: "Novena de Santo Afonso",
      description:
        "Em preparação à festa do padroeiro, a comunidade se reúne em nove noites de oração, louvor e reflexão.",
      image: "/images/noticias/04-novena-santo-afonso.jpeg",
    },
    content: {
      mainImage: "/images/noticias/04-novena-santo-afonso.jpeg",
      paragraphs: [
        "Tem início nesta semana a Novena de Santo Afonso Maria de Ligório, momento forte de preparação espiritual para a solenidade do nosso padroeiro.",
        "Durante nove noites, cada comunidade e pastoral conduzirá um tema, refletindo sobre a vida e o exemplo de Santo Afonso. As celebrações contam com missa, terço e momentos de louvor.",
        "Convidamos todas as famílias a participarem deste tempo de graça, abrindo o coração à intercessão do nosso padroeiro.",
      ],
    },
    info: { category: "Liturgia", publishedAt: "08 de Maio de 2025", author: AUTHOR },
  },

  {
    title: "Campanha do Agasalho 2025",
    slug: "campanha-do-agasalho-2025",
    category: "Ação Social",
    date: "2025-05-05",
    formattedDate: "05 Mai 2025",
    author: AUTHOR,
    shortDescription: "Doe amor, doe calor. Sua doação pode transformar o inverno de muitas famílias.",
    cardImage: "/images/noticias/05-campanha-do-agasalho.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Campanha do Agasalho 2025",
      description:
        "Nossa Pastoral Social convida toda a comunidade a participar da Campanha do Agasalho e aquecer quem mais precisa.",
      image: "/images/noticias/05-campanha-do-agasalho.png",
    },
    content: {
      mainImage: "/images/noticias/05-campanha-do-agasalho.png",
      paragraphs: [
        "Com a chegada do inverno, nossa Pastoral Social lança a Campanha do Agasalho 2025, com o lema “Doe amor, doe calor”.",
        "Serão recolhidos agasalhos, cobertores e roupas em bom estado, que serão distribuídos às famílias em situação de vulnerabilidade da nossa região.",
        "Os pontos de coleta estarão na entrada da igreja e na secretaria paroquial. Cada gesto de partilha é um sinal concreto do amor de Cristo. Participe!",
      ],
      quote: {
        text: "Tive frio e me agasalhastes.",
        author: "Mateus 25,36",
      },
    },
    info: { category: "Ação Social", publishedAt: "05 de Maio de 2025", author: AUTHOR },
  },

  {
    title: "Reunião do CPP",
    slug: "reuniao-do-cpp",
    category: "Pastoral",
    date: "2025-04-30",
    formattedDate: "30 Abr 2025",
    author: AUTHOR,
    shortDescription: "A próxima reunião do Conselho Pastoral Paroquial será dia 22/05, às 20h.",
    cardImage: "/images/noticias/06-reuniao-cpp.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Reunião do Conselho Pastoral Paroquial",
      description:
        "Coordenadores de pastorais e movimentos estão convocados para a próxima reunião do CPP.",
      image: "/images/noticias/06-reuniao-cpp.png",
    },
    content: {
      mainImage: "/images/noticias/06-reuniao-cpp.png",
      paragraphs: [
        "Comunicamos que a próxima reunião do Conselho Pastoral Paroquial (CPP) acontecerá no dia 22 de maio, às 20h, no salão paroquial.",
        "Na pauta, a avaliação das atividades realizadas, o planejamento dos próximos meses e a organização das festas e celebrações da comunidade.",
        "Pedimos a presença de todos os coordenadores de pastorais, movimentos e comunidades. A participação de cada um é fundamental para a caminhada paroquial.",
      ],
    },
    info: { category: "Pastoral", publishedAt: "30 de Abril de 2025", author: AUTHOR },
  },

  {
    title: "Inscrições para Catequese",
    slug: "inscricoes-para-catequese",
    category: "Catequese",
    date: "2025-04-28",
    formattedDate: "28 Abr 2025",
    author: AUTHOR,
    shortDescription: "Pais e responsáveis, fiquem atentos ao período de inscrições para 2025.",
    cardImage: "/images/noticias/07-inscricoes-catequese.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Inscrições para a Catequese 2025",
      description:
        "Estão abertas as inscrições para a catequese de crianças, adolescentes e adultos em nossa paróquia.",
      image: "/images/noticias/07-inscricoes-catequese.png",
    },
    content: {
      mainImage: "/images/noticias/07-inscricoes-catequese.png",
      paragraphs: [
        "A catequese é um caminho de iniciação à vida cristã e de encontro pessoal com Jesus. Por isso, convidamos pais e responsáveis a inscreverem seus filhos para o ano catequético de 2025.",
        "Há turmas para a catequese infantil, de adolescentes e também de adultos que desejam receber os sacramentos. Os encontros acontecem semanalmente, com catequistas dedicados e preparados.",
        "As inscrições podem ser feitas na secretaria paroquial. Não deixe para depois: ajude a semear a fé no coração de quem você ama.",
      ],
    },
    info: { category: "Catequese", publishedAt: "28 de Abril de 2025", author: AUTHOR },
  },

  {
    title: "Retiro Espiritual Paroquial",
    slug: "retiro-espiritual-paroquial",
    category: "Espiritualidade",
    date: "2025-04-24",
    formattedDate: "24 Abr 2025",
    author: AUTHOR,
    shortDescription: "Viva um final de semana de oração, silêncio e renovação espiritual.",
    cardImage: "/images/noticias/08-retiro-espiritual.png",
    hero: {
      eyebrow: EYEBROW,
      title: "Retiro Espiritual Paroquial",
      description:
        "Um convite para se afastar da correria do dia a dia e se reencontrar com Deus em um tempo de silêncio e oração.",
      image: "/images/noticias/08-retiro-espiritual.png",
    },
    content: {
      mainImage: "/images/noticias/08-retiro-espiritual.png",
      paragraphs: [
        "Nossa paróquia convida toda a comunidade para o Retiro Espiritual Paroquial, um final de semana dedicado à oração, ao silêncio e à renovação da fé.",
        "Com momentos de pregação, adoração, confissão e partilha, o retiro será uma oportunidade preciosa para renovar o coração e fortalecer a vida espiritual.",
        "As vagas são limitadas e as inscrições já podem ser feitas na secretaria. Reserve este tempo para cuidar do seu encontro com Deus.",
      ],
      quote: {
        text: "Vinde para um lugar deserto e descansai um pouco.",
        author: "Marcos 6,31",
      },
    },
    info: { category: "Espiritualidade", publishedAt: "24 de Abril de 2025", author: AUTHOR },
  },
];

/** Busca uma notícia pelo slug (usado na página dinâmica). */
export function getNewsBySlug(slug: string): NewsDetail | undefined {
  return newsDetails.find((item) => item.slug === slug);
}

/** Notícias relacionadas: usa as definidas na notícia ou deriva 3 outras. */
export function getRelatedNews(slug: string): RelatedNews[] {
  const current = getNewsBySlug(slug);
  if (current?.related && current.related.length > 0) return current.related;
  return newsDetails
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({
      title: item.title,
      slug: item.slug,
      category: item.category,
      formattedDate: item.formattedDate,
      image: item.cardImage,
    }));
}

/** "Outras notícias" (full width): 3 notícias diferentes da atual. */
export function getOtherNews(slug: string) {
  return newsDetails
    .filter((item) => item.slug !== slug)
    .slice(-3)
    .map((item) => ({
      title: item.title,
      slug: item.slug,
      category: item.category,
      formattedDate: item.formattedDate,
      excerpt: item.shortDescription,
      image: item.cardImage,
    }));
}
