import Image from "next/image";
import { CalendarDays, Folder, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { NewsDetail } from "@/data/newsDetails";

/** Hero dinâmico da notícia: breadcrumb + banner + metadados rápidos. */
export function NewsDetailHero({ news }: { news: NewsDetail }) {
  const { hero } = news;

  return (
    <section className="relative isolate overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={hero.image}
          alt={`Imagem da notícia ${news.title}`}
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
              { label: "Notícias", href: "/noticias" },
              { label: news.title },
            ]}
          />

          <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold-dark">
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
            {hero.eyebrow}
            <span className="h-px w-7 bg-brand-gold" aria-hidden />
          </span>

          <h1 className="font-serif text-3xl font-bold leading-[1.1] text-brand-green-dark sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-green-dark/80">
            {hero.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-brand-green-dark">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {news.formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Folder className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {news.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4 text-brand-gold-dark" aria-hidden />
              {news.author}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
