import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventsHero } from "@/components/events/EventsHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { EventsCalendar } from "@/components/events/EventsCalendar";
import { EventCategories } from "@/components/events/EventCategories";
import { EventsCTA } from "@/components/events/EventsCTA";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Confira os próximos eventos, celebrações, encontros e momentos de oração da Paróquia Santo Afonso Maria de Ligório.",
};

export default function EventosPage() {
  return (
    <>
      <Header />
      <main>
        <EventsHero />
        <UpcomingEvents />
        <EventsCalendar />
        <EventCategories />
        <EventsCTA />
      </main>
      <Footer />
    </>
  );
}
