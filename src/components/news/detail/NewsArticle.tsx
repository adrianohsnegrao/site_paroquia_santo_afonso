import Image from "next/image";
import { Quote } from "lucide-react";
import type { NewsDetail } from "@/data/newsDetails";

/** Conteúdo principal da notícia: imagem, parágrafos, citação, imagem 2 e galeria. */
export function NewsArticle({ news }: { news: NewsDetail }) {
  const { content, gallery } = news;
  const before = content.paragraphs.slice(0, 2);
  const after = content.paragraphs.slice(2);

  return (
    <article>
      {/* Imagem principal */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
        <Image
          src={content.mainImage}
          alt={`Registro principal da notícia ${news.title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover object-center"
        />
      </div>

      {/* Primeiros parágrafos */}
      <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-green-dark/80">
        {before.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {/* Citação */}
      {content.quote && (
        <figure className="my-8 rounded-md border-l-4 border-brand-gold bg-brand-cream p-6">
          <Quote className="h-6 w-6 text-brand-gold-dark" aria-hidden />
          <blockquote className="mt-2 font-serif text-xl italic text-brand-green-dark">
            {content.quote.text}
          </blockquote>
          <figcaption className="mt-2 text-sm font-medium text-brand-gold-dark">
            — {content.quote.author}
          </figcaption>
        </figure>
      )}

      {/* Demais parágrafos */}
      {after.length > 0 && (
        <div className="space-y-5 text-base leading-relaxed text-brand-green-dark/80">
          {after.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {/* Imagem secundária */}
      {content.secondaryImage && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
          <Image
            src={content.secondaryImage}
            alt={`Momento complementar da notícia ${news.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Galeria */}
      {gallery && gallery.length > 0 && (
        <div className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-brand-green-dark">
            Galeria do evento
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((item) => (
              <li key={item.image}>
                <figure className="relative aspect-square w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 22vw"
                    className="object-cover object-center"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
