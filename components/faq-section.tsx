import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Os produtos utilizados são seguros para crianças e animais?",
    answer:
      "Sim! Utilizamos apenas produtos registrados e aprovados pela ANVISA, que são seguros para sua família e pets quando aplicados corretamente. Após a aplicação, recomendamos aguardar o tempo de secagem indicado antes de permitir o acesso de crianças e animais ao local.",
  },
  {
    question: "Qual o prazo de garantia dos serviços?",
    answer:
      "Oferecemos garantia de 3 a 6 meses dependendo do serviço contratado. Para dedetização residencial, a garantia é de 3 meses. Para descupinização e contratos comerciais, oferecemos até 6 meses de garantia. Se houver reincidência, retornamos sem custo adicional.",
  },
  {
    question: "Vocês atendem emergências 24 horas?",
    answer:
      "Sim! Nossa equipe está disponível 24 horas por dia, 7 dias por semana, incluindo feriados. Entendemos que problemas com pragas e entupimentos não escolhem hora para acontecer. Ligue para nosso número e teremos prazer em atendê-lo.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento gratuito pelo WhatsApp (44 99932-4635), por telefone ou preenchendo nosso formulário de contato. Respondemos em até 30 minutos durante o horário comercial. O orçamento é sem compromisso.",
  },
  {
    question: "Preciso sair de casa durante a dedetização?",
    answer:
      "Depende do tipo de tratamento. Para aplicações gel e iscas, não é necessário sair. Para pulverizações, recomendamos ausentar-se por 2 a 4 horas e manter o local ventilado após o retorno. Nossa equipe orientará sobre cada caso específico.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer:
      "Sim, emitimos nota fiscal para todos os serviços prestados, tanto para pessoa física quanto jurídica. Também fornecemos certificado de dedetização, documento obrigatório para estabelecimentos comerciais e exigido pela vigilância sanitária.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Perguntas frequentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de dedetização e desentupimento.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
