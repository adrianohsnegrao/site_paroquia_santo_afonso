import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/iconMap";
import { contactPageData } from "@/data/contact";

const { helpCards } = contactPageData;

/** Seção "Como podemos ajudar?" com 6 cards. */
export function HelpCards() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Atendimento"
          title="Como podemos ajudar?"
          align="center"
          className="mx-auto"
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpCards.map((card) => {
            const Icon = getIcon(card.icon);
            return (
              <li key={card.title}>
                <div className="flex h-full flex-col rounded-lg border border-brand-green/10 bg-brand-cream-light p-6">
                  <Icon className="h-8 w-8 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-3 font-serif text-xl font-bold text-brand-green-dark">
                    {card.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {card.description}
                  </p>
                  <a
                    href={card.linkHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                  >
                    {card.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
