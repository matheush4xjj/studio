import { AnimatedWrapper } from './animated-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: "Como funcionam as consultas via API? Existe algum custo adicional ou limite?",
        answer: "Não há custo adicional! Cada plano inclui um generoso pacote de créditos de consulta via API por mês, suficiente para a grande maioria dos advogados. Nosso sistema gerencia tudo para você, e caso precise de um volume maior, oferecemos pacotes de créditos extras. O objetivo é ser simples e sem surpresas na fatura."
    },
    {
        question: "A plataforma é segura para os dados confidenciais dos meus clientes?",
        answer: "Absolutamente. Segurança é nossa prioridade. O TributoHub é construído sobre a infraestrutura segura do Google, e todas as informações são criptografadas. Os dados de consulta são usados apenas para gerar seus relatórios e não são compartilhados com ninguém. Tratamos os dados dos seus clientes com o mesmo rigor que você."
    },
    {
        question: "Preciso de algum conhecimento técnico para usar as integrações de API?",
        answer: "Nenhum. Nós cuidamos de toda a parte técnica. Para você, a experiência é simples: digitar o CPF/CNPJ e clicar em 'Consultar'. O sistema faz todo o trabalho pesado nos bastidores."
    },
    {
        question: "As informações da PGFN e Receita Federal estão sempre atualizadas?",
        answer: "Sim. Nossa plataforma se conecta diretamente às fontes de dados oficiais através da API em tempo real. Isso garante que cada diagnóstico que você gera seja baseado nas informações mais recentes disponíveis publicamente nos portais do governo."
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
