import { AnimatedWrapper } from './animated-wrapper';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const testimonials = [
  {
    text: 'O TributoHub mudou a forma como apresento meu trabalho. Os clientes finalmente entendem o valor da estratégia tributária, e minha taxa de conversão aumentou significativamente.',
    author: 'Camille Walendorff',
    title: 'Sócia em Franzoi Advogados',
    avatar: 'CW',
    avatarImage: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    text: 'A capacidade de gerar um diagnóstico com IA na primeira reunião é um diferencial competitivo absurdo. Economiza meu tempo e estabelece autoridade imediata.',
    author: 'Leticia Trindade',
    title: 'Advogada Tributarista',
    avatar: 'LT',
    avatarImage: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Aprovado por quem entende do assunto.
          </h2>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedWrapper key={index} delay={index * 100}>
              <Card className="h-full bg-card/80 p-6 flex flex-col justify-between">
                <CardContent className="p-0">
                  <p className="text-foreground/80 italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
                <div className="flex items-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarImage} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
