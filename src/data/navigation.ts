/**
 * Itens do menu principal (header) e dos links do rodapé.
 * Os "href" usam âncoras das seções da Home (#id).
 */
export interface NavLink {
  label: string;
  href: string;
}

// Obs.: "Sobre" foi removido por não haver seção correspondente na Home,
// garantindo que o destaque de menu ativo aponte sempre para uma seção real.
export const mainNav: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Horários", href: "#horarios" },
  { label: "Pastorais", href: "#pastorais" },
  { label: "Eventos", href: "#eventos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];

export const footerNav: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Horários de Missa", href: "#horarios" },
  { label: "Eventos", href: "#eventos" },
  { label: "Pastorais e Movimentos", href: "#pastorais" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];
