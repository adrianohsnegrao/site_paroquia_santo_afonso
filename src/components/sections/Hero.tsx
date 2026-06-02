import Image from "next/image";
import { CalendarHeart, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/** Hero em banner full-width: imagem da igreja ao fundo, texto sobre degradê creme. */
export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-cream">
      {/* Imagem de fundo (igreja) */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={site.heroImage.src}
          alt={site.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right]"
        />
      </div>

      {/* Degradê creme da esquerda para a direita (leitura do texto) */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-brand-cream/25 lg:to-transparent"
        aria-hidden
      />
      {/* Reforço inferior no mobile */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-cream/70 to-transparent lg:hidden"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[32rem] max-w-xl flex-col justify-center py-16 lg:min-h-[37rem] lg:py-24">
          {/* Eyebrow com traço dos dois lados */}
          <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold-dark">
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
            {site.welcomeLabel}
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
          </span>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-brand-green-dark sm:text-6xl lg:text-7xl">
            {site.fullName}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-green-dark/80">
            {site.heroText}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#horarios" variant="secondary" size="lg">
              <Clock className="h-5 w-5" aria-hidden />
              Participar da Missa
            </Button>
            <Button href="#contato" variant="outline" size="lg">
              Conheça nossa Paróquia
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
          </div>

          <figure className="mt-8 border-l-2 border-brand-gold pl-4">
            <blockquote className="font-serif text-lg italic text-brand-green-dark">
              “{site.heroQuote.text}”
            </blockquote>
            <figcaption className="mt-1 text-sm font-medium text-brand-gold-dark">
              — {site.heroQuote.author}
            </figcaption>
          </figure>
        </div>
      </Container>

      {/* Card flutuante "Próxima Missa" sobre a imagem (desktop) */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 rounded-lg border border-brand-green/10 bg-white/95 p-4 shadow-card backdrop-blur lg:flex">
        <CalendarHeart className="h-7 w-7 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
            Próxima Missa
          </p>
          <p className="text-sm font-bold text-brand-green-dark">Domingo, 19h00</p>
        </div>
      </div>
    </section>
  );
}
