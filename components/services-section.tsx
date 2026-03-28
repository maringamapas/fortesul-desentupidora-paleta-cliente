import { Toilet, Truck, Wrench, Droplets, Building, CalendarCheck } from "lucide-react"

const services = [
  {
    icon: Toilet,
    title: "Locação de Banheiros Químicos",
    description:
      "Cabines modernas e higienizadas para obras, eventos e canteiros de trabalho. Entrega, manutenção periódica e retirada inclusos no serviço.",
  },
  {
    icon: Truck,
    title: "Limpeza de Fossa",
    description:
      "Esgotamento técnico de fossas sépticas com caminhão vácuo-compressor. Descarte legalizado e certificação ambiental garantida.",
  },
  {
    icon: Wrench,
    title: "Desentupimento 24h",
    description:
      "Desentupimento de pias, ralos, vasos sanitários, caixas de gordura e redes de esgoto. Atendimento emergencial em Palhoça e região.",
  },
  {
    icon: Droplets,
    title: "Hidrojateamento",
    description:
      "Limpeza de alta pressão para desobstrução de tubulações industriais e remoção de incrustações em redes de esgoto e galerias pluviais.",
  },
  {
    icon: Building,
    title: "Soluções para Obras",
    description:
      "Pacotes completos de saneamento para construtoras: banheiros químicos, limpeza de fossa e desentupimento com contrato mensal e preço fixo.",
  },
  {
    icon: CalendarCheck,
    title: "Locação para Eventos",
    description:
      "Banheiros químicos para festas, feiras e eventos corporativos. Cabines premium, acessíveis e com manutenção durante todo o evento.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Soluções completas em saneamento e higiene
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Locação de banheiros químicos, limpeza de fossa e desentupimento para
            obras, eventos e residências em Palhoça e Grande Florianópolis.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
