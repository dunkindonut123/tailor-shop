import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/whatsapp-link"

export function Services() {
  const services = [
    {
      title: "Bespoke Suits",
      description:
        "Fully customized suits created from scratch with your individual pattern, choice of fabric, and personal style preferences.",

    },
    {
      title: "Made-to-Measure",
      description:
        "Expertly tailored garments adjusted to your measurements from our refined base patterns, offering excellent fit and customization.",

    },
    {
      title: "Formal Wear",
      description:
        "Tuxedos, dinner jackets, and morning coats crafted for the most important occasions with impeccable attention to detail.",

    },
    {
      title: "Shirting",
      description:
        "Custom shirts in the finest Egyptian cotton, Sea Island cotton, and luxury blends, tailored to your exact specifications.",

    },
    {
      title: "Overcoats",
      description:
        "Luxurious overcoats and topcoats in cashmere, vicuña, and premium wools to complete your wardrobe with sophistication.",

    },
    {
      title: "Alterations",
      description:
        "Expert alterations and repairs by our master tailors to maintain your garments in pristine condition for years to come.",

    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Tailored to
            <br />
            <span className="italic font-normal">Your Perfection</span>
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
              Schedule a Consultation
            </Button>
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
