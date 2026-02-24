export function Craftsmanship() {
  const craftSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Personal meeting to understand your style, preferences, and requirements.",
    },
    {
      number: "02",
      title: "Measurement",
      description: "Precise measurements taken by our master tailors for the perfect fit.",
    },
    {
      number: "03",
      title: "Fabric Selection",
      description: "Choose from our curated collection of the world's finest fabrics.",
    },
    {
      number: "04",
      title: "Pattern Creation",
      description: "Individual pattern created specifically for your unique body shape.",
    },
    {
      number: "05",
      title: "First Fitting",
      description: "Initial fitting to ensure the garment drapes perfectly.",
    },
    {
      number: "06",
      title: "Final Creation",
      description: "Meticulous hand-finishing and final fitting of your bespoke garment.",
    },
  ]

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">The Process</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Masterful Craftsmanship
            <br />
            <span className="italic font-normal">In Every Stitch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From the first consultation to the final stitch, every step is executed with precision and care by our
            master artisans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {craftSteps.map((step) => (
            <div key={step.number} className="group">
              <p className="text-6xl font-light text-secondary/20 group-hover:text-secondary/40 transition-colors mb-4">
                {step.number}
              </p>
              <h3 className="text-2xl font-normal text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative h-[500px] rounded-sm overflow-hidden">
          <img src="/images/craftmanpict.jpg" alt="Craftsmanship detail" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
