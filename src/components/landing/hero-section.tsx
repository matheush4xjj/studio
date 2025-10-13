import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(80vh-3.5rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 container px-4">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-7xl font-black text-foreground leading-tight tracking-tighter">
            A nova cara da advocacia tributária.
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            A plataforma que centraliza suas análises, constrói propostas de
            alto impacto e demonstra o valor do seu trabalho de forma clara e
            profissional
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
