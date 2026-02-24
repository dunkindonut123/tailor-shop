import { Hero } from "@/components/hero"
import { Heritage } from "@/components/heritage"
import { Craftsmanship } from "@/components/craftsmanship"
import { Materials } from "@/components/materials"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Shop } from "@/components/shop"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Heritage />
      <Craftsmanship />
      <Materials />
      {/* <Shop /> */}
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
