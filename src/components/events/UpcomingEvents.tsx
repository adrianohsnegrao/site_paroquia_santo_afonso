import Image from "next/image";
import { CalendarDays, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { eventsPageData } from "@/data/eventsPage";

const { upcomingHeading, featuredEvents } = eventsPageData;

/** Seção "Próximos Eventos": título central + grade de 4 cards. */
export function UpcomingEvents() {
  return (
    <section id="proximos-eventos" className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <Sparkles className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
            {upcomingHeading.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-green-dark/70">
            {upcomingHeading.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredEvents.map((event) => (
            <li key={event.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                  {/* Badge da data */}
                  <div className="absolute left-3 top-3 flex flex-col items-center rounded-md bg-brand-green px-3 py-1.5 text-white shadow-card">
                    <span className="text-xl font-bold leading-none">{event.day}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide">
                      {event.month}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-terracotta-dark">
                    {event.category}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold text-brand-green-dark">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {event.description}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs text-brand-green-dark/70">
                    <li className="flex items-center gap-2">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                      {event.dateLabel}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                      {event.time}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                      {event.location}
                    </li>
                  </ul>

                  <a
                    href={`/eventos/${event.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={upcomingHeading.viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
          >
            {upcomingHeading.viewAllLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
