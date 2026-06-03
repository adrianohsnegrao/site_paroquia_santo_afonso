import Image from "next/image";
import { Church, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { pastoralsPageData } from "@/data/pastoralsPage";

const { gridHeading, pastorals } = pastoralsPageData;

/** Seção "Nossas Pastorais e Movimentos": grade de 8 cards com imagem. */
export function PastoralsGrid() {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <Church className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
            {gridHeading.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-green-dark/70">
            {gridHeading.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastorals.map(({ icon: Icon, title, slug, description, image, imageAlt }) => (
            <li key={slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Icon className="h-7 w-7 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-2 font-serif text-xl font-bold text-brand-green-dark">
                    {title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {description}
                  </p>
                  <a
                    href={`/pastorais/${slug}`}
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
      </Container>
    </section>
  );
}
