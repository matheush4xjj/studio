import { AnimatedWrapper } from './animated-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: "Os dados dos meus clientes estão seguros?",
        answer: "Sim. A segurança é nossa prioridade máxima. A plataforma utiliza a infraestrutura segura do Firebase by Google, e as propostas públicas são acessíveis apenas por links exclusivos e confidenciais."
    },
    {
        question: "Preciso instalar algo?",
        answer: "Não. O TributoHub é 100% online. Você e sua equipe podem acessar de qualquer lugar, a qualquer hora, através do navegador."
    },
    {
        question: "O sistema se integra com outras ferramentas?",
        answer: "Atualmente, utilizamos a API da Infosimples para consultas de débitos. Estamos constantemente trabalhando para expandir nossas integrações e automatizar ainda mais seu fluxo de trabalho."
    },
    {
        question: "Como funciona o suporte?",
        answer: "Oferecemos suporte prioritário via WhatsApp e e-mail para todos os nossos assinantes, garantindo que você e sua equipe tenham a melhor experiência possível."
    }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card/40">
      <div className="container px-4">
        <AnimatedWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Suas dúvidas, respondidas.
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200} className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/70">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
