import { WhatsAppLink } from "@/components/whatsapp-link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light tracking-wider mb-4">The Beauty Tailor</h3>
            <p className="text-background/70 leading-relaxed max-w-md">
              Menciptakan pakaian bespoke berkualitas luar biasa sejak 1935. Di mana tradisi legendaris bertemu
              keanggunan kontemporer.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4">Navigasi</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#heritage" className="hover:text-background transition-colors">
                  Warisan
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-background transition-colors">
                  Keahlian
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-background transition-colors">
                  Bahan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Layanan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4">Terhubung</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <WhatsAppLink
                  source="footer"
                  className="hover:text-background transition-colors"
                >
                  Buat Janji
                </WhatsAppLink>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© 2025 Atelier d&apos;Excellence. Hak cipta dilindungi. Didirikan 1930.</p>
        </div>
      </div>
    </footer>
  )
}
