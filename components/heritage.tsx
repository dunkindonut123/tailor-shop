"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Heritage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/images/heritage-picts/1935.png",
      alt: "Arsip The Beauty Tailor tahun 1935",
    },
    {
      src: "/images/heritage-picts/1960.png",
      alt: "Arsip The Beauty Tailor tahun 1960",
    },
    {
      src: "/images/heritage-picts/1980.png",
      alt: "Arsip The Beauty Tailor tahun 1980",
    },
    {
      src: "/images/heritage-picts/1985.png",
      alt: "Arsip The Beauty Tailor tahun 1985",
    },
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
              className="flex overflow-x-hidden rounded-sm max-w-2xl h-[656px]"
              style={{ scrollBehavior: "smooth" }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full rounded-sm shadow-md object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft className="text-secondary" size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === images.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Gambar berikutnya"
            >
              <ChevronRight className="text-secondary" size={24} />
            </button>

            {/* Image Counter */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Warisan Kami</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance leading-tight">
              Warisan Keunggulan
              <br />
              <span className="italic font-normal">Sejak 1935</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-light">
                Hampir seabad, atelier kami dikenal dengan kualitas tanpa kompromi dan keanggunan abadi.
                Didirikan pada 1935, kami telah mendandani generasi pria yang menghargai
                keahlian terbaik.
              </p>
              <p className="text-lg font-light">
                Warisan kami dibangun di atas tiga pilar: teknik mahir yang diwariskan lintas generasi, komitmen
                teguh pada bahan terbaik di dunia, dan dedikasi menciptakan pakaian yang melampaui
                tren sesaat.
              </p>
              <p className="text-lg font-light">
                Setiap karya yang kami ciptakan adalah bukti warisan kami—perpaduan sempurna antara savoir-faire
                tradisional dan kehalusan kontemporer.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-4xl font-light text-foreground mb-2">1935</p>
                <p className="text-sm text-muted-foreground">Didirikan</p>
              </div>
              <div>
                <p className="text-4xl font-light text-foreground mb-2">{"10,000+"}</p>
                <p className="text-sm text-muted-foreground">Jas Bespoke</p>
              </div>
              <div>
                <p className="text-4xl font-light text-foreground mb-2">ke-3</p>
                <p className="text-sm text-muted-foreground">Generasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
