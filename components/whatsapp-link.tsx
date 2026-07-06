"use client"

import type { ReactNode } from "react"
import { trackWhatsAppClick, type WhatsAppSource } from "@/lib/analytics"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

interface WhatsAppLinkProps {
  source: WhatsAppSource
  children: ReactNode
  className?: string
  onNavigate?: () => void
}

export function WhatsAppLink({ source, children, className, onNavigate }: WhatsAppLinkProps) {
  const url = buildWhatsAppUrl(source)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackWhatsAppClick(source)
        onNavigate?.()
      }}
    >
      {children}
    </a>
  )
}
