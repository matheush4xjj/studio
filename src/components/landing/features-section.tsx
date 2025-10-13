import {
  BarChart,
  FileText,
  Presentation,
  LayoutDashboard,
  Users,
} from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    icon: <BarChart className="size-8 text-primary" />,
    title: 'Análise de Dívida & Relatório com IA',
    description:
      'Consulte débitos na PGFN com um clique. Nossa IA transforma os dados em um relatório preliminar de riscos e oportunidades, pronto para impressionar seu cliente no primeiro contato.',
    placeholder: '[INSERIR PRINT DA TELA: ANÁLISE DE DÍVIDA E RELATÓRIO IA]',
  },
  {
    icon: <FileText className="size-8 text-primary" />,
    title: 'Criação de Propostas Detalhadas',
    description:
      'Vá além do preliminar. Crie propostas completas com análise da CDA, estratégia jurídica, cenários de sucesso e projeções de economia, tudo em um formulário guiado e intuitivo.',
    placeholder: '[INSERIR PRINT DA TELA: FORMULÁRIO DE CRIAÇÃO DE PROPOSTAS]',
  },
  {
    icon: <Presentation className="size-8 text-primary" />,
    title: 'Apresentações que Convertem',
    description:
      'Gere links para apresentações web confidenciais e interativas. Mostre seu diagnóstico e sua estratégia de forma clara, profissional e acessível para o seu cliente.',
    placeholder:
      '[INSERIR PRINT DA TELA: APRESENTAÇÃO PÚBLICA PARA O CLIENTE]',
  },
  {
    icon: <LayoutDashboard className="size-8 text-primary" />,
    title: 'Painel de Controle e Métricas',
    description:
      'Acompanhe o status de todas as suas propostas, o valor total aprovado e o progresso em relação às suas metas mensais em um dashboard centralizado.',
    placeholder: '[INSERIR PRINT DA TELA: PAINEL PRINCIPAL/DASHBOARD]',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'Gestão de Equipe e Marca',
    description:
      'Convide e gerencie os membros do seu escritório. Personalize a plataforma com o logo e as cores da sua empresa, reforçando sua identidade visual em todas as propostas.',
    placeholder: '[INSERIR PRINT DA TELA: CONFIGURAÇÕES E FUNCIONÁRIOS]',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Todas as ferramentas que você precisa. <br /> Em um só lugar.
          </h2>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedWrapper key={index} delay={index * 100}>
              <Card className="h-full bg-card hover:bg-card/80 transition-colors hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-md border-2 border-dashed border-border">
                    <p className="text-xs text-muted-foreground p-4 text-center">
                      {feature.placeholder}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
