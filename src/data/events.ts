/**
 * Eventos exibidos na seção "Eventos em Destaque".
 * Cada evento possui dia/mês (badge), título, descrição, local e horário.
 */
export interface EventItem {
  day: string;
  month: string;
  title: string;
  description: string;
  location: string;
  time: string;
}

export const events: EventItem[] = [
  {
    day: "25",
    month: "Mai",
    title: "Festa de Santo Afonso Maria de Ligório",
    description: "Missa Solene às 19h00 e confraternização comunitária.",
    location: "Igreja Matriz",
    time: "19h00",
  },
  {
    day: "08",
    month: "Jun",
    title: "Pentecostes",
    description: "Vigília de Oração e Renovação Carismática.",
    location: "Salão Paroquial",
    time: "18h30",
  },
  {
    day: "15",
    month: "Jun",
    title: "Encontro de Casais",
    description: "Formação e espiritualidade para casais.",
    location: "Salão Paroquial",
    time: "15h00",
  },
  {
    day: "22",
    month: "Jun",
    title: "Festa Junina Paroquial",
    description: "Comidas típicas e arrecadação para as obras sociais.",
    location: "Pátio da Paróquia",
    time: "18h00",
  },
];
