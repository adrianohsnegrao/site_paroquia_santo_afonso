import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FileText, AlertCircle, ArrowRight, Calendar } from 'lucide-react';

// Incremental Static Regeneration (ISR) a cada 60 segundos
export const revalidate = 60;

export default async function NoticiasPage() {
  const supabase = await createClient();

  const [noticiasRes, avisosRes] = await Promise.all([
    supabase
      .from('noticias')
      .select('*')
      .eq('status', 'publicado')
      .order('created_at', { ascending: false }),
    supabase
      .from('avisos')
      .select('*')
      .eq('status', 'publicado')
      .order('created_at', { ascending: false })
      .limit(6)
  ]);

  const noticias = noticiasRes.data || [];
  const avisos = avisosRes.data || [];

  return (
    <div className="py-12 lg:py-20 bg-brand-cream-light min-h-screen">
      <Container>
        <div className="mb-10 text-center md:text-left">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-green-dark">
            Notícias e Avisos
          </h1>
          <p className="mt-3 text-lg text-brand-green-dark/70 max-w-2xl">
            Fique por dentro de tudo o que acontece em nossa paróquia. Acompanhe as últimas notícias, coberturas de eventos e comunicados importantes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Coluna Principal: Notícias */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="text-brand-green" />
              Últimas Notícias
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {noticias.length > 0 ? (
                noticias.map((noticia) => (
                  <div key={noticia.id} className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                    {noticia.imagem_capa ? (
                      <Link href={`/noticias/${noticia.slug}`} className="relative h-56 w-full overflow-hidden bg-gray-100 block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </Link>
                    ) : (
                      <Link href={`/noticias/${noticia.slug}`} className="relative h-56 w-full bg-brand-cream flex items-center justify-center block">
                        <FileText className="w-12 h-12 text-brand-green/20" />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-brand-gold-dark text-xs font-semibold uppercase tracking-wider mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(noticia.created_at).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                        <Link href={`/noticias/${noticia.slug}`}>{noticia.titulo}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{noticia.resumo}</p>
                      <Link href={`/noticias/${noticia.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-gold-dark transition-colors mt-auto">
                        Ler matéria completa <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">Nenhuma notícia publicada no momento.</p>
              )}
            </div>
          </div>

          {/* Coluna Lateral: Avisos */}
          <aside className="lg:w-80 xl:w-96">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <AlertCircle className="text-brand-gold-dark" />
              Mural de Avisos
            </h2>
            
            <div className="flex flex-col gap-4">
              {avisos.length > 0 ? (
                avisos.map((aviso) => (
                  <div key={aviso.id} className={`rounded-xl border p-5 flex flex-col ${aviso.tipo === 'urgente' ? 'bg-red-50 border-red-100' : aviso.tipo === 'importante' ? 'bg-amber-50 border-amber-100' : 'bg-white border-brand-green/10 shadow-sm'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className={`w-4 h-4 ${aviso.tipo === 'urgente' ? 'text-red-500' : aviso.tipo === 'importante' ? 'text-amber-500' : 'text-brand-green'}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-green-dark/70">
                        {aviso.tipo === 'urgente' ? 'Urgente' : aviso.tipo === 'importante' ? 'Importante' : 'Comunicado'}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{aviso.titulo}</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{aviso.mensagem}</p>
                    <div className="mt-3 text-xs text-gray-400 font-medium">
                      Publicado em {new Date(aviso.created_at).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">Nenhum aviso no mural.</p>
              )}
            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
}
