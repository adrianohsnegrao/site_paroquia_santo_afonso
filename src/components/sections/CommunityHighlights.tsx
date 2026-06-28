import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Calendar, AlertCircle, ArrowRight, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export async function CommunityHighlights() {
  const supabase = await createClient();

  // Fetch concurrently
  const [eventosRes, noticiasRes, avisosRes] = await Promise.all([
    supabase
      .from('eventos')
      .select('*')
      .eq('destaque_home', true)
      .eq('status', 'ativo')
      .order('data_inicio', { ascending: true })
      .limit(3),
    supabase
      .from('noticias')
      .select('*')
      .eq('destaque_home', true)
      .eq('status', 'publicado')
      .order('created_at', { ascending: false })
      .limit(3),
    supabase
      .from('avisos')
      .select('*')
      .eq('destaque_home', true)
      .eq('status', 'publicado')
      .order('created_at', { ascending: false })
      .limit(3)
  ]);

  const eventos = eventosRes.data || [];
  const noticias = noticiasRes.data || [];
  const avisos = avisosRes.data || [];

  if (eventos.length === 0 && noticias.length === 0 && avisos.length === 0) {
    return null; // Don't show the section if there are no highlights
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <span className="text-sm font-semibold uppercase tracking-wider">Mantenha-se Informado</span>
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green-dark">
            Destaques da Comunidade
          </h2>
          <p className="mt-4 text-brand-green-dark/70">
            Acompanhe as principais novidades, eventos e comunicados da nossa paróquia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Avisos */}
          {avisos.map((aviso) => (
             <div key={aviso.id} className={`rounded-xl border p-6 flex flex-col ${aviso.tipo === 'urgente' ? 'bg-red-50 border-red-100' : aviso.tipo === 'importante' ? 'bg-amber-50 border-amber-100' : 'bg-brand-cream-light border-brand-green/10'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className={`w-5 h-5 ${aviso.tipo === 'urgente' ? 'text-red-500' : aviso.tipo === 'importante' ? 'text-amber-500' : 'text-brand-green'}`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-green-dark/70">Comunicado</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{aviso.titulo}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{aviso.mensagem}</p>
             </div>
          ))}

          {/* Eventos */}
          {eventos.map((evento) => (
            <div key={evento.id} className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
               {evento.imagem ? (
                 <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={evento.imagem} alt={evento.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
               ) : (
                 <div className="relative h-48 w-full bg-brand-cream-light flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-brand-green/20" />
                 </div>
               )}
               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-brand-gold-dark text-xs font-semibold uppercase tracking-wider mb-3">
                   <Calendar className="w-4 h-4" />
                   <span>{new Date(evento.data_inicio).toLocaleDateString('pt-BR')}</span>
                 </div>
                 <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{evento.titulo}</h3>
                 <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{evento.descricao_curta}</p>
               </div>
            </div>
          ))}

          {/* Noticias */}
          {noticias.map((noticia) => (
            <div key={noticia.id} className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
               {noticia.imagem_capa ? (
                 <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
               ) : (
                 <div className="relative h-48 w-full bg-brand-cream-light flex items-center justify-center">
                    <FileText className="w-10 h-10 text-brand-green/20" />
                 </div>
               )}
               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-brand-green text-xs font-semibold uppercase tracking-wider mb-3">
                   <FileText className="w-4 h-4" />
                   <span>{new Date(noticia.created_at).toLocaleDateString('pt-BR')}</span>
                 </div>
                 <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{noticia.titulo}</h3>
                 <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{noticia.resumo}</p>
                 <Link href={`/noticias/${noticia.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-gold-dark transition-colors mt-auto">
                   Ler mais <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
