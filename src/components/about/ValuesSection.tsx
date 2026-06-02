import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPageData } from "@/data/about";

const { values, valuesHeading } = aboutPageData;

/** Seção "Nossos Valores": 5 itens em linha no desktop (ícones sem fundo). */
export function ValuesSection() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={valuesHeading.eyebrow}
          title={valuesHeading.title}
          align="center"
          className="mx-auto"
        />

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, description }) => (
            <li key={title} className="text-center">
              <Icon
                className="mx-auto h-10 w-10 text-brand-green"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-serif text-xl font-bold text-brand-green-dark">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-green-dark/70">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
