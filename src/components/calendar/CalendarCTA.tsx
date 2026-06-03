import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { calendarPageData } from "@/data/calendarPage";

const { cta } = calendarPageData;

/** CTA final: imagem à esquerda, texto e botão à direita. */
export function CalendarCTA() {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-lg border border-brand-green/10 bg-brand-cream shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[16rem] md:min-h-full">
              <Image
                src={cta.image}
                alt={cta.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 text-center sm:p-10 md:text-left lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                {cta.title}
              </h2>
              <p className="text-brand-green-dark/75">{cta.description}</p>
              <div className="mt-2 flex justify-center md:justify-start">
                <Button href={cta.buttonHref} variant="secondary" size="lg">
                  {cta.buttonLabel}
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
