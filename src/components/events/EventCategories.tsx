import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/iconMap";
import { eventsPageData } from "@/data/eventsPage";

const { categoriesHeading, categories } = eventsPageData;

/** Seção "Categorias de Eventos": grade de 6 cards (ícones dourados sem fundo). */
export function EventCategories() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={categoriesHeading.eyebrow}
          title={categoriesHeading.title}
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <li
                key={category.title}
                className="flex flex-col items-center gap-3 rounded-lg border border-brand-green/10 bg-brand-cream-light p-6 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
              >
                <Icon
                  className="h-8 w-8 shrink-0 text-brand-gold-dark"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-green-dark">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-green-dark/70">
                    {category.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
