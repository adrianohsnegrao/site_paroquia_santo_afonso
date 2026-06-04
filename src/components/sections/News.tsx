import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { news } from "@/data/news";

/** Seção "Notícias e Comunicados" com três cartões. */
export function News() {
  return (
    <section id="noticias" className="bg-brand-cream-light pb-14 pt-4 lg:pb-16 lg:pt-6">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Fique por dentro"
            title="Notícias e Comunicados"
            description="Acompanhe as novidades, avisos e comunicados da nossa comunidade paroquial."
          />
          <Button href="/noticias" variant="outline" size="md" className="hidden shrink-0 sm:inline-flex">
            Ver todas as notícias
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <ul className="mt-10 grid gap-7 md:grid-cols-3">
          {news.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                <div className="relative">
                  <MediaPlaceholder
                    label="Foto da notícia"
                    icon={Newspaper}
                    className="aspect-[16/9] w-full"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold-dark">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {item.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-brand-green-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                  >
                    Leia mais
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/noticias" variant="outline" size="md">
            Ver todas as notícias
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
