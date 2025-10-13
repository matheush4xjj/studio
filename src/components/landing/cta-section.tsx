import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from './animated-wrapper';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 bg-gradient-to-t from-background via-card/20 to-card/20"
    >
      <AnimatedWrapper className="container text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Sua advocacia. <br /> No próximo nível.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#">Comece a Usar o TributoHub</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-foreground/80 w-full sm:w-auto"
          >
            <Link href="#">ou agende uma demonstração</Link>
          </Button>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
