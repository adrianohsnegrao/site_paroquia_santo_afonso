import Image from "next/image";
import { CalendarDays, Tag, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { newsPageData } from "@/data/newsPage";

const { featured } = newsPageData;

/** Card de notícia em destaque: imagem à esquerda, conteúdo à direita. */
export function FeaturedNews() {
  return (
    <section className="bg-brand-cream-light pt-16 lg:pt-20">
      <Container>
        <article className="grid overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card md:grid-cols-2">
          <div className="relative min-h-[15rem] md:min-h-full">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <span className="absolute left-4 top-4 rounded-md bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-green-deep shadow-card">
              {featured.badge}
            </span>
          </div>

          <div className="flex flex-col justify-center gap-3 p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-brand-gold-dark">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                {featured.formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5" aria-hidden />
                {featured.category}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold leading-tight text-brand-green-dark sm:text-3xl">
              {featured.title}
            </h2>
            <p className="text-brand-green-dark/75">{featured.excerpt}</p>

            <div className="mt-2">
              <Button href={`/noticias/${featured.slug}`} variant="secondary" size="md">
                Ler notícia
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
