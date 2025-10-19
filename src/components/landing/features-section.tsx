'use client';

import {
  LayoutDashboard,
  FileText,
  Search,
  FileCheck2,
  ExternalLink,
  Users,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  PlaceHolderImages,
  ImagePlaceholder,
} from '@/lib/placeholder-images';
import { ImageLightbox } from './image-lightbox';

const features = [
  {
    icon: <LayoutDashboard className="size-8 text-primary" />,
    title: 'Painel de Controle e Métricas',
    description:
      'Acompanhe o status de todas as suas propostas, o valor total aprovado e o progresso em relação às suas metas mensais em um dashboard centralizado.',
    imageId: 'hero-background',
  },
  {
    icon: <FileText className="size-8 text-primary" />,
    title: 'Gestão de Propostas',
    description:
      'Crie, edite e gerencie propostas detalhadas. Gere links públicos para apresentações web profissionais e interativas que impressionam seus clientes.',
    imageId: 'public-presentation',
  },
  {
    icon: <Search className="size-8 text-primary" />,
    title: 'Análise de Dívida com IA',
    description:
      'Utilizando a API da Infosimples, consulte débitos na PGFN com um clique. Nossa IA transforma os dados em um relatório preliminar de riscos e oportunidades.',
    imageId: 'debt-analysis',
  },
  {
    icon: <Trophy className="size-8 text-primary" />,
    title: 'Ranking de Equipe',
    description:
      'Incentive a alta performance com dados. Analise em tempo real qual advogado fecha mais contratos e gera mais valor, transformando métricas em insights para sua gestão. Disponível a partir do Plano Equipe.',
    imageId: 'team-ranking',
  },
  {
    icon: <ExternalLink className="size-8 text-primary" />,
    title: 'Acesso ao Parcelamento PGFN',
    description:
      'Um atalho direto para o portal Regularize da PGFN. Fornecemos as coordenadas exatas para você acessar o painel de parcelamentos e transações sem se perder.',
    imageId: 'form-comparison',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'Gestão de Funcionários',
    description:
      'Adicione e gerencie os membros do seu escritório. Crie links de convite com diferentes níveis de permissão (administrador ou funcionário) de forma simples e segura.',
    imageId: 'form-investment',
  },
];

export function FeaturesSection() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(
    null
  );

  const getImageById = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
  };

  const openModal = (image: ImagePlaceholder) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-transparent">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Todas as ferramentas que você precisa. <br /> Em um só lugar.
          </h2>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const image = getImageById(feature.imageId);
            return (
              <AnimatedWrapper key={index} delay={index * 100}>
                <Card className="h-full bg-card hover:bg-card/80 transition-colors hover:shadow-2xl hover:shadow-primary/10 flex flex-col group">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-sm text-foreground/70 mb-4">
                      {feature.description}
                    </p>
                    {image && (
                      <div
                        className="relative aspect-video w-full rounded-md overflow-hidden cursor-pointer mt-auto"
                        onClick={() => openModal(image)}
                      >
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-center text-sm p-2">{image.description}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
      {selectedImage && (
        <ImageLightbox image={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
}
