import { Container } from "@/components/ui/Container";
import { aboutPageData } from "@/data/about";

const { pillars } = aboutPageData;

/** Faixa com Missão, Visão e Propósito em três colunas (ícones sem fundo). */
export function MissionVisionSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brand-green/15">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="px-0 text-center sm:px-8">
              <Icon
                className="mx-auto h-10 w-10 text-brand-gold-dark"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-green-dark">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-green-dark/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
