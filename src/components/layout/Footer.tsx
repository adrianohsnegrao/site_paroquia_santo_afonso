import { Logo } from "./Logo";
import { site } from "@/data/site";

/**
 * Rodapé simples e compacto (fiel ao modelo):
 * esquerda = marca · centro = direitos/desenvolvimento · direita = citação.
 */
export function Footer() {
  return (
    <footer className="bg-brand-green-deep text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 text-center sm:px-6 md:flex-row md:justify-between md:gap-6 md:text-left lg:px-8">
        {/* Esquerda — marca */}
        <Logo invert size={48} />

        {/* Centro — direitos e desenvolvimento */}
        <div className="text-xs leading-relaxed text-white/60">
          <p>
            © {new Date().getFullYear()} {site.fullName}.
            <br className="hidden sm:block" /> Todos os direitos reservados.
          </p>
          <p className="mt-1">Desenvolvido por {site.developer}</p>
        </div>

        {/* Direita — citação institucional */}
        <figure className="md:text-right">
          <blockquote className="font-serif text-base italic text-brand-gold-light">
            “{site.footerQuote.text}”
          </blockquote>
          <figcaption className="mt-1 text-xs font-medium text-brand-cream">
            — {site.footerQuote.author}
          </figcaption>
        </figure>
      </div>
    </footer>
  );
}
