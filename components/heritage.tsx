"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Heritage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/images/heritage-picts/1935.png",
    "/images/heritage-picts/1960.png",
    "/images/heritage-picts/1980.png",
    "/images/heritage-picts/1985.png",
  ]

  const scroll = (direction: "left" | "right") => {
    let newIndex = currentIndex
    if (direction === "left") {
      newIndex = Math.max(0, currentIndex - 1)
    } else {
      newIndex = Math.min(images.length - 1, currentIndex + 1)
    }
    setCurrentIndex(newIndex)

    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="heritage" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden rounded-sm max-w-2xl"
              style={{ scrollBehavior: "smooth" }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Heritage image ${index + 1}`}
                  className="w-full flex-shrink-0 rounded-sm shadow-md"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <ChevronLeft className="text-secondary" size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === images.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <ChevronRight className="text-secondary" size={24} />
            </button>

            {/* Image Counter */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance leading-tight">
              A Legacy of Excellence
              <br />
              <span className="italic font-normal">Since 1935</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-light">
                For nearly a century, our atelier has been synonymous with uncompromising quality and timeless elegance.
                Founded in 1935, we have dressed generations of discerning gentlemen who appreciate the finest
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
                <p className="text-4xl font-light text-foreground mb-2">1935</p>
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
