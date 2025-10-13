import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-10"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 container px-4">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white leading-tight tracking-tighter">
            A nova cara da advocacia tributária.
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            Transforme dados fiscais em propostas de valor inquestionável.
            Apresente seu trabalho como nunca antes.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper delay={400}>
          <Button asChild size="lg" className="mt-8">
            <Link href="#cta">Descubra o TributoHub</Link>
          </Button>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
