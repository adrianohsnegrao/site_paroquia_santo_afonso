import Image from "next/image";
import { Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { newsPageData } from "@/data/newsPage";

const { hero } = newsPageData;

/** Hero interno da página Notícias: banner full-width. */
export function NewsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-cream">
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

          <div className="mt-7">
            <Button href={hero.buttonHref} variant="secondary" size="lg">
              <Newspaper className="h-5 w-5" aria-hidden />
              {hero.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
