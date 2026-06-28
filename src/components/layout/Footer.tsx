import { Logo } from "./Logo";
import { site } from "@/data/site";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-green-deep text-white/80 border-t-4 border-brand-gold">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Esquerda — marca e redes */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Logo invert size={56} />
            <p className="text-sm leading-relaxed text-brand-cream-light/80 max-w-xs">
              {site.description}
            </p>
            <div className="flex gap-4">
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-green-dark rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-green-deep transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-green-dark rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-green-deep transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {site.social.youtube && (
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-green-dark rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-green-deep transition-colors">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              )}
            </div>
          </div>

          {/* Centro — Contato e Endereço */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-brand-gold font-serif text-lg font-semibold uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <span>
                  {site.contact.addressLines.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <a href={site.contact.whatsapp} className="hover:text-brand-gold-light transition-colors">{site.contact.phone}</a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand-gold-light transition-colors">{site.contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Direita — citação institucional */}
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-4">
            <figure className="max-w-xs">
              <blockquote className="font-serif text-xl italic text-brand-gold-light">
                “{site.footerQuote.text}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-brand-cream/80">
                — {site.footerQuote.author}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-12 pt-8 border-t border-brand-green-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream-light/50">
          <p>© {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.</p>
          <p>Desenvolvido por {site.developer}</p>
        </div>
      </div>
    </footer>
  );
}
