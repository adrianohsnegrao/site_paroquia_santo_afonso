"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Facebook, Mail, Link2, Check } from "lucide-react";

const iconClass =
  "flex h-9 w-9 items-center justify-center rounded-md border border-brand-green/15 text-brand-green-dark transition-colors hover:border-brand-gold/50 hover:text-brand-gold-dark";

/** Botões de compartilhamento (com "copiar link" via clipboard, SSR-safe). */
export function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const enc = encodeURIComponent;
  const whatsapp = `https://wa.me/?text=${enc(`${title} ${url}`)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`;
  const email = `mailto:?subject=${enc(title)}&body=${enc(url)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponível — ignora silenciosamente */
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Compartilhe
      </h3>
      <div className="mt-3 flex gap-2">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp" className={iconClass}>
          <MessageCircle className="h-4 w-4" aria-hidden />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook" className={iconClass}>
          <Facebook className="h-4 w-4" aria-hidden />
        </a>
        <a href={email} aria-label="Compartilhar por e-mail" className={iconClass}>
          <Mail className="h-4 w-4" aria-hidden />
        </a>
        <button type="button" onClick={copyLink} aria-label="Copiar link" className={iconClass}>
          {copied ? <Check className="h-4 w-4 text-brand-green" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
        </button>
      </div>
      {copied && <p className="mt-2 text-xs text-brand-green">Link copiado!</p>}
    </div>
  );
}
