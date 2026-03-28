"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/src/config/site-config"

const navLinks = SITE_CONFIG.nav.links

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("inicio")

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          
          // Detectar seção atual baseado na posição do scroll
          const sections = ["inicio", "sobre", "servicos", "diferenciais", "depoimentos", "faq", "galeria-fotos"]
          
          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 100) {
                setCurrentSection(section)
              }
            }
          }
          
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determinar cores do header baseado na seção atual e estado de scroll
  const getHeaderClasses = () => {
    if (!scrolled) {
      return "bg-transparent"
    }

    // Seções com fundo claro (branco ou creme) - header precisa ser escuro
    const lightSections = ["sobre", "diferenciais"]
    if (lightSections.includes(currentSection)) {
      return "bg-background/95 backdrop-blur-lg shadow-2xl"
    }

    // Seções com fundo escuro (verde) ou imagem - header precisa ser claro
    return "bg-primary/98 backdrop-blur-lg shadow-2xl"
  }

  // Determinar cor do texto baseado no fundo
  const getTextClasses = () => {
    if (!scrolled) {
      return "text-primary-foreground/80"
    }

    const lightSections = ["sobre", "diferenciais"]
    if (lightSections.includes(currentSection)) {
      return "text-foreground/80"
    }

    return "text-primary-foreground/80"
  }

  // Cor dos links ao hover
  const getHoverClasses = () => {
    if (!scrolled) {
      return "hover:text-secondary"
    }

    const lightSections = ["sobre", "diferenciais"]
    if (lightSections.includes(currentSection)) {
      return "hover:text-primary"
    }

    return "hover:text-secondary"
  }

  // Cor do botão CTA
  const getButtonClasses = () => {
    if (!scrolled) {
      return "bg-secondary text-foreground"
    }

    const lightSections = ["sobre", "diferenciais"]
    if (lightSections.includes(currentSection)) {
      return "bg-primary text-primary-foreground"
    }

    return "bg-secondary text-foreground"
  }

  // Cor do ícone do menu mobile
  const getMenuIconClasses = () => {
    if (!scrolled) {
      return "text-primary-foreground"
    }

    const lightSections = ["sobre", "diferenciais"]
    if (lightSections.includes(currentSection)) {
      return "text-foreground"
    }

    return "text-primary-foreground"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderClasses()}`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/images/logo-fortesul.png"
              alt="Logo Fortesul"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105 ${getTextClasses()} ${getHoverClasses()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`gap-2 ${getButtonClasses()} hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2`}>
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.nav.ctaText}
              </Button>
            </a>
          </div>

          <button
            type="button"
            className={`rounded-md p-2 ${getMenuIconClasses()} lg:hidden focus-visible:ring-2 focus-visible:ring-offset-2`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-primary shadow-2xl lg:hidden animate-slide-up" id="mobile-menu">
          <nav className="flex flex-col px-4 pb-6 border-b border-primary-foreground/10" role="navigation" aria-label="Menu principal mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="py-4 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-secondary hover:pl-2"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button className="w-full gap-2 bg-secondary text-foreground hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-offset-2">
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.nav.ctaText}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
