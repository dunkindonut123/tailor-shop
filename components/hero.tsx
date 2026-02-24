import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-man-in-tailored-suit-walking-through-stree.jpg"
          alt="Gentleman in bespoke suit in Rome"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Since 1935</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 text-balance leading-[1.1]">
          The Art of
          <br />
          <span className="font-normal italic">Bespoke Elegance</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Specializing in tradition full canvas construction using premim Zegna fabrics.
          <br />
          Book a private fitting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            Discover Our Heritage
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button size="lg" variant="outline">
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-foreground/20 animate-pulse" />
      </div>
    </section>
  )
}
