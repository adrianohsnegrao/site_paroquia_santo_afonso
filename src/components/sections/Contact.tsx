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
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { site } from "@/data/site";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
  { icon: MessageCircle, href: site.social.whatsapp, label: "WhatsApp" },
];

/** Seção de contato (compacta): infos à esquerda + mapa à direita. */
export function Contact() {
  return (
    <section id="contato" className="bg-brand-green-dark py-12 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Informações */}
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold-light">
              <span className="h-px w-6 bg-current" aria-hidden />
              Visite-nos
            </span>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Contato e Localização
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Estamos de portas abertas para acolher você.
            </p>

            {/* Infos condensadas em duas colunas */}
            <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-gold-light">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                  Onde Estamos
                </h3>
                <address className="mt-2 space-y-0.5 text-sm not-italic text-white/80">
                  {site.contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-gold-light">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                  Fale Conosco
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  <li>
                    <a href={`tel:${site.contact.phone}`} className="hover:text-brand-gold-light">
                      {site.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="break-all hover:text-brand-gold-light">
                      {site.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-1.5 text-white/70">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-gold-light" strokeWidth={1.5} aria-hidden />
                    {site.contact.officeHours}
                  </li>
                </ul>

                {/* Redes sociais — alinhadas ao início do bloco "Fale Conosco" */}
                <div className="mt-3 flex items-center gap-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/80 transition-colors hover:text-brand-gold-light"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões + redes */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={site.contact.mapUrl} variant="primary" size="sm">
                <MapPin className="h-4 w-4" aria-hidden />
                Ver no mapa
              </Button>
              <Button
                href={site.social.whatsapp}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-brand-green-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Fale conosco
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <MediaPlaceholder
            label="Mapa da localização"
            icon={MapPin}
            className="h-full min-h-[14rem] w-full rounded-lg ring-1 ring-white/10 lg:min-h-[20rem]"
          />
        </div>
      </Container>
    </section>
  );
}
