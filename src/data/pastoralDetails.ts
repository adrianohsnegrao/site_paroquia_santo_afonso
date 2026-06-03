/**
 * Dados completos de cada pastoral (página dinâmica /pastorais/[slug]).
 * Estrutura preparada para futura alimentação por painel administrativo (CMS).
 *
 * Os `slug` aqui correspondem aos da listagem em `src/data/pastoralsPage.ts`.
 * Os ícones são strings resolvidas em `src/lib/iconMap.ts`.
 */

export interface PastoralPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ActivityItem {
  title: string;
  description: string;
  icon: string;
}

export interface PastoralDetail {
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
  pillars: PastoralPillar[];
  activities: {
    title: string;
    subtitle: string;
    image: string;
    items: ActivityItem[];
    notice?: string;
  };
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  coordinator: {
    label: string;
    name: string;
    role: string;
    email: string;
    phone: string;
  };
  contact: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

// Imagem compartilhada para o bloco "Encontros e Atividades" (comunidade reunida).
const ACTIVITIES_IMAGE = "/images/pastorais/pastorais-hero-banner.png";
const CATEGORY = "Pastorais e Movimentos";
const EYEBROW = "Pastorais e Movimentos";

export const pastoralDetails: PastoralDetail[] = [
  {
    title: "Pastoral da Palavra",
    slug: "pastoral-da-palavra",
    category: CATEGORY,
    shortDescription: "Anuncia e partilha a Palavra de Deus, alimentando nossa fé.",
    description:
      "A Pastoral da Palavra tem a missão de anunciar, acolher, meditar e partilhar a Palavra de Deus em nossa comunidade. Por meio da escuta atenta, do estudo e da vivência do Evangelho, buscamos fortalecer a fé e conduzir todos a um encontro pessoal com Cristo.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral da Palavra",
      description: "Anuncia e partilha a Palavra de Deus, alimentando nossa fé.",
      quote: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
      quoteReference: "Salmo 119,105",
      image: "/images/pastorais/pastoral-palavra.png",
    },
    pillars: [
      { title: "Anunciar", description: "Proclamamos a Palavra de Deus nas celebrações e encontros, levando esperança e fé.", icon: "book-open" },
      { title: "Formar", description: "Promovemos formações bíblicas e momentos de estudo para aprofundar nossa fé.", icon: "users" },
      { title: "Acolher", description: "Acolhemos todos que desejam conhecer e se aproximar da Palavra de Deus.", icon: "heart" },
      { title: "Transformar", description: "A Palavra nos transforma e nos impulsiona a viver o Evangelho no dia a dia.", icon: "sun" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Participe dos nossos encontros semanais!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Encontro Semanal", description: "Terças-feiras às 19h30", icon: "calendar" },
        { title: "Estudo Bíblico", description: "Quintas-feiras às 19h30", icon: "book-open" },
        { title: "Leitura Orante", description: "Sábados às 8h00", icon: "users" },
        { title: "Local", description: "Sala da Pastoral da Palavra — Salão Paroquial", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "A Palavra de Deus transforma vidas!",
      description: "Venha fazer parte desta missão e permita que Deus fale ao seu coração.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Pe. João Paulo",
      role: "Coordenador da Pastoral da Palavra",
      email: "pastoral.palavra@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral Litúrgica",
    slug: "pastoral-liturgica",
    category: CATEGORY,
    shortDescription: "Cuida das celebrações para que sejam vividas com beleza e devoção.",
    description:
      "A Pastoral Litúrgica zela pela beleza e pelo sentido das celebrações da nossa comunidade. Prepara os ritos, coordena os ministérios e ajuda toda a assembleia a participar de forma consciente, ativa e frutuosa do mistério celebrado.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral Litúrgica",
      description: "Cuida das celebrações para que sejam vividas com beleza e devoção.",
      quote: "Servi ao Senhor com alegria, entrai em sua presença com cânticos.",
      quoteReference: "Salmo 100,2",
      image: "/images/pastorais/pastoral-liturgia.png",
    },
    pillars: [
      { title: "Celebrar", description: "Cuidamos para que cada celebração seja viva, bela e cheia de significado.", icon: "church" },
      { title: "Preparar", description: "Organizamos os ritos, os símbolos e os espaços de cada celebração.", icon: "calendar" },
      { title: "Servir", description: "Coordenamos os ministérios para que sirvam com zelo e harmonia.", icon: "hand-heart" },
      { title: "Adorar", description: "Conduzimos a comunidade ao encontro com Deus na oração litúrgica.", icon: "cross" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Sirva nas celebrações da nossa comunidade!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Reunião de Liturgia", description: "Segundas-feiras às 20h00", icon: "calendar" },
        { title: "Ensaio de Cantos", description: "Quartas-feiras às 19h30", icon: "music" },
        { title: "Escala de Ministérios", description: "Organizada mensalmente", icon: "users" },
        { title: "Local", description: "Sacristia — Igreja Matriz", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "A liturgia é o coração da nossa fé!",
      description: "Coloque seus dons a serviço de celebrações cada vez mais belas e participativas.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Diác. Antônio Carlos",
      role: "Coordenador da Pastoral Litúrgica",
      email: "pastoral.liturgia@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral da Catequese",
    slug: "pastoral-da-catequese",
    category: CATEGORY,
    shortDescription: "Formação cristã para crianças, jovens e adultos.",
    description:
      "A Pastoral da Catequese acompanha o caminho de iniciação à vida cristã de crianças, jovens e adultos. Por meio do anúncio do Evangelho e da formação na fé, prepara para os sacramentos e ajuda cada pessoa a crescer como discípula de Jesus.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral da Catequese",
      description: "Formação cristã para crianças, jovens e adultos.",
      quote: "Deixai vir a mim as crianças e não as impeçais.",
      quoteReference: "Marcos 10,14",
      image: "/images/pastorais/pastoral-catequese.png",
    },
    pillars: [
      { title: "Evangelizar", description: "Anunciamos a Boa Nova de Jesus de forma viva e acessível a todas as idades.", icon: "book-open" },
      { title: "Formar", description: "Preparamos para os sacramentos com formação sólida e amorosa.", icon: "users" },
      { title: "Acompanhar", description: "Caminhamos junto de cada catequizando em seu crescimento na fé.", icon: "heart" },
      { title: "Iniciar", description: "Introduzimos na vida da Igreja e na vivência comunitária do Evangelho.", icon: "cross" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Faça parte da formação cristã da comunidade!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Catequese Infantil", description: "Sábados às 14h00", icon: "baby" },
        { title: "Catequese de Adultos", description: "Domingos às 9h00", icon: "users" },
        { title: "Formação de Catequistas", description: "Encontro mensal", icon: "book-open" },
        { title: "Local", description: "Salas de Catequese — Centro Paroquial", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "Ajude a semear a fé nos corações!",
      description: "Seja catequista ou inscreva-se: há sempre um lugar para você nesta missão.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Sra. Marta Helena",
      role: "Coordenadora da Pastoral da Catequese",
      email: "pastoral.catequese@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral da Família",
    slug: "pastoral-da-familia",
    category: CATEGORY,
    shortDescription: "Fortalece e acompanha as famílias em sua missão e vocação.",
    description:
      "A Pastoral da Família acolhe, fortalece e acompanha as famílias da comunidade em sua bela vocação. Promove encontros, formações e apoio fraterno, ajudando os lares a serem verdadeiras igrejas domésticas, à luz do Evangelho.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral da Família",
      description: "Fortalece e acompanha as famílias em sua missão e vocação.",
      quote: "Eu e a minha casa serviremos ao Senhor.",
      quoteReference: "Josué 24,15",
      image: "/images/pastorais/pastoral-familia.png",
    },
    pillars: [
      { title: "Acolher", description: "Recebemos cada família com amor, escuta e fraternidade.", icon: "heart-handshake" },
      { title: "Fortalecer", description: "Apoiamos os casais e os lares em sua caminhada cristã.", icon: "users" },
      { title: "Orientar", description: "Oferecemos formação e direção à luz do Evangelho.", icon: "compass" },
      { title: "Celebrar", description: "Valorizamos a vida, o amor e a unidade das famílias.", icon: "sun" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Caminhe conosco no fortalecimento dos lares!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Encontro de Casais", description: "Sábados às 19h00", icon: "heart" },
        { title: "Preparação para o Matrimônio", description: "Turmas mensais", icon: "calendar" },
        { title: "Grupo de Apoio Familiar", description: "Encontros quinzenais", icon: "users" },
        { title: "Local", description: "Salão Paroquial", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "A família é o primeiro santuário da fé!",
      description: "Participe e ajude a construir lares fortes, unidos e cristãos.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Casal Roberto e Lúcia",
      role: "Coordenadores da Pastoral da Família",
      email: "pastoral.familia@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral Social",
    slug: "pastoral-social",
    category: CATEGORY,
    shortDescription: "Promove a caridade e o cuidado com os mais necessitados.",
    description:
      "A Pastoral Social é a expressão concreta da caridade da nossa comunidade. Acolhe, serve e promove a dignidade dos mais necessitados por meio de ações solidárias, visitas e partilha, fazendo do amor ao próximo um gesto vivo do Evangelho.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral Social",
      description: "Promove a caridade e o cuidado com os mais necessitados.",
      quote: "Tive fome e me destes de comer, tive sede e me destes de beber.",
      quoteReference: "Mateus 25,35",
      image: "/images/pastorais/pastoral-social.png",
    },
    pillars: [
      { title: "Servir", description: "Colocamo-nos a serviço dos irmãos com humildade e amor.", icon: "hand-heart" },
      { title: "Acolher", description: "Recebemos com dignidade quem mais precisa de apoio.", icon: "heart" },
      { title: "Partilhar", description: "Promovemos a partilha de bens, tempo e cuidado.", icon: "gift" },
      { title: "Promover", description: "Trabalhamos pela dignidade e pela transformação social.", icon: "users" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Some forças nas ações de caridade!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Distribuição de Cestas", description: "Sábados às 9h00", icon: "gift" },
        { title: "Visita aos Enfermos", description: "Quintas-feiras às 15h00", icon: "heart-handshake" },
        { title: "Reunião da Pastoral", description: "Encontro mensal", icon: "users" },
        { title: "Local", description: "Centro Comunitário — Paróquia", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "Faça o bem e transforme realidades!",
      description: "Doe seu tempo e seus dons a serviço dos que mais precisam.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Sr. José Aparecido",
      role: "Coordenador da Pastoral Social",
      email: "pastoral.social@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral da Juventude",
    slug: "pastoral-da-juventude",
    category: CATEGORY,
    shortDescription: "Caminhada de fé, amizade e protagonismo juvenil.",
    description:
      "A Pastoral da Juventude reúne os jovens da comunidade em uma caminhada de fé, amizade e serviço. Por meio de encontros, oração e ação missionária, ajuda cada jovem a descobrir sua vocação e a ser protagonista na Igreja e na sociedade.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral da Juventude",
      description: "Caminhada de fé, amizade e protagonismo juvenil.",
      quote: "Ninguém despreze a tua juventude; sê o modelo dos fiéis.",
      quoteReference: "1 Timóteo 4,12",
      image: "/images/pastorais/pastoral-juventude.png",
    },
    pillars: [
      { title: "Evangelizar", description: "Anunciamos Cristo na linguagem e na vida dos jovens.", icon: "sparkles" },
      { title: "Reunir", description: "Criamos espaços de amizade, partilha e comunhão.", icon: "users" },
      { title: "Servir", description: "Engajamos os jovens em ações missionárias e solidárias.", icon: "hand-heart" },
      { title: "Celebrar", description: "Vivemos a fé com alegria, música e oração.", icon: "music" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Jovem, venha viver a fé com alegria!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Encontro de Jovens", description: "Sábados às 19h30", icon: "sparkles" },
        { title: "Grupo de Oração Jovem", description: "Quartas-feiras às 20h00", icon: "cross" },
        { title: "Ação Missionária", description: "Encontro mensal", icon: "hand-heart" },
        { title: "Local", description: "Salão dos Jovens — Paróquia", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "Jovem, sua vocação é agora!",
      description: "Faça parte de uma juventude que ora, serve e transforma o mundo.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Lucas Andrade",
      role: "Coordenador da Pastoral da Juventude",
      email: "pastoral.juventude@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Pastoral da Música",
    slug: "pastoral-da-musica",
    category: CATEGORY,
    shortDescription: "Anima nossas celebrações com música e louvor.",
    description:
      "A Pastoral da Música serve à oração da comunidade conduzindo o canto e o louvor nas celebrações. Com dedicação e espiritualidade, ajuda a assembleia a rezar cantando e a elevar o coração a Deus por meio da beleza da música sacra.",
    hero: {
      eyebrow: EYEBROW,
      title: "Pastoral da Música",
      description: "Anima nossas celebrações com música e louvor.",
      quote: "Cantai ao Senhor um cântico novo, cantai ao Senhor, toda a terra.",
      quoteReference: "Salmo 96,1",
      image: "/images/pastorais/pastoral-musica.png",
    },
    pillars: [
      { title: "Louvar", description: "Conduzimos o louvor a Deus por meio do canto e da música.", icon: "music" },
      { title: "Ensaiar", description: "Preparamos com dedicação o repertório de cada celebração.", icon: "calendar" },
      { title: "Servir", description: "Colocamos nossos dons musicais a serviço da oração.", icon: "hand-heart" },
      { title: "Animar", description: "Ajudamos a assembleia a participar cantando com alegria.", icon: "sparkles" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Coloque seu talento a serviço do louvor!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Ensaio do Coral", description: "Quintas-feiras às 20h00", icon: "music" },
        { title: "Música nas Missas", description: "Domingos, conforme escala", icon: "church" },
        { title: "Formação Musical", description: "Encontro mensal", icon: "users" },
        { title: "Local", description: "Sala de Música — Centro Paroquial", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "Coloque seus dons a serviço do louvor!",
      description: "Cante ou toque conosco e ajude a comunidade a rezar cantando.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Sra. Cecília Moraes",
      role: "Coordenadora da Pastoral da Música",
      email: "pastoral.musica@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },

  {
    title: "Apostolado da Oração",
    slug: "apostolado-da-oracao",
    category: CATEGORY,
    shortDescription: "Reza e intercede pelas intenções da Igreja e do mundo.",
    description:
      "O Apostolado da Oração reúne fiéis dedicados à oração e à intercessão pelas intenções da Igreja e do mundo. Através do terço, da adoração e da consagração ao Coração de Jesus, sustenta espiritualmente toda a comunidade.",
    hero: {
      eyebrow: EYEBROW,
      title: "Apostolado da Oração",
      description: "Reza e intercede pelas intenções da Igreja e do mundo.",
      quote: "Orai sem cessar; em tudo dai graças.",
      quoteReference: "1 Tessalonicenses 5,17-18",
      image: "/images/pastorais/pastoral-oracao.png",
    },
    pillars: [
      { title: "Orar", description: "Cultivamos a oração diária e a vida de intimidade com Deus.", icon: "hand-heart" },
      { title: "Interceder", description: "Rezamos pelas intenções da Igreja, do Papa e do mundo.", icon: "heart" },
      { title: "Adorar", description: "Promovemos a adoração ao Santíssimo Sacramento.", icon: "cross" },
      { title: "Consagrar", description: "Consagramos a comunidade ao Sagrado Coração de Jesus.", icon: "sun" },
    ],
    activities: {
      title: "Encontros e Atividades",
      subtitle: "Una-se a nós na oração pela comunidade!",
      image: ACTIVITIES_IMAGE,
      items: [
        { title: "Terço Mariano", description: "Diariamente às 18h00", icon: "hand-heart" },
        { title: "Adoração ao Santíssimo", description: "Quintas-feiras às 19h00", icon: "cross" },
        { title: "Reunião do Apostolado", description: "Encontro mensal", icon: "users" },
        { title: "Local", description: "Capela do Santíssimo — Igreja Matriz", icon: "map-pin" },
      ],
      notice: "Os horários podem sofrer alterações conforme a agenda paroquial.",
    },
    cta: {
      title: "Unidos na oração, transformamos o mundo!",
      description: "Reze conosco e interceda pelas necessidades da Igreja e da comunidade.",
      buttonLabel: "Quero participar",
      buttonHref: "/#contato",
    },
    coordinator: {
      label: "Coordenação",
      name: "Sra. Terezinha Lopes",
      role: "Coordenadora do Apostolado da Oração",
      email: "apostolado.oracao@paroquiasantoafonso.org.br",
      phone: "(11) 99999-9999",
    },
    contact: {
      title: "Fale com a Pastoral",
      description: "Entre em contato conosco para saber mais sobre nossas atividades.",
      buttonLabel: "Entrar em contato",
      buttonHref: "/#contato",
    },
  },
];

/** Busca uma pastoral pelo slug (usado na página dinâmica). */
export function getPastoralBySlug(slug: string): PastoralDetail | undefined {
  return pastoralDetails.find((pastoral) => pastoral.slug === slug);
}
