import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    id: 1,
    category: "SUITS",
    name: "Classic Taupe Double-Breasted Suit",
    price: "$1,289",
    image: "/images/suit-taupe.jpg",
    query: "elegant Asian man wearing taupe double breasted suit professional luxury tailoring",
  },
  {
    id: 2,
    category: "BLAZERS",
    name: "Heritage Green Check Blazer",
    price: "$895",
    image: "/images/blazer-green.jpg",
    query: "sophisticated Asian man in luxury green check pattern blazer elegant style",
  },
  {
    id: 3,
    category: "SUITS",
    name: "Luxe Burgundy Evening Suit",
    price: "$1,545",
    image: "/images/suit-burgundy.jpg",
    query: "stylish Asian man wearing premium burgundy double breasted evening suit",
  },
  {
    id: 4,
    category: "BLAZERS",
    name: "Sky Blue Textured Blazer",
    price: "$795",
    image: "/images/blazer-blue.jpg",
    query: "Asian man in sky blue textured wool blazer luxury fashion photography",
  },
  {
    id: 5,
    category: "BLAZERS",
    name: "Burgundy Gold Button Blazer",
    price: "$925",
    image: "/images/blazer-burgundy.jpg",
    query: "elegant Asian man wearing burgundy blazer with gold buttons sophisticated",
  },
  {
    id: 6,
    category: "SUITS",
    name: "Navy Three-Piece Suit",
    price: "$1,450",
    image: "/images/suit-navy.jpg",
    query: "Asian man in navy blue three piece suit double breasted luxury tailoring",
  },
  {
    id: 7,
    category: "SUITS",
    name: "Signature Taupe Suit",
    price: "$1,289",
    image: "/images/suit-taupe-2.jpg",
    query: "distinguished Asian man wearing taupe beige double breasted suit classic",
  },
  {
    id: 8,
    category: "BLAZERS",
    name: "Grey Double-Breasted Blazer",
    price: "$845",
    image: "/images/blazer-grey.jpg",
    query: "Asian man in grey double breasted blazer with peak lapels refined style",
  },
]

export function Shop() {
  return (
    <section id="shop" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-serif text-5xl text-foreground mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our latest collection of bespoke suits and blazers, crafted with the finest materials and
              timeless elegance
            </p>
          </div>
          <Button variant="link" className="text-foreground hover:text-primary text-base">
            View All →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-none bg-card cursor-pointer transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={`${product.image}?height=600&width=450&query=${encodeURIComponent(product.query)}`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-widest text-muted-foreground mb-2">{product.category}</p>
                <h3 className="font-serif text-lg text-foreground mb-3 leading-tight">{product.name}</h3>
                <p className="text-xl font-light text-foreground">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-6 text-base border-2 hover:bg-foreground hover:text-background transition-all bg-transparent"
          >
            Explore Full Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
