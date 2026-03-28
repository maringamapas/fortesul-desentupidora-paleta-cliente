import { Truck, Clock, Leaf, HardHat } from "lucide-react"

const differentials = [
  {
    icon: Truck,
    number: "01",
    title: "Frota Própria e Equipamentos de Ponta",
    description:
      "Caminhões vácuo-compressor próprios e cabines modernas garantem agilidade na entrega, manutenção e retirada de banheiros químicos e esgotamento de fossa.",
  },
  {
    icon: Clock,
    number: "02",
    title: "Atendimento 24h para Emergências",
    description:
      "Fossa transbordando ou entupimento grave? Atendemos emergências 24 horas por dia, 7 dias por semana, em Palhoça e toda a Grande Florianópolis.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "Certificação Ambiental e Descarte Legalizado",
    description:
      "Todo o resíduo coletado é transportado e descartado conforme a legislação ambiental vigente, com documentação e rastreabilidade garantidas.",
  },
  {
    icon: HardHat,
    number: "04",
    title: "Equipe Treinada e Uniformizada",
    description:
      "Profissionais capacitados, uniformizados e com EPIs adequados. Atendimento pontual e seguro para obras, eventos e residências.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Por Que Nos Escolher
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Diferenciais que garantem sua tranquilidade
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {differentials.map((item, index) => (
            <div
              key={item.number}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <span className="font-display text-5xl font-bold text-primary/30">
                  {item.number}
                </span>
              </div>
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-primary group">
                  <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
