/**
 * Conteúdo da página "Contato" (/contato).
 * Centralizado aqui para futura alimentação por painel administrativo (CMS).
 * Os ícones são strings resolvidas em `src/lib/iconMap.ts`.
 */

/** Estrutura de um envio do formulário — preparada para virar registro no admin. */
export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  requestType: string;
  subject: string;
  message: string;
}

export const contactPageData = {
  hero: {
    eyebrow: "Contato",
    title: "Fale Conosco",
    description:
      "Estamos aqui para ouvir você. Entre em contato com a Paróquia Santo Afonso Maria de Ligório para orientação, pedidos de oração, sacramentos, pastorais e informações gerais. Será uma alegria atendê-lo!",
    primaryButtonLabel: "Enviar mensagem",
    primaryButtonHref: "#formulario-contato",
    secondaryButtonLabel: "Ver localização",
    secondaryButtonHref: "#localizacao",
    image: "/images/contato/contato-hero-igreja.png",
    imageAlt: "Fiéis entrando na igreja da Paróquia Santo Afonso Maria de Ligório",
  },

  quickContacts: [
    { title: "Onde Estamos", lines: ["Av. Constantino Nery, 5785", "Flores", "Manaus - AM"], icon: "map-pin" },
    { title: "Telefone", lines: ["(92) 99487-1883"], icon: "phone" },
    { title: "E-mail", lines: ["contato@paroquiasantoafonso.org.br"], icon: "mail" },
    { title: "Atendimento", lines: ["Terça a Sexta: 8h às 12h | 14h às 18h", "Sábado: 8h às 12h"], icon: "clock" },
  ],

  form: {
    title: "Envie sua mensagem",
    description: "Preencha o formulário abaixo e nossa equipe entrará em contato.",
    fields: {
      name: "Nome completo",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      type: "Tipo de solicitação",
      subject: "Assunto",
      message: "Mensagem",
    },
    requestTypes: [
      "Fale conosco",
      "Pedido de oração",
      "Intenção de missa",
      "Quero participar de uma pastoral",
      "Batismo",
      "Casamento",
      "Catequese",
      "Dízimo",
      "Outro",
    ],
    submitLabel: "Enviar mensagem",
    successMessage: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
    privacyText:
      "Seus dados estão seguros. Usaremos suas informações apenas para responder sua solicitação.",
  },

  sidebar: {
    address: {
      title: "Endereço da Paróquia",
      lines: ["Av. Constantino Nery, 5785", "Flores", "Manaus - AM — CEP 69058-795"],
      buttonLabel: "Ver no mapa",
      buttonHref: "#localizacao",
    },
    officeHours: {
      title: "Horário da Secretaria",
      lines: ["Terça a Sexta: 8h às 12h | 14h às 18h", "Sábado: 8h às 12h"],
    },
    sacraments: {
      title: "Sacramentos e Pastorais",
      description: "Dúvidas sobre batismo, casamento, crisma, catequese ou pastorais?",
      linkLabel: "Fale diretamente com nossa secretaria",
      linkHref: "#formulario-contato",
    },
    social: {
      title: "Redes Sociais",
      description: "Acompanhe nossa paróquia:",
      links: [
        { label: "Facebook", href: "#", icon: "facebook" },
        { label: "Instagram", href: "#", icon: "instagram" },
        { label: "YouTube", href: "#", icon: "youtube" },
        { label: "WhatsApp", href: "https://wa.me/5592994871883", icon: "message-circle" },
      ],
    },
  },

  helpCards: [
    { title: "Pedido de oração", description: "Deixe seu pedido. Nossa comunidade rezará por você.", icon: "hand-heart", linkLabel: "Saiba mais", linkHref: "#formulario-contato" },
    { title: "Intenção de missa", description: "Ofereça uma missa por uma intenção especial.", icon: "chalice", linkLabel: "Saiba mais", linkHref: "#formulario-contato" },
    { title: "Quero participar de uma pastoral", description: "Descubra as pastorais e serviços em nossa comunidade.", icon: "users", linkLabel: "Saiba mais", linkHref: "/pastorais" },
    { title: "Batismo", description: "Informações e agendamentos para batizados.", icon: "droplets", linkLabel: "Saiba mais", linkHref: "#formulario-contato" },
    { title: "Casamento", description: "Prepare-se para o Sacramento do Matrimônio.", icon: "rings", linkLabel: "Saiba mais", linkHref: "#formulario-contato" },
    { title: "Catequese", description: "Formação para crianças, jovens e adultos.", icon: "book-open", linkLabel: "Saiba mais", linkHref: "#formulario-contato" },
  ],

  location: {
    title: "Visite nossa Paróquia",
    description:
      "Estamos localizados em uma região de fácil acesso, com estacionamento no local e rotas de acesso. Seja bem-vindo à casa do Pai!",
    highlights: [
      "Estacionamento gratuito",
      "Rampa de acessibilidade",
      "Transporte público próximo",
      "Ambiente acolhedor para toda a família",
    ],
    mapTitle: "Paróquia Santo Afonso Maria de Ligório",
    mapAddress: "Av. Constantino Nery, 5785 - Flores",
    buttonLabel: "Ver mapa ampliado",
    // Localização real (mesma da seção de Contato da Home)
    buttonHref:
      "https://www.google.com/maps/place/Par%C3%B3quia+Santo+Afonso+Maria+de+Ligorio+-+MANAUS+-AM/@-3.0740864,-60.0272607,17z",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=-3.0740864,-60.0272607&z=16&hl=pt-BR&output=embed",
  },

  faq: [
    {
      question: "Como solicitar batismo?",
      answer:
        "Entre em contato com a secretaria paroquial para verificar datas, documentos necessários e encontros de preparação.",
    },
    {
      question: "Como agendar casamento?",
      answer:
        "O ideal é procurar a secretaria com antecedência mínima de seis meses para orientações, documentação e preparação matrimonial.",
    },
    {
      question: "Como participar de uma pastoral?",
      answer:
        "Você pode falar com a secretaria ou acessar a página de Pastorais para conhecer os grupos disponíveis e escolher onde deseja servir.",
    },
  ],

  cta: {
    title: "Estamos aqui para acolher você e sua família",
    description:
      "Nossa comunidade está de portas abertas para caminhar com você. Entre em contato ou venha nos visitar!",
    buttonLabel: "Enviar mensagem",
    buttonHref: "#formulario-contato",
  },
} as const;
