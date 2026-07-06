declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-17068113026"
const GOOGLE_ADS_WHATSAPP_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL
const GOOGLE_ADS_FORM_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL

export type WhatsAppSource =
  | "hero"
  | "nav"
  | "nav_mobile"
  | "services"
  | "contact"
  | "footer"

export function trackWhatsAppClick(source: WhatsAppSource) {
  if (typeof window === "undefined") return

  window.gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    source,
  })

  if (GOOGLE_ADS_WHATSAPP_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}`,
    })
  }

  window.fbq?.("track", "Contact", { source })
}

export function trackFormSubmit() {
  if (typeof window === "undefined") return

  window.gtag?.("event", "form_submit", {
    event_category: "engagement",
    event_label: "consultation_request",
  })

  if (GOOGLE_ADS_FORM_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_FORM_LABEL}`,
    })
  }

  window.fbq?.("track", "Lead")
}
