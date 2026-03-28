import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Luciana Ferreira",
    role: "Proprietária - Residência em Palhoça",
    avatar: "/images/avatar-01.jpg",
    content:
      "Contratei para limpeza de fossa e fiquei impressionada com a agilidade e o profissionalismo. Resolveram tudo em menos de duas horas, sem sujeira e sem odor. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Ricardo Souza",
    role: "Gerente de Obras - Construtora SC",
    avatar: "/images/avatar-02.jpg",
    content:
      "Alugamos banheiros químicos para nosso canteiro de obras em Palhoça. Entrega no prazo, cabines sempre limpas e manutenção periódica sem precisar cobrar. Parceria que renovo sempre.",
    rating: 5,
  },
  {
    name: "Patrícia Nunes",
    role: "Organizadora de Eventos - Grande Florianópolis",
    avatar: "/images/avatar-03.jpg",
    content:
      "Para nosso festival com mais de 800 pessoas, forneceram banheiros químicos em perfeito estado. Equipe atenciosa, estrutura impecável. Com certeza voltarei a contratar!",
    rating: 5,
  },
  {
    name: "Marcos Andrade",
    role: "Síndico de Condomínio - São José",
    avatar: "/images/avatar-04.jpg",
    content:
      "Chamei para desentupir a rede de esgoto do condomínio. Atendimento rápido, preço justo e resultado garantido. Equipe séria e bem treinada. Excelente!",
    rating: 5,
  },
  {
    name: "Camila Ramos",
    role: "Proprietária - Pousada Florianópolis",
    avatar: "/images/avatar-05.jpg",
    content:
      "A fossa da pousada estava transbordando numa sexta à noite. Atenderam em menos de uma hora e resolveram tudo. Atendimento 24h que realmente funciona. Salvaram meu fim de semana!",
    rating: 5,
  },
  {
    name: "Tiago Becker",
    role: "Engenheiro Civil - Palhoça",
    avatar: "/images/avatar-06.jpg",
    content:
      "Utilizo os serviços em todas as obras que gerencio. Locação de banheiros químicos com descarte 100% legalizado, o que é fundamental para cumprir as normas ambientais. Serviço de altíssimo nível.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              O que nossos clientes dizem
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-background p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <blockquote className="text-foreground leading-relaxed">
                {`"${testimonial.content}"`}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
