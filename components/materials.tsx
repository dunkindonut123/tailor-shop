export function Materials() {
  const materials = [
    {
      name: "Zegna",
      description: "The world's finest wools and cashmeres from Italian excellence.",
      image: "/images/logo.png",
    },
    {
      name: "Scabal",
      description: "Belgian heritage fabrics renowned for superior quality and innovation.",
      image: "/images/logo2.png",
    },
    {
      name: "Dormeuil",
      description: "French prestige fabrics with unparalleled softness and drape.",
      image: "/cashmere-fabric-luxury-texture.jpg",
    },
    {
      name: "Holland & Sherry",
      description: "British craftsmanship representing the pinnacle of textile artistry.",
      image: "/fine-british-wool-fabric.jpg",
    },
  ]

  return (
    <section id="materials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Premium Materials</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            The World's Finest
            <br />
            <span className="italic font-normal">Fabric Houses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We source exclusively from the most prestigious fabric mills, ensuring every garment is crafted from
            materials of exceptional quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material) => (
            <div key={material.name} className="group cursor-pointer">
              <div className="relative h-[400px] mb-6 overflow-hidden rounded-sm">
                <img
                  src={material.image || "/placeholder.svg"}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-normal text-foreground mb-3">{material.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{material.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Each fabric in our collection is personally selected for its exceptional quality, luxurious hand-feel, and
            timeless aesthetic. We maintain relationships with the world's premier mills to ensure access to the most
            exclusive and refined materials available.
          </p>
        </div>
      </div>
    </section>
  )
}
