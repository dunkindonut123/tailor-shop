"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/whatsapp-link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Warisan", href: "#heritage" },
    { label: "Keahlian", href: "#craftsmanship" },
    { label: "Bahan", href: "#materials" },
    { label: "Layanan", href: "#services" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%20The%20Beauty%20tailor_alpha-oQ5MqUTdHHtQUXWHOq90ALoCdJazoJ.png" 
              alt="The Beauty Tailor" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light tracking-wide text-foreground hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink source="nav">
              <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                Buat Janji
              </Button>
            </WhatsAppLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-light tracking-wide text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink
              source="nav_mobile"
              className="w-full mt-2"
              onNavigate={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Buat Janji
              </Button>
            </WhatsAppLink>
          </div>
        )}
      </div>
    </nav>
  )
}
