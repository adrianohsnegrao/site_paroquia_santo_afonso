import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Eye,
  Compass,
  Cross,
  Heart,
  Users,
  Send,
  HandHeart,
} from "lucide-react";

/**
 * Conteúdo da página "Sobre".
 * Tudo centralizado aqui para, futuramente, ser alimentado por um
 * painel administrativo (CMS). Os componentes apenas renderizam estes dados.
 */

export interface AboutPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutPageData = {
  hero: {
    eyebrow: "Sobre Nós",
    title: "Sobre Nossa Paróquia",
    description: "Conheça nossa história, missão e caminhada de fé.",
    text: "Uma comunidade de fé que acolhe, evangeliza e transforma vidas, seguindo o exemplo de Santo Afonso Maria de Ligório: zeloso pastor e mestre da caridade.",
    image: "/images/about/about_hero_igreja.png",
    imageAlt: "Fachada iluminada da Paróquia Santo Afonso Maria de Ligório",
  },

  history: {
    title: "Nossa História",
    subtitle: "Uma trajetória de fé, perseverança e amor a Deus e ao próximo.",
    // Parágrafos sempre visíveis
    paragraphs: [
      "A Paróquia Santo Afonso Maria de Ligório nasceu do desejo de uma comunidade viva de fé que, movida pelo amor a Cristo, sonhava com um espaço próprio para celebrar, acolher as famílias e servir aos mais necessitados.",
      "Com o crescimento do bairro e o empenho de muitos fiéis, foi construída a casa do Senhor, inaugurada em clima de festa e gratidão. Desde então, seguimos firmes em nossa missão evangelizadora, formando discípulos missionários e testemunhando o Evangelho na vida cotidiana.",
      "Ao longo dos anos, muitas histórias foram escritas, vidas transformadas e vocações despertadas. Nossa comunidade continua caminhando, guiada pelo Espírito Santo e pelo exemplo de Santo Afonso Maria de Ligório.",
    ],
    // Parágrafos revelados ao clicar em "Ler mais sobre nossa história"
    extraParagraphs: [
      "Hoje, a paróquia abriga dezenas de pastorais e movimentos, grupos de oração e iniciativas sociais que acolhem pessoas de todas as idades, do batismo à terceira idade.",
      "Olhando para o futuro com esperança, renovamos diariamente o compromisso de ser sinal vivo do amor de Deus em nossa cidade, sempre fiéis ao carisma redentorista de Santo Afonso Maria de Ligório.",
    ],
    ctaExpand: "Ler mais sobre nossa história",
    ctaCollapse: "Mostrar menos",
    image: "/images/about/about_interior_igreja.png",
    imageAlt: "Interior da igreja com altar e crucifixo",
  },

  pillars: [
    {
      icon: Megaphone,
      title: "Missão",
      description:
        "Evangelizar com alegria, formar discípulos missionários e promover a dignidade da vida, à luz do Evangelho e do exemplo de Santo Afonso Maria de Ligório.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser uma comunidade acolhedora, fraterna e missionária, sinal do Reino de Deus, transformando realidades com fé, esperança e caridade.",
    },
    {
      icon: Compass,
      title: "Propósito",
      description:
        "Construir juntos uma Igreja viva, que escuta, acolhe e caminha com todos, especialmente os mais pobres e necessitados.",
    },
  ] satisfies AboutPillar[],

  values: [
    {
      icon: Cross,
      title: "Fé",
      description:
        "Pilar que sustenta nossa caminhada e fortalece nossa confiança em Deus.",
    },
    {
      icon: Heart,
      title: "Caridade",
      description:
        "Amor que se doa e se partilha em gestos concretos de solidariedade.",
    },
    {
      icon: Users,
      title: "Comunhão",
      description:
        "Caminhar juntos como família, valorizando a unidade e a fraternidade.",
    },
    {
      icon: Send,
      title: "Missão",
      description:
        "Anunciar o Evangelho com coragem e entusiasmo em todos os ambientes.",
    },
    {
      icon: HandHeart,
      title: "Serviço",
      description:
        "Colocar nossos dons a serviço dos irmãos, com humildade e dedicação.",
    },
  ] satisfies AboutValue[],

  valuesHeading: {
    eyebrow: "O que nos move",
    title: "Nossos Valores",
  },

  patronSaint: {
    eyebrow: "Nosso Padroeiro",
    title: "Santo Afonso Maria de Ligório",
    text: "Bispo, teólogo e doutor da Igreja, Santo Afonso dedicou sua vida à evangelização e ao cuidado pastoral dos mais pobres. Mestre da oração, da compaixão e da misericórdia, é para nós exemplo de zelo, sabedoria e amor a Deus.",
    quote: "Tudo por amor, nada por força.",
    author: "Santo Afonso Maria de Ligório",
    image: "/images/about/about_santo_afonso.png",
    imageAlt: "Imagem de Santo Afonso Maria de Ligório",
  },
} as const;
