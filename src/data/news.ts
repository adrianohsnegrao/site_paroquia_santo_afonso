/**
 * Notícias e comunicados exibidos na seção "Notícias e Comunicados".
 */
export interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export const news: NewsItem[] = [
  {
    category: "Formação",
    date: "20 Mai 2025",
    title: "Formação Bíblica para Todos",
    excerpt:
      "Inscrições abertas para o curso de Introdução à Sagrada Escritura.",
    href: "#",
  },
  {
    category: "Liturgia",
    date: "18 Mai 2025",
    title: "Corpus Christi",
    excerpt:
      "Participe da Santa Missa e da procissão pelas ruas da nossa comunidade.",
    href: "#",
  },
  {
    category: "Comunicado",
    date: "15 Mai 2025",
    title: "Reunião do CPP",
    excerpt:
      "A próxima reunião do Conselho Pastoral Paroquial será dia 22/05, às 20h.",
    href: "#",
  },
];
