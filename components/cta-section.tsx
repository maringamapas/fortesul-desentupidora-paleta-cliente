import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SITE_CONFIG } from "@/src/config/site-config"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 border-t border-b border-white">
      <Image
        src="/images/cta-clinica-dedetizacao.jpg"
        alt="Frota de caminhões de saneamento da Fortesul"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      {/* CTA Overlay Background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgb(0 88 64 / 0.85)' }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl animate-slide-up">
          <span className="text-balance">
            {SITE_CONFIG.cta.title}
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {SITE_CONFIG.cta.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={SITE_CONFIG.hero.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 bg-accent px-10 text-lg text-accent-foreground hover:bg-accent/90 hover:scale-110 hover:shadow-2xl transition-all duration-500 rounded-full focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-2 scale-100"
            >
              <MessageCircle className="h-5 w-5" />
              {SITE_CONFIG.cta.primaryButton}
            </Button>
          </a>
          <a href={`tel:+55${SITE_CONFIG.contact.phoneRaw}`}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 px-10 text-lg text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-110 transition-all duration-500 rounded-full backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.cta.secondaryButton}
            </Button>
          </a>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {SITE_CONFIG.cta.footnote}
        </p>
      </div>
    </section>
  )
}
