import { MapPin, Phone, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { SITE_CONFIG } from "@/src/config/site-config"

export function ContactFooter() {
  return (
    <section className="w-full bg-primary">
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative z-10 py-10 sm:py-12 md:py-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Brand & Contact */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/logo-fortesul.png"
                    alt="Logo Fortesul"
                    width={60}
                    height={60}
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-primary-foreground tracking-tight">{SITE_CONFIG.client.name}</h3>
                    <p className="text-primary-foreground/70 text-sm">{SITE_CONFIG.footer.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary-foreground/70" strokeWidth={1.5} />
                    <span className="text-primary-foreground/80 text-sm">{SITE_CONFIG.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary-foreground/70" strokeWidth={1.5} />
                    <a href={`tel:+55${SITE_CONFIG.contact.phoneRaw}`} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-foreground px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {SITE_CONFIG.nav.ctaText}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>

              {/* Right Column - Links & Social */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-8">
                  {/* Services Links */}
                  <div>
                    <h4 className="text-primary-foreground font-medium mb-4">Serviços</h4>
                    <ul className="space-y-2">
                      {SITE_CONFIG.footer.services.map((service) => (
                        <li key={service}>
                          <a href="#servicos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-primary-foreground font-medium mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                      {SITE_CONFIG.footer.quickLinks.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="text-primary-foreground font-medium mb-4">Redes Sociais</h4>
                  <div className="flex gap-3">
                    <div 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Instagram className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Facebook className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Twitter className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/10 mt-10 pt-6 max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-primary-foreground/60 text-xs text-center">{SITE_CONFIG.footer.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
