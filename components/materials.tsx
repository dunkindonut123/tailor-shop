"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Materials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const logos = [
    {
      src: "/images/zegna.png",
      alt: "Zegna",
      name: "Zegna",
      description: "The world's finest wools and cashmeres from Italian excellence.",
    },
    {
      src: "/images/Dormuiel.png",
      alt: "Dormeuil",
      name: "Dormeuil",
      description: "French prestige fabrics with unparalleled softness and drape.",
    },
    {
      src: "/images/holland.png",
      alt: "Holland & Sherry",
      name: "Holland & Sherry",
      description: "Belgian heritage fabrics renowned for superior quality and innovation.",
    },
    {
      src: "/images/scabal.png",
      alt: "Scabal",
      name: "Scabal",
      description: "British craftsmanship representing the pinnacle of textile artistry.",
    },
    {
      src: "/images/Albini.png",
      alt: "Albini",
      name: "Albini",
      description: "Italian excellence in fine cotton shirting fabrics.",
    },
    {
      src: "/images/Thomas.png",
      alt: "Thomas",
      name: "Thomas",
      description: "Premium fabrics with timeless elegance and superior quality.",
    },
    {
      src: "/images/Soktas.png",
      alt: "Soktas",
      name: "Soktas",
      description: "Turkish textile heritage with modern sophistication.",
    },
  ]

  // Check scroll position and loop infinitely
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      const itemWidth = (scrollWidth / 3) // We have 3x the logos (original + 2 copies)

      // If scrolled past the original set to the right, jump back to the start of second set
      if (scrollLeft >= itemWidth * 2) {
        container.scrollLeft = itemWidth
      }
      // If scrolled before the original set to the left, jump to the end of second set
      else if (scrollLeft <= 0) {
        container.scrollLeft = itemWidth
      }
    }

    container.addEventListener('scroll', handleScroll)
    // Set initial position to middle set
    container.scrollLeft = (container.scrollWidth / 3)

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const itemWidth = 320 // w-80 = 320px
    const currentScroll = container.scrollLeft
    const setWidth = itemWidth * 7 // 7 logos per set
    
    // Calculate the next position to snap to
    let targetScroll
    if (direction === "left") {
      targetScroll = currentScroll - itemWidth
    } else {
      targetScroll = currentScroll + itemWidth
    }
    
    const duration = 1000 // Scroll duration in milliseconds
    const startTime = Date.now()
    const startScroll = currentScroll

    const animateScroll = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      
      let newScroll = startScroll + (targetScroll - startScroll) * easeProgress
      
      // Handle infinite loop wrapping
      const { scrollWidth, clientWidth } = container
      const maxScroll = scrollWidth - clientWidth
      const oneSetWidth = scrollWidth / 3
      
      if (newScroll >= oneSetWidth * 2) {
        container.scrollLeft = oneSetWidth
      } else if (newScroll <= 0) {
        container.scrollLeft = oneSetWidth
      } else {
        container.scrollLeft = newScroll
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

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

        {/* Horizontal Scrollable Logo Container */}
        <div className="mt-16 mb-16 relative max-w-6xl mx-auto border-t border-b border-secondary/30 py-8">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-secondary" size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-0 overflow-x-auto scrollbar-hide px-16 items-center cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Render logos 3 times for infinite loop effect */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-80 flex flex-col items-center justify-start px-4">
                <div className="h-48 flex items-center justify-center mb-4 w-full">
                  <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain pointer-events-none select-none" draggable={false} />
                </div>
                <h3 className="text-lg font-normal text-foreground mb-2">{logo.name}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{logo.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-secondary/20 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-secondary" size={24} />
          </button>
        </div>

        <div className="text-center">
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
