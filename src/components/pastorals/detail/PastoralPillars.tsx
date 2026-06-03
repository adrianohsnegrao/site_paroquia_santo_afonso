import { Container } from "@/components/ui/Container";
import { getIcon } from "@/lib/iconMap";
import type { PastoralPillar } from "@/data/pastoralDetails";

/** Pilares/objetivos da pastoral: 4 colunas com separadores sutis (ícones sem fundo). */
export function PastoralPillars({ pillars }: { pillars: PastoralPillar[] }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-brand-green/15">
          {pillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div key={pillar.title} className="text-center lg:px-8">
                <Icon
                  className="mx-auto h-10 w-10 text-brand-gold-dark"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-serif text-2xl font-bold text-brand-green-dark">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-green-dark/75">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
