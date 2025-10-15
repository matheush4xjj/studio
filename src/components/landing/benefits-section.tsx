import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="size-10 text-primary" />,
    title: 'Agilidade que Gera Negócios',
    description:
      'Automatize a coleta de dados com nossa API. O que levava horas de trabalho manual, agora é um diagnóstico de impacto gerado em segundos.',
  },
  {
    icon: <ShieldCheck className="size-10 text-primary" />,
    title: 'Credibilidade que Converte',
    description:
      'Construída com diagnósticos de IA e propostas visuais que impressionam desde o primeiro contato, justificando seus honorários com facilidade.',
  },
  {
    icon: <Clock className="size-10 text-primary" />,
    title: 'Organização que Traz Clareza',
    description:
      'Centralize todas as suas análises, propostas e clientes em um único lugar, com um fluxo de trabalho claro, intuitivo e focado em resultados.',
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-card/40">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Feito para advogados. <br /> Focado em resultados.
          </h2>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedWrapper key={index} delay={index * 100}>
              <Card className="h-full bg-card/60 border-transparent hover:border-primary/20 transition-colors flex flex-col text-center">
                <CardHeader className="items-center">
                  {benefit.icon}
                  <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
