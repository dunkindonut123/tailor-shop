import type { WhatsAppSource } from "@/lib/analytics"

export const WHATSAPP_PHONE = "6281519236835"

const SOURCE_LABELS: Record<WhatsAppSource, string> = {
  hero: "CTA Hero",
  nav: "Navigasi",
  nav_mobile: "Navigasi Mobile",
  services: "Layanan",
  contact: "Bagagian Kontak",
  footer: "Footer",
}

export function buildWhatsAppUrl(source: WhatsAppSource): string {
  const text = `Halo, saya ingin menjadwalkan konsultasi (via ${SOURCE_LABELS[source]})`
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
