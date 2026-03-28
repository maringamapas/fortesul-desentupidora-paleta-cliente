import Image from "next/image"
import { Leaf, HardHat, Clock } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Descarte Legalizado",
    description:
      "Resíduos coletados com certificação ambiental e destinação regulamentada.",
  },
  {
    icon: HardHat,
    title: "Equipe Especializada",
    description:
      "Profissionais treinados, uniformizados e com equipamentos de proteção adequados.",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description:
      "Disponibilidade integral para emergências em Palhoça e Grande Florianópolis.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <Image
                src="/images/img-quem-somos.jpg"
                alt="Equipe Fortesul realizando serviço de saneamento"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground lg:block shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-2">
              <span className="font-display text-4xl font-bold">10+</span>
              <p className="text-sm font-medium text-primary-foreground/90">
                Anos no mercado
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem Somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Referência em saneamento e higiene na Grande Florianópolis
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Com mais de{" "}
              <strong className="text-foreground">10 anos de experiência</strong>,
              somos especialistas em locação de banheiros químicos, limpeza de fossa e
              desentupimento. Atendemos obras, eventos e residências em{" "}
              <strong className="text-foreground">Palhoça e toda a Grande Florianópolis</strong>{" "}
              com frota própria e equipe altamente capacitada.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Todos os nossos serviços seguem as normas ambientais vigentes, com
              destinação correta dos resíduos e documentação comprobatória. Agilidade,
              responsabilidade e atendimento 24h são os pilares do nosso trabalho.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value, index) => (
                <div key={value.title} className="flex flex-col gap-3 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary">
                    <value.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
