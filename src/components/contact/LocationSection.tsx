import { Check, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contactPageData } from "@/data/contact";

const { location } = contactPageData;

/** Seção "Visite nossa Paróquia": informações à esquerda, mapa à direita. */
export function LocationSection() {
  return (
    <section id="localizacao" className="bg-brand-cream py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Informações */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
              {location.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-green-dark/75">
              {location.description}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {location.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-green-dark/80">
                  <Check className="h-4 w-4 shrink-0 text-brand-gold-dark" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href={location.buttonHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                <ExternalLink className="h-4 w-4" aria-hidden />
                {location.buttonLabel}
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative overflow-hidden rounded-lg shadow-soft ring-1 ring-brand-green/10">
            <iframe
              title="Mapa da localização da Paróquia Santo Afonso Maria de Ligório"
              src={location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[22rem] w-full border-0"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-md border border-brand-green/10 bg-white/95 p-4 shadow-card backdrop-blur sm:right-auto sm:max-w-xs">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                <span>
                  <span className="block font-serif text-base font-bold text-brand-green-dark">
                    {location.mapTitle}
                  </span>
                  <span className="block text-xs text-brand-green-dark/70">{location.mapAddress}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
