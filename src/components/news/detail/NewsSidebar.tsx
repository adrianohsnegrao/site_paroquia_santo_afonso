import Image from "next/image";
import { Folder, CalendarDays, User, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ShareButtons } from "./ShareButtons";
import { getRelatedNews, type NewsDetail } from "@/data/newsDetails";

/** Sidebar: informações + compartilhe + notícias relacionadas + CTA de avisos. */
export function NewsSidebar({ news }: { news: NewsDetail }) {
  const related = getRelatedNews(news.slug);

  const infoRows = [
    { icon: Folder, label: "Categoria", value: news.info.category },
    { icon: CalendarDays, label: "Publicado em", value: news.info.publishedAt },
    { icon: User, label: "Por", value: news.info.author },
  ];

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Informações + Compartilhe */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6 shadow-card">
        <h2 className="font-serif text-xl font-bold text-brand-green-dark">Informações</h2>
        <ul className="mt-3 space-y-3 border-t border-brand-green/10 pt-4 text-sm">
          {infoRows.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                  {label}
                </p>
                <p className="text-brand-green-dark/80">{value}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-brand-green/10 pt-4">
          <ShareButtons title={news.title} />
        </div>
      </div>

      {/* Notícias relacionadas */}
      <div className="rounded-lg border border-brand-green/10 bg-white p-6 shadow-card">
        <h2 className="font-serif text-xl font-bold text-brand-green-dark">
          Notícias relacionadas
        </h2>
        <ul className="mt-4 space-y-4">
          {related.map((item) => (
            <li key={item.slug}>
              <a href={`/noticias/${item.slug}`} className="group flex gap-3">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-brand-green/10">
                  <Image src={item.image} alt="" fill sizes="80px" className="object-cover object-center" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-brand-gold-dark">
                    {item.formattedDate} · {item.category}
                  </p>
                  <h3 className="font-serif text-sm font-bold leading-snug text-brand-green-dark transition-colors group-hover:text-brand-gold-dark">
                    {item.title}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA receber avisos */}
      <div className="rounded-lg border border-brand-green/10 bg-brand-cream p-6">
        <Mail className="h-8 w-8 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
        <h3 className="mt-3 font-serif text-lg font-bold text-brand-green-dark">
          Receba as novidades da nossa paróquia
        </h3>
        <p className="mt-1 text-sm text-brand-green-dark/75">
          Avisos, notícias e eventos diretamente no seu e-mail.
        </p>
        <Button href="/#contato" variant="secondary" size="md" className="mt-4 w-full">
          Receber avisos
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
