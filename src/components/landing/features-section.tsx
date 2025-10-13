import {
  LayoutDashboard,
  FileText,
  Search,
  FileCheck2,
  ExternalLink,
  Users,
} from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    icon: <LayoutDashboard className="size-8 text-primary" />,
    title: 'Painel de Controle e Métricas',
    description:
      'Acompanhe o status de todas as suas propostas, o valor total aprovado e o progresso em relação às suas metas mensais em um dashboard centralizado.',
  },
  {
    icon: <FileText className="size-8 text-primary" />,
    title: 'Gestão de Propostas',
    description:
      'Crie, edite e gerencie propostas detalhadas. Gere links públicos para apresentações web profissionais e interativas que impressionam seus clientes.',
  },
  {
    icon: <Search className="size-8 text-primary" />,
    title: 'Análise de Dívida com IA',
    description:
      'Utilizando a API da Infosimples, consulte débitos na PGFN com um clique. Nossa IA transforma os dados em um relatório preliminar de riscos e oportunidades.',
  },
  {
    icon: <FileCheck2 className="size-8 text-primary" />,
    title: 'Emissão de CND (PGFN)',
    description:
      'Consulte o histórico de CNDs emitidas para um CPF ou CNPJ. A consulta é feita via API e os resultados ficam armazenados em cache por 24h para otimizar o uso.',
  },
  {
    icon: <ExternalLink className="size-8 text-primary" />,
    title: 'Acesso ao Parcelamento PGFN',
    description:
      'Um atalho direto para o portal Regularize da PGFN. Fornecemos as coordenadas exatas para você acessar o painel de parcelamentos e transações sem se perder.',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'Gestão de Funcionários',
    description:
      'Adicione e gerencie os membros do seu escritório. Crie links de convite com diferentes níveis de permissão (administrador ou funcionário) de forma simples e segura.',
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
              <Card className="h-full bg-card hover:bg-card/80 transition-colors hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-sm text-foreground/70">
                    {feature.description}
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
