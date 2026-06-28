import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Users, ArrowRight } from 'lucide-react';

// Incremental Static Regeneration (ISR) a cada 60 segundos
export const revalidate = 60;

export default async function PastoraisPage() {
  const supabase = await createClient();

  const { data: pastorais, error } = await supabase
    .from('pastorais')
    .select('*')
    .eq('status', 'ativo')
    .order('titulo', { ascending: true });

  if (error) {
    console.error('Erro ao buscar pastorais:', error);
  }

  const listaPastorais = pastorais || [];

  return (
    <div className="py-12 lg:py-20 bg-brand-cream-light min-h-screen">
      <Container>
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <Users className="h-5 w-5" strokeWidth={1.5} />
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-green-dark">
            Pastorais e Movimentos
          </h1>
          <p className="mt-4 text-lg text-brand-green-dark/70">
            Conheça as diversas forças vivas que compõem a nossa comunidade. Encontre o seu lugar para servir e fortalecer a sua fé!
          </p>
        </div>

        {listaPastorais.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listaPastorais.map((pastoral) => (
              <Link 
                href={`/pastorais/${pastoral.slug}`} 
                key={pastoral.id}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg border border-brand-green/10 transition-all overflow-hidden h-full"
              >
                {/* Cabeçalho do Card (Ícone ou Imagem) */}
                {pastoral.imagem ? (
                  <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-brand-green-deep/30 group-hover:bg-transparent transition-colors z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={pastoral.imagem} 
                      alt={pastoral.titulo} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {pastoral.icone && (
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm">
                        {pastoral.icone}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-28 w-full bg-brand-green-deep flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green-light to-brand-green-deep opacity-50" />
                    {pastoral.icone ? (
                      <span className="text-4xl relative z-10">{pastoral.icone}</span>
                    ) : (
                      <Users className="w-10 h-10 text-white/50 relative z-10" />
                    )}
                  </div>
                )}

                {/* Corpo do Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="font-serif text-xl font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold-dark transition-colors">
                    {pastoral.titulo}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {pastoral.descricao_curta}
                  </p>
                  
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-brand-gold-dark transition-colors mt-auto">
                    Conhecer pastoral <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nenhum grupo cadastrado</h3>
            <p className="text-gray-500">
              Ainda não temos pastorais ou movimentos cadastrados em nosso sistema.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
