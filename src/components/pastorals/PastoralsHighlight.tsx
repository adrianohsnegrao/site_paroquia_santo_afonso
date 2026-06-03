import { HandHeart, Church } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { pastoralsPageData } from "@/data/pastoralsPage";

const { highlight } = pastoralsPageData;

/** Bloco de destaque: "Cada serviço é um chamado de Deus." */
export function PastoralsHighlight() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-lg border border-brand-green/10 bg-brand-cream-light p-8 text-center shadow-card md:flex-row md:gap-8 md:p-10 md:text-left">
          <HandHeart
            className="h-12 w-12 shrink-0 text-brand-gold-dark"
            strokeWidth={1.25}
            aria-hidden
          />
          <div className="flex-1">
            <h2 className="font-serif text-2xl font-bold text-brand-green-dark sm:text-3xl">
              {highlight.title}
            </h2>
            <p className="mt-2 leading-relaxed text-brand-green-dark/75">
              {highlight.description}
            </p>
          </div>
          <Church
            className="hidden h-12 w-12 shrink-0 text-brand-green/40 lg:block"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
