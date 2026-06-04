/**
 * Informações gerais da paróquia.
 * Edite aqui o nome, descrição, citações e dados de contato exibidos no site.
 */
export const site = {
  name: "Paróquia Santo Afonso",
  fullName: "Paróquia Santo Afonso Maria de Ligório",
  shortName: "Santo Afonso",
  tagline: "Maria de Ligório",
  welcomeLabel: "Sejam bem-vindos à",
  description:
    "Uma comunidade de fé que acolhe, evangeliza e transforma vidas, seguindo o exemplo de Santo Afonso Maria de Ligório.",
  // Texto exibido no hero (versão mais completa)
  heroText:
    "Uma comunidade de fé que acolhe, evangeliza e transforma vidas, seguindo o exemplo de Santo Afonso Maria de Ligório: zeloso pastor e mestre da caridade.",
  // Crédito de desenvolvimento exibido no rodapé
  developer: "Equipe de Comunicação Paroquial",
  // Citação exibida no hero
  heroQuote: {
    text: "A caridade é a alma da fé.",
    author: "Santo Afonso Maria de Ligório",
  },
  // Citação exibida no rodapé
  footerQuote: {
    text: "Tudo por amor, nada por força.",
    author: "Santo Afonso Maria de Ligório",
  },
  logo: {
    src: "/images/logo.jpg",
    alt: "Brasão da Paróquia Santo Afonso Maria de Ligório",
  },
  heroImage: {
    src: "/images/igreja-hero.png",
    alt: "Fachada da Paróquia Santo Afonso Maria de Ligório",
  },
  contact: {
    addressLines: ["Av. Constantino Nery, 5785", "Flores", "Manaus - AM — CEP 69058-795"],
    phone: "(92) 99487-1883",
    email: "contato@paroquiasantoafonso.org.br",
    officeHours: "Segunda a Sexta: 8h às 12h | 14h às 18h",
    // Localização real (Google Maps) — Manaus/AM
    mapUrl:
      "https://www.google.com/maps/place/Par%C3%B3quia+Santo+Afonso+Maria+de+Ligorio+-+MANAUS+-AM/@-3.0740864,-60.0272607,17z",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=-3.0740864,-60.0272607&z=16&hl=pt-BR&output=embed",
    whatsapp: "https://wa.me/5592994871883",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/5592994871883",
  },
} as const;
