import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

export const revalidate = 60;

// Gerar os Metadados Dinamicamente (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('noticias')
    .select('titulo, resumo, imagem_capa')
    .eq('slug', params.slug)
    .single();
  
  if (!data) return { title: 'Notícia não encontrada | Paróquia Santo Afonso' };
  
  return {
    title: `${data.titulo} | Paróquia Santo Afonso`,
    description: data.resumo,
    openGraph: {
      title: `${data.titulo} | Paróquia Santo Afonso`,
      description: data.resumo,
      images: data.imagem_capa ? [data.imagem_capa] : [],
    },
  };
}

export default async function NoticiaInternaPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: noticia } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!noticia || noticia.status !== 'publicado') {
    notFound();
  }

  return (
    <article className="bg-brand-cream-light min-h-screen pb-20">
      {/* Banner de Capa (se houver) */}
      {noticia.imagem_capa ? (
        <div className="relative w-full h-[300px] md:h-[450px] bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={noticia.imagem_capa} 
            alt={noticia.titulo} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="w-full h-24 bg-brand-green-deep"></div>
      )}

      <Container className={`${noticia.imagem_capa ? '-mt-32 relative z-10' : 'pt-12'}`}>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          <div className="p-8 md:p-12">
            <Link 
              href="/noticias" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-gold-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Notícias
            </Link>

            <div className="flex items-center gap-4 text-gray-500 text-sm font-medium mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={noticia.created_at}>
                  {new Date(noticia.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {noticia.titulo}
            </h1>

            {noticia.resumo && (
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-serif italic border-l-4 border-brand-gold pl-4">
                {noticia.resumo}
              </p>
            )}

            {/* Renderização do RichText Seguro (Tipografia Tailwind) */}
            <div 
              className="prose prose-lg prose-brand max-w-none prose-headings:font-serif prose-headings:text-brand-green-dark prose-a:text-brand-green hover:prose-a:text-brand-gold-dark"
              dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
            />
          </div>

          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500 font-medium">Paróquia Santo Afonso Maria de Ligório</p>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(`Veja esta notícia: ${noticia.titulo}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-green transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </a>
          </div>

        </div>
      </Container>
    </article>
  );
}
