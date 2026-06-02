import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { aboutPageData } from "@/data/about";

const { patronSaint } = aboutPageData;

/** Bloco final "Nosso Padroeiro": imagem à esquerda, texto à direita. */
export function PatronSaintSection() {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-md bg-white shadow-card ring-1 ring-brand-green/10">
          <div className="grid md:grid-cols-[0.8fr_1fr]">
            {/* Imagem do padroeiro */}
            <div className="relative min-h-[20rem] bg-brand-cream md:min-h-full">
              <Image
                src={patronSaint.image}
                alt={patronSaint.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>

            {/* Texto */}
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold-dark">
                <span className="h-px w-6 bg-current" aria-hidden />
                {patronSaint.eyebrow}
              </span>
              <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                {patronSaint.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-green-dark/75">
                {patronSaint.text}
              </p>

              <figure className="mt-6 border-l-2 border-brand-gold pl-4">
                <blockquote className="font-serif text-xl italic text-brand-green-dark">
                  “{patronSaint.quote}”
                </blockquote>
                <figcaption className="mt-1 text-sm font-medium text-brand-gold-dark">
                  — {patronSaint.author}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
