import { Cross } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Seção "Sobre a Pastoral": título central + descrição. */
export function PastoralAbout({ description }: { description: string }) {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Cross
            className="mx-auto h-7 w-7 text-brand-gold-dark"
            strokeWidth={1.5}
            aria-hidden
          />
          <h2 className="mt-3 font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
            Sobre a Pastoral
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-green-dark/75">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
