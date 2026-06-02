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
    addressLines: ["Rua das Flores, 123", "Bairro Jardim Esperança", "Cidade/UF"],
    phone: "(12) 3456-7890",
    email: "contato@paroquiasantoafonso.org.br",
    officeHours: "Segunda a Sexta: 8h às 12h | 14h às 18h",
    mapUrl: "https://maps.google.com",
    whatsapp: "https://wa.me/",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/",
  },
} as const;
