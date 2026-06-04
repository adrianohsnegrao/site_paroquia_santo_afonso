import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getOtherNews } from "@/data/newsDetails";

/** Seção full-width "Outras notícias" com 3 cards. */
export function OtherNews({ slug }: { slug: string }) {
  const items = getOtherNews(slug);

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Continue lendo"
          title="Outras notícias"
          align="center"
          className="mx-auto"
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-brand-green px-2.5 py-1 text-xs font-semibold text-white shadow-card">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold-dark">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {item.formattedDate}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-brand-green-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {item.excerpt}
                  </p>
                  <a
                    href={`/noticias/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
