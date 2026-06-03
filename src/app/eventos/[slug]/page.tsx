import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventDetailHero } from "@/components/events/detail/EventDetailHero";
import { EventAbout } from "@/components/events/detail/EventAbout";
import { EventSchedule } from "@/components/events/detail/EventSchedule";
import { EventDetailCTA } from "@/components/events/detail/EventDetailCTA";
import { EventOrganization } from "@/components/events/detail/EventOrganization";
import { eventDetails, getEventBySlug } from "@/data/eventDetails";

interface PageProps {
  params: { slug: string };
}

// Gera as rotas estáticas para cada evento em tempo de build.
export function generateStaticParams() {
  return eventDetails.map((event) => ({ slug: event.slug }));
}

// Metadata dinâmica por evento (o template do layout acrescenta o nome da paróquia).
export function generateMetadata({ params }: PageProps): Metadata {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return { title: "Evento não encontrado" };
  }

  return {
    title: event.title,
    description: event.shortDescription,
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const event = getEventBySlug(params.slug);

  // Slug inexistente → página 404 do projeto.
  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <EventDetailHero event={event} />
        <EventAbout event={event} />
        <EventSchedule schedule={event.schedule} eventTitle={event.title} />
        <EventDetailCTA cta={event.cta} />
        <EventOrganization
          organization={event.organization}
          contact={event.contact}
          eventTitle={event.title}
        />
      </main>
      <Footer />
    </>
  );
}
