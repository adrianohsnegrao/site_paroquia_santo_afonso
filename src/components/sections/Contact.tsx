import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { site } from "@/data/site";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
  { icon: MessageCircle, href: site.social.whatsapp, label: "WhatsApp" },
];

/** Seção de contato: 3 blocos empilhados à esquerda + mapa à direita. */
export function Contact() {
  return (
    <section id="contato" className="bg-brand-green-dark py-14 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Visite-nos"
          title="Contato e Localização"
          description="Estamos de portas abertas para acolher você. Venha nos visitar ou entre em contato."
          invert
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Coluna esquerda — 3 blocos empilhados */}
          <div className="flex flex-col gap-5">
            {/* Onde Estamos */}
            <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-semibold text-white">
                <MapPin className="h-5 w-5 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                Onde Estamos
              </h3>
              <address className="mt-3 space-y-1 text-sm not-italic text-white/80">
                {site.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <Button href={site.contact.mapUrl} variant="primary" size="sm" className="mt-4">
                <MapPin className="h-4 w-4" aria-hidden />
                Ver no mapa
              </Button>
            </div>

            {/* Fale Conosco */}
            <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-semibold text-white">
                <Phone className="h-5 w-5 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                Fale Conosco
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                  <a href={`tel:${site.contact.phone}`} className="hover:text-brand-gold-light">
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                  <a href={`mailto:${site.contact.email}`} className="break-all hover:text-brand-gold-light">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                  {site.contact.officeHours}
                </li>
              </ul>
              <Button
                href={site.social.whatsapp}
                variant="outline"
                size="sm"
                className="mt-4 border-white text-white hover:bg-white hover:text-brand-green-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Fale conosco
              </Button>
            </div>

            {/* Acompanhe nossas redes */}
            <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-serif text-2xl font-semibold text-white">
                Acompanhe nossas redes
              </h3>
              <div className="mt-4 flex flex-wrap gap-5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/80 transition-colors hover:text-brand-gold-light"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna direita — mapa em altura cheia */}
          <MediaPlaceholder
            label="Mapa da localização"
            icon={MapPin}
            className="min-h-[18rem] w-full rounded-lg ring-1 ring-white/10 lg:min-h-full"
          />
        </div>
      </Container>
    </section>
  );
}
