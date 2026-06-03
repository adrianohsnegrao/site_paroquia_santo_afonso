import { HandHeart, ArrowRight, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { EventDetail } from "@/data/eventDetails";

/** CTA principal do evento (botão primário + link secundário). */
export function EventDetailCTA({ cta }: { cta: EventDetail["cta"] }) {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-lg border border-brand-green/10 bg-brand-cream-light p-8 text-center shadow-card md:flex-row md:justify-between md:gap-8 md:p-10 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <HandHeart className="h-10 w-10 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-green-dark sm:text-3xl">
                {cta.title}
              </h2>
              <p className="mt-2 text-brand-green-dark/75">{cta.description}</p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3">
            <Button href={cta.buttonHref} variant="secondary" size="lg">
              {cta.buttonLabel}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
            <a
              href={cta.secondaryHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
            >
              <Share2 className="h-4 w-4" aria-hidden />
              {cta.secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
