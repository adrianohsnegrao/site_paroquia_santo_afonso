import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendarHero } from "@/components/calendar/CalendarHero";
import { CalendarBoard } from "@/components/calendar/CalendarBoard";
import { CalendarFilterHighlights } from "@/components/calendar/CalendarFilterHighlights";
import { CalendarCTA } from "@/components/calendar/CalendarCTA";

export const metadata: Metadata = {
  title: "Calendário de Eventos",
  description:
    "Confira o calendário de eventos, celebrações, encontros e momentos de oração da Paróquia Santo Afonso Maria de Ligório.",
};

export default function CalendarioPage() {
  return (
    <>
      <Header />
      <main>
        <CalendarHero />
        <CalendarBoard />
        <CalendarFilterHighlights />
        <CalendarCTA />
      </main>
      <Footer />
    </>
  );
}
