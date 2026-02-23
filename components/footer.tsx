export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light tracking-wider mb-4">ATELIER D'EXCELLENCE</h3>
            <p className="text-background/70 leading-relaxed max-w-md">
              Crafting bespoke garments of exceptional quality since 1930. Where legendary tradition meets contemporary
              elegance.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#heritage" className="hover:text-background transition-colors">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-background transition-colors">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-background transition-colors">
                  Materials
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4">Connect</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© 2025 Atelier d'Excellence. All rights reserved. Established 1930.</p>
        </div>
      </div>
    </footer>
  )
}
