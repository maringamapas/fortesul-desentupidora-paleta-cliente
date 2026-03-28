"use client"

import { MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "@/src/config/site-config"

export function WhatsAppFloat() {
  return (
    <a
      href={SITE_CONFIG.hero.ctaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse-slow hover:animate-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-primary"></span>
      </span>
    </a>
  )
}
