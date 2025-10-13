'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatedWrapper } from './animated-wrapper';
import { Skeleton } from '../ui/skeleton';

const steps = [
  {
    title: 'Controle Total.',
    description:
      'Desde a análise da CDA até os cenários de sucesso, nosso formulário guiado permite que você construa propostas com um nível de detalhe impressionante.',
    imageId: 'form-solution',
    placeholder:
      '[INSERIR PRINT DA TELA: FORMULÁRIO DE PROPOSTA - SEÇÃO SOLUÇÃO JURÍDICA]',
  },
  {
    title: 'Resultados Claros.',
    description:
      "Demonstre a economia projetada com clareza, mostrando o 'antes e depois' da sua estratégia para débitos da PGFN e Receita Federal.",
    imageId: 'form-comparison',
    placeholder:
      '[INSERIR PRINT DA TELA: FORMULÁRIO DE PROPOSTA - SEÇÃO ANTES E DEPOIS]',
  },
  {
    title: 'Investimento Justificado.',
    description:
      'Defina seus honorários fixos e de êxito de forma transparente, conectando diretamente o valor do seu trabalho ao resultado gerado para o cliente.',
    imageId: 'form-investment',
    placeholder:
      '[INSERIR PRINT DA TELA: FORMULÁRIO DE PROPOSTA - SEÇÃO INVESTIMENTO]',
  },
];

export function DynamicFormSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (isMobile === true || isMobile === undefined) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-step-index')!,
              10
            );
            setActiveStep(index);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const currentRefs = stepRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);

  const images = steps.map((step) =>
    PlaceHolderImages.find((p) => p.id === step.imageId)
  );

  if (!isClient) {
    return (
        <section className="py-20 md:py-32">
            <div className="container h-[90vh]">
                <Skeleton className="w-full h-full" />
            </div>
        </section>
    );
  }

  if (isMobile) {
    return (
      <section className="py-20">
        <div className="container px-4 space-y-20">
          {steps.map((step, index) => {
            const img = images[index];
            return (
              <AnimatedWrapper key={index}>
                <div className="space-y-4 text-center">
                  <h3 className="text-3xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    {step.description}
                  </p>
                </div>
                <Card className="mt-8 w-full bg-card/50 shadow-2xl shadow-primary/10 overflow-hidden">
                  <CardContent className="p-0">
                    {img ? (
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        data-ai-hint={img.imageHint}
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center p-4">
                        <p className="text-muted-foreground text-center">{step.placeholder}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="flex flex-col justify-between space-y-72">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                data-step-index={index}
                className="space-y-4 py-16 min-h-[30vh] flex flex-col justify-center"
              >
                <div
                    className="transition-opacity duration-300"
                    style={{ opacity: activeStep === index ? 1 : 0.3 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                    {step.title}
                    </h3>
                    <p className="text-lg text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-0 h-screen flex items-center">
            <Card className="w-full aspect-[4/3] bg-card/50 shadow-2xl shadow-primary/10 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                    {images.map((img, index) =>
                    img ? (
                        <Image
                        key={img.id}
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className={cn(
                            'object-contain transition-opacity duration-500 ease-in-out p-8',
                            activeStep === index ? 'opacity-100' : 'opacity-0'
                        )}
                        data-ai-hint={img.imageHint}
                        sizes="50vw"
                        />
                    ) : (
                        <div
                        key={index}
                        className={cn(
                            'absolute inset-0 flex items-center justify-center bg-muted transition-opacity duration-500 ease-in-out',
                            activeStep === index ? 'opacity-100' : 'opacity-0'
                        )}
                        >
                        <p className="text-muted-foreground text-center">{steps[index].placeholder}</p>
                        </div>
                    )
                    )}
                </div>
            </Card>
          </div>
        </div>
    </section>
  );
}
