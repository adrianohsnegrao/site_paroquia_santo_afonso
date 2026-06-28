import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ArrowLeft, Users, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const revalidate = 60;

// Gerar os Metadados Dinamicamente (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('pastorais')
    .select('titulo, descricao_curta, imagem')
    .eq('slug', params.slug)
    .single();
  
  if (!data) return { title: 'Pastoral não encontrada | Paróquia Santo Afonso' };
  
  return {
    title: `${data.titulo} | Pastorais e Movimentos`,
    description: data.descricao_curta,
    openGraph: {
      title: `${data.titulo} | Paróquia Santo Afonso`,
      description: data.descricao_curta || 'Conheça nossa pastoral',
      images: data.imagem ? [data.imagem] : [],
    },
  };
}

export default async function PastoralInternaPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: pastoral } = await supabase
    .from('pastorais')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!pastoral || pastoral.status !== 'ativo') {
    notFound();
  }

  return (
    <article className="bg-brand-cream-light min-h-screen pb-20">
      {/* Banner de Capa (se houver) */}
      {pastoral.imagem ? (
        <div className="relative w-full h-[250px] md:h-[350px] bg-brand-green-deep">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={pastoral.imagem} 
            alt={pastoral.titulo} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream-light via-transparent to-transparent opacity-80" />
        </div>
      ) : (
        <div className="w-full h-32 bg-brand-green-deep"></div>
      )}

      <Container className={`${pastoral.imagem ? '-mt-24 relative z-10' : 'pt-12'}`}>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden border border-brand-green/10">
          
          <div className="p-8 md:p-12">
            <Link 
              href="/pastorais" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-gold-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Pastorais
            </Link>

            <div className="flex items-center gap-4 mb-6">
              {pastoral.icone ? (
                <div className="text-4xl">{pastoral.icone}</div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-brand-green-light/20 flex items-center justify-center text-brand-green-dark">
                  <Users size={24} />
                </div>
              )}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-green-dark leading-tight">
                {pastoral.titulo}
              </h1>
            </div>

            {pastoral.descricao_curta && (
              <p className="text-lg md:text-xl text-brand-green-dark/70 mb-10 leading-relaxed font-serif italic border-l-4 border-brand-gold pl-4">
                {pastoral.descricao_curta}
              </p>
            )}

            {/* Renderização do RichText Seguro (Tipografia Tailwind) */}
            <div 
              className="prose prose-lg prose-brand max-w-none prose-headings:font-serif prose-headings:text-brand-green-dark prose-a:text-brand-green hover:prose-a:text-brand-gold-dark"
              dangerouslySetInnerHTML={{ __html: pastoral.descricao }}
            />
          </div>

          {/* Call to Action: Como Participar */}
          <div className="bg-brand-green-deep px-8 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Sentiu o chamado?</h3>
              <p className="text-white/80 max-w-md">
                Junte-se à {pastoral.titulo}. Entre em contato conosco para saber horários de encontro e como participar.
              </p>
            </div>
            <Button href="/contato" variant="secondary" size="lg" className="whitespace-nowrap">
              <HandHeart className="w-5 h-5 mr-2" />
              Quero Participar
            </Button>
          </div>

        </div>
      </Container>
    </article>
  );
}
