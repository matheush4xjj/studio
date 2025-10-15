import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  PlaceHolderImages,
  ImagePlaceholder,
} from '@/lib/placeholder-images';

const steps = [
  {
    title: 'Diagnóstico Instantâneo 🔍',
    description:
      'Insira o CPF/CNPJ. Nossa API integrada busca em segundos a análise de dívidas da PGFN e o histórico de CNDs.',
    imageId: 'debt-analysis',
  },
  {
    title: 'Relatório com IA 🤖',
    description:
      'Com um clique, nossa IA transforma dados complexos em um relatório de riscos e oportunidades, pronto para ser apresentado.',
    imageId: 'form-solution',
  },
  {
    title: 'Proposta de Alto Impacto 🎯',
    description:
      'Use o diagnóstico para construir uma apresentação visual em blocos e envie um link profissional que seu cliente vai adorar.',
    imageId: 'public-presentation',
  },
];

const getImageById = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-card/40">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Do Diagnóstico à Proposta em Menos de 3 Minutos.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Veja como nossa plataforma transforma a burocracia em uma poderosa
            ferramenta de conversão.
          </p>
        </AnimatedWrapper>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const image = getImageById(step.imageId);
            return (
              <AnimatedWrapper key={index} delay={index * 150}>
                <Card className="h-full bg-card/60 border-transparent text-center flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    {image && (
                      <div className="relative aspect-video w-full rounded-md overflow-hidden my-4">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <p className="text-sm text-foreground/70">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
