import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { schedulesPageData } from "@/data/schedules";

const { hero } = schedulesPageData;

/** Hero interno da página Horários: banner full-width com o interior da igreja. */
export function SchedulesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-cream">
      {/* Imagem de fundo (interior da igreja) */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Degradê creme à esquerda para leitura do texto */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-brand-cream/25 lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-cream/70 to-transparent lg:hidden"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[22rem] max-w-xl flex-col justify-center py-14 lg:min-h-[28rem] lg:py-20">
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
        </div>
      </Container>
    </section>
  );
}
