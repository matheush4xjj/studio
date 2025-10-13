import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatedWrapper } from './animated-wrapper';
import Link from 'next/link';

const plans = [
  {
    name: 'Individual',
    price: 147,
    users: '1 Advogado',
    features: [
      'Propostas ilimitadas',
      'Dashboard com métricas de resultados',
      'API: Consulta de Dívidas na PGFN',
      'Geração de Relatório Preliminar com IA',
      'API: Consulta de Histórico de CND (PGFN)',
      'Atalho para o Portal de Parcelamentos PGFN',
      'Suporte via WhatsApp',
    ],
    isPopular: false,
  },
  {
    name: 'Equipe',
    price: 297,
    users: 'Até 3 Advogados',
    description: 'Inclui todos os recursos do Plano Individual, além de:',
    features: [
      'Dashboard Administrativo (gestão da equipe)',
      'Gestão de Funcionários (convites e permissões)',
      'Métricas e acompanhamento por advogado',
    ],
    isPopular: true,
  },
  {
    name: 'Empresarial',
    price: 497,
    users: 'Até 7 Advogados',
    description: 'Inclui todos os recursos do Plano Equipe, além de:',
    features: [
      'Personalização avançada com marca branca',
      'Suporte Prioritário e Onboarding dedicado',
    ],
    isPopular: false,
  },
];

const WHATSAPP_NUMBER = '554896410249';

const generateWhatsAppLink = (planName: string) => {
  const message = `Olá! Sou advogado(a) tributário(a) e tenho interesse em contratar o ${'Plano ' + planName} do TributoHub. Gostaria de mais informações.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Planos pensados para cada fase do seu escritório
          </h2>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <AnimatedWrapper
              key={index}
              delay={index * 100}
              className="flex"
            >
              <Card
                className={cn(
                  'w-full flex flex-col text-left rounded-lg shadow-lg bg-card text-card-foreground border border-transparent',
                  {
                    'border-accent-2/80 ring-2 ring-accent-2/80': plan.isPopular,
                  }
                )}
              >
                {plan.isPopular && (
                  <div className="bg-accent-2 text-accent-2-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg -mb-px">
                    MAIS POPULAR
                  </div>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-bold">{`Plano ${plan.name}`}</CardTitle>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-5xl font-black tracking-tighter">
                      R$ {plan.price}
                    </span>
                    <span className="text-xl font-medium text-foreground/70">
                      /mês
                    </span>
                  </div>
                  <CardDescription className="mt-2 text-foreground/80 h-10">
                    {plan.users}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <div className="border-t border-border w-full mb-6"></div>
                  <ul className="space-y-4">
                    {plan.description && (
                      <li className="text-sm text-foreground/70 mb-4 italic">
                        {plan.description}
                      </li>
                    )}
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="size-5 text-accent-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button asChild className="w-full" size="lg">
                    <Link
                      href={generateWhatsAppLink(plan.name)}
                      target="_blank"
                    >
                      Escolher Plano
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
        <AnimatedWrapper
          delay={300}
          className="text-center mt-12 text-foreground/70"
        >
          <p>A cada advogado adicional: +R$79/mês</p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
