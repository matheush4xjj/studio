import Image from 'next/image';
import { AnimatedWrapper } from './animated-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function ProblemSection() {
  const problemImage = PlaceHolderImages.find((p) => p.id === 'debt-analysis');

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Sua primeira impressão, agora{' '}
            <span className="text-primary">automatizada.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Esqueça a complexidade de consultar débitos e montar relatórios. Gere
            um diagnóstico preliminar com IA e crie uma apresentação
            profissional em minutos.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200} className="mt-12">
          <Card className="bg-card/50 shadow-2xl shadow-primary/10 overflow-hidden">
            <CardContent className="p-0">
              {problemImage ? (
                <Image
                  src={problemImage.imageUrl}
                  alt={problemImage.description}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  data-ai-hint={problemImage.imageHint}
                />
              ) : (
                <div className="w-full aspect-[3/2] bg-muted flex items-center justify-center p-4">
                  <p className="text-muted-foreground text-center">
                    [INSERIR PRINT DA TELA: ANÁLISE DE DÍVIDA COM RELATÓRIO DA IA
                    AO LADO]
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
