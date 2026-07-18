import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/whatsapp-link"

export function Services() {
  const services = [
    {
      title: "Jas Bespoke",
      description:
        "Jas yang sepenuhnya dikustom dari awal dengan pola individual, pilihan kain, dan preferensi gaya pribadi Anda.",

    },
    {
      title: "Made-to-Measure",
      description:
        "Pakaian yang disesuaikan secara ahli dengan ukuran Anda dari pola dasar kami yang telah disempurnakan, menawarkan kecocokan dan kustomisasi yang unggul.",

    },
    {
      title: "Pakaian Formal",
      description:
        "Tuxedo, dinner jacket, dan morning coat untuk momen paling penting, dengan perhatian detail yang sempurna.",

    },
    {
      title: "Kemeja",
      description:
        "Kemeja custom dari katun Mesir terbaik, Sea Island cotton, dan campuran mewah, dijahit sesuai spesifikasi tepat Anda.",

    },
    {
      title: "Overcoat",
      description:
        "Overcoat dan topcoat mewah dari cashmere, vicuña, dan wool premium untuk melengkapi penampilan Anda dengan sofistikasi.",

    },
    {
      title: "Alterasi",
      description:
        "Alterasi dan perbaikan ahli oleh master tailor kami agar pakaian Anda tetap prima selama bertahun-tahun.",

    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Layanan Kami</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Disesuaikan untuk
            <br />
            <span className="italic font-normal">Kesempurnaan Anda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-sm border border-border hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-2xl font-normal text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppLink source="services">
            <Button size="lg" variant="outline">
              Jadwalkan Konsultasi
            </Button>
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
