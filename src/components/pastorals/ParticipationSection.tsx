import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pastoralsPageData } from "@/data/pastoralsPage";

const { participation } = pastoralsPageData;

/** Seção "Como participar?": imagem à esquerda, etapas + CTA à direita. */
export function ParticipationSection() {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Imagem */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
            <Image
              src={participation.image}
              alt={participation.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold-dark">
              <span className="h-px w-6 bg-current" aria-hidden />
              {participation.eyebrow}
            </span>
            <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
              {participation.title}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-brand-green-dark/80">
              {participation.description}
            </p>

            <ul className="mt-6 space-y-5">
              {participation.steps.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <Icon
                    className="mt-0.5 h-7 w-7 shrink-0 text-brand-gold-dark"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-green-dark">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-green-dark/75">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA final */}
            <div className="mt-8 flex flex-col gap-4 rounded-lg border border-brand-green/10 bg-brand-cream p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-brand-green-dark">
                {participation.ctaText}
              </p>
              <Button
                href={participation.buttonHref}
                variant="secondary"
                size="lg"
                className="shrink-0"
              >
                {participation.buttonLabel}
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
