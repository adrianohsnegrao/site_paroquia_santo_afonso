import { ArrowRight, Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { gallery } from "@/data/gallery";

/** Seção "Galeria da Comunidade" — faixa horizontal de 5 fotos em uma linha. */
export function Gallery() {
  return (
    <section id="galeria" className="bg-brand-cream py-14 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Momentos"
          title="Galeria da Comunidade"
          description="Reviva os momentos marcantes da nossa vida em comunidade."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((item) => (
            <li key={item.caption}>
              <figure className="group relative overflow-hidden rounded-md shadow-card">
                <MediaPlaceholder
                  label={item.caption}
                  icon={Camera}
                  className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-green-deep/80 to-transparent p-2.5 text-xs font-medium text-white">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Button href="#" variant="secondary" size="md">
            Ver mais fotos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
