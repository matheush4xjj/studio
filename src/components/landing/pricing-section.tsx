import { Check, ArrowRight } from 'lucide-react';
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
import Image from 'next/image';
import {
  PlaceHolderImages,
  ImagePlaceholder,
} from '@/lib/placeholder-images';

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

const generateTrialWhatsAppLink = () => {
  const message = `Olá! Sou advogado(a) tributário(a) e tenho interesse em iniciar o teste gratuito do TributoHub. Gostaria de receber meu acesso.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

const getImageById = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
};

export function PricingSection() {
  const trialImage = getImageById('hero-background');

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Seção de Teste Gratuito */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedWrapper>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                Experimente o poder da TributoHub por 3 dias.
              </h2>
              <p className="text-2xl md:text-3xl font-semibold mt-2">
                Sem compromisso, sem cartão de crédito.
              </p>
              <p className="mt-6 text-lg text-foreground/80">
                Tenha acesso completo às ferramentas do Plano Individual e veja
                na prática como nossa plataforma pode transformar suas propostas
                e otimizar seu tempo. Crie, apresente e impressione seus
                clientes antes de decidir.
              </p>
              <Button asChild size="lg" className="mt-8 text-lg">
                <Link href={generateTrialWhatsAppLink()} target="_blank">
                  INICIAR MEU TESTE GRATUITO
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            {trialImage && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={trialImage.imageUrl}
                  alt={trialImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={trialImage.imageHint}
                />
              </div>
            )}
          </AnimatedWrapper>
        </div>

        {/* Seção de Planos Pagos */}
        <AnimatedWrapper
          delay={200}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Encontre o plano perfeito para escalar seu escritório
          </h3>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <AnimatedWrapper
              key={index}
              delay={300 + index * 100}
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
          delay={600}
          className="text-center mt-12 text-foreground/70"
        >
          <p>A cada advogado adicional: +R$79/mês</p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
