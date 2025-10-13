import Image from 'next/image';
import { AnimatedWrapper } from './animated-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function FeatureShowcaseSection() {
  const featureImage = PlaceHolderImages.find(
    (p) => p.id === 'public-presentation'
  );

  return (
    <section className="py-20 md:py-32 bg-card/20">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Envie apresentações que{' '}
            <span className="text-accent">fecham contratos.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Gere um link exclusivo para uma página web confidencial, onde seu
            cliente pode visualizar o diagnóstico, os riscos e a sua estratégia
            de forma clara e interativa.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200} className="mt-12">
          <Card className="bg-card/50 shadow-2xl shadow-accent/10 overflow-hidden">
            <CardContent className="p-0">
              {featureImage ? (
                <Image
                  src={featureImage.imageUrl}
                  alt={featureImage.description}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  data-ai-hint={featureImage.imageHint}
                />
              ) : (
                <div className="w-full aspect-[3/2] bg-muted flex items-center justify-center p-4">
                  <p className="text-muted-foreground text-center">
                    [INSERIR PRINT DA TELA: APRESENTAÇÃO PÚBLICA PARA O CLIENTE]
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
