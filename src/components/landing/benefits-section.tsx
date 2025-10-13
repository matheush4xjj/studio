import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="size-10 text-primary" />,
    title: 'Economize Horas, Não Minutos',
    description:
      'Automatize a coleta de dados e a geração de relatórios. O que antes levava horas de trabalho manual, agora é um diagnóstico de impacto gerado por IA em segundos.',
  },
  {
    icon: <TrendingUp className="size-10 text-primary" />,
    title: 'Aumente sua Taxa de Conversão',
    description:
      'Impressione clientes desde o primeiro contato. Apresentações profissionais e propostas claras conectam sua estratégia ao resultado financeiro, justificando seus honorários com facilidade.',
  },
  {
    icon: <ShieldCheck className="size-10 text-primary" />,
    title: 'Reforce sua Marca e Autoridade',
    description:
      'Apresente seu trabalho com uma plataforma que reflete a qualidade e o profissionalismo do seu escritório. Personalize com sua logo e cores, entregando uma experiência premium.',
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
