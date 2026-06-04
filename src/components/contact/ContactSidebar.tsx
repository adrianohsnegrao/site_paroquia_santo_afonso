import { MapPin, Clock, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/iconMap";
import { contactPageData } from "@/data/contact";

const { sidebar } = contactPageData;

/** Coluna lateral do formulário: endereço, horários, sacramentos e redes. */
export function ContactSidebar() {
  return (
    <div className="space-y-5">
      {/* Endereço */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6">
        <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-brand-green-dark">
          <MapPin className="h-5 w-5 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
          {sidebar.address.title}
        </h3>
        <address className="mt-2 space-y-0.5 text-sm not-italic text-brand-green-dark/75">
          {sidebar.address.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
        <a
          href={sidebar.address.buttonHref}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
        >
          {sidebar.address.buttonLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      {/* Horário da Secretaria */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6">
        <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-brand-green-dark">
          <Clock className="h-5 w-5 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
          {sidebar.officeHours.title}
        </h3>
        <div className="mt-2 space-y-0.5 text-sm text-brand-green-dark/75">
          {sidebar.officeHours.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* Sacramentos e Pastorais */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6">
        <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-brand-green-dark">
          <HelpCircle className="h-5 w-5 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
          {sidebar.sacraments.title}
        </h3>
        <p className="mt-2 text-sm text-brand-green-dark/75">{sidebar.sacraments.description}</p>
        <a
          href={sidebar.sacraments.linkHref}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
        >
          {sidebar.sacraments.linkLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      {/* Redes Sociais */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6">
        <h3 className="font-serif text-lg font-bold text-brand-green-dark">
          {sidebar.social.title}
        </h3>
        <p className="mt-1 text-sm text-brand-green-dark/75">{sidebar.social.description}</p>
        <div className="mt-3 flex gap-3">
          {sidebar.social.links.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-green/15 text-brand-green-dark transition-colors hover:border-brand-gold/50 hover:text-brand-gold-dark"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
