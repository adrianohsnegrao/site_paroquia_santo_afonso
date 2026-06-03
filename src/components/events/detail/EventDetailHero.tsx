import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { EventDetail } from "@/data/eventDetails";

/** Hero dinâmico do evento: breadcrumb + banner + info rápida + citação. */
export function EventDetailHero({ event }: { event: EventDetail }) {
  const { hero, info } = event;

  return (
    <section className="relative isolate overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={hero.image}
          alt={`Imagem do evento ${event.title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-brand-cream/25 lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-cream/70 to-transparent lg:hidden"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[24rem] max-w-2xl flex-col justify-center py-12 lg:min-h-[30rem] lg:py-16">
          <Breadcrumb
            className="mb-6"
            items={[
              { label: "Início", href: "/" },
              { label: "Eventos", href: "/eventos" },
              { label: event.title },
            ]}
          />

          <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold-dark">
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
            {hero.eyebrow}
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
          </span>

          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-brand-green-dark sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-green-dark/80">
            {hero.description}
          </p>

          {/* Informações rápidas */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-brand-green-dark">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {info.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {info.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {info.location}
            </span>
          </div>

          <figure className="mt-6 border-l-2 border-brand-gold pl-4">
            <blockquote className="font-serif text-lg italic text-brand-green-dark">
              “{hero.quote}”
            </blockquote>
            <figcaption className="mt-1 text-sm font-medium text-brand-gold-dark">
              — {hero.quoteReference}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
