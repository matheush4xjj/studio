import { AnimatedWrapper } from './animated-wrapper';
import Image from 'next/image';
import {
  PlaceHolderImages,
  ImagePlaceholder,
} from '@/lib/placeholder-images';

const getImageById = (id: string): ImagePlaceholder | undefined => {
  const image = PlaceHolderImages.find(img => img.id === id);
  // Using a fallback image in case the requested one is not found
  return image || PlaceHolderImages.find(img => img.id === 'hero-background');
};

export function ProspectingSection() {
  const image = getImageById('form-comparison');

  return (
    <section id="prospecting" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper>
            <div className="md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Encontre Seus Próximos Clientes Sem Sair da Plataforma.
              </h2>
              <p className="mt-6 text-lg text-foreground/70">
                Chega de alternar entre abas e sistemas. Integramos o painel de
                devedores do Regularize diretamente no TributoHub. Use-o para
                pesquisar ativamente novas empresas com débitos fiscais na sua
                região, qualificar oportunidades e, com um clique, iniciar uma
                análise de dívida completa. É uma verdadeira máquina de
                prospecção ao seu alcance.
              </p>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            {image && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
