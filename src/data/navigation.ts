/**
 * Itens do menu principal (header).
 * Os links de seção usam "/#id" para funcionarem tanto na Home quanto a
 * partir de outras páginas (ex.: /sobre). "Sobre" aponta para a rota /sobre.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Início", href: "/#inicio" },
  { label: "Horários", href: "/#horarios" },
  { label: "Pastorais", href: "/#pastorais" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Notícias", href: "/#noticias" },
  { label: "Contato", href: "/#contato" },
  { label: "Sobre", href: "/sobre" },
];
