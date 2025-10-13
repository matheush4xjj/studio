import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from './animated-wrapper';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-32">
      <AnimatedWrapper className="container text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Sua advocacia. <br /> No próximo nível.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="#">Comece a Usar o TributoHub</Link>
          </Button>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
