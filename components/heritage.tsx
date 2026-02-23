export function Heritage() {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HW_1935_img002-1qC57I4Zv3YppFBeD72onMpE6R1xwv.jpg"
              alt="Heritage since 1930"
              className="w-full h-auto rounded-sm shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance leading-tight">
              A Legacy of Excellence
              <br />
              <span className="italic font-normal">Since 1930</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-light">
                For nearly a century, our atelier has been synonymous with uncompromising quality and timeless elegance.
                Founded in 1930, we have dressed generations of discerning gentlemen who appreciate the finest
                craftsmanship.
              </p>
              <p className="text-lg font-light">
                Our legacy is built on three pillars: masterful technique passed down through generations, an unwavering
                commitment to the world's finest materials, and a dedication to creating garments that transcend
                fleeting trends.
              </p>
              <p className="text-lg font-light">
                Each piece we create is a testament to our heritage—a perfect marriage of traditional savoir-faire and
                contemporary refinement.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-4xl font-light text-foreground mb-2">1930</p>
                <p className="text-sm text-muted-foreground">Established</p>
              </div>
              <div>
                <p className="text-4xl font-light text-foreground mb-2">{"10,000+"}</p>
                <p className="text-sm text-muted-foreground">Bespoke Suits</p>
              </div>
              <div>
                <p className="text-4xl font-light text-foreground mb-2">3rd</p>
                <p className="text-sm text-muted-foreground">Generation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
