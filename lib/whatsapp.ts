import type { WhatsAppSource } from "@/lib/analytics"

export const WHATSAPP_PHONE = "6281519236835"

const SOURCE_LABELS: Record<WhatsAppSource, string> = {
  hero: "Hero CTA",
  nav: "Navigation",
  nav_mobile: "Mobile Navigation",
  services: "Services",
  contact: "Contact Section",
  footer: "Footer",
}

export function buildWhatsAppUrl(source: WhatsAppSource): string {
  const text = `Hello, I would like to book a consultation (via ${SOURCE_LABELS[source]})`
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
