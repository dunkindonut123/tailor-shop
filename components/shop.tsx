import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    id: 1,
    category: "JAS",
    name: "Jas Double-Breasted Taupe Klasik",
    price: "$1,289",
  },
  {
    id: 2,
    category: "BLAZER",
    name: "Blazer Check Hijau Heritage",
    price: "$895",
  },
  {
    id: 3,
    category: "JAS",
    name: "Jas Malam Burgundy Mewah",
    price: "$1,545",
  },
  {
    id: 4,
    category: "BLAZER",
    name: "Blazer Bertekstur Biru Langit",
    price: "$795",
  },
  {
    id: 5,
    category: "BLAZER",
    name: "Blazer Burgundy Kancing Emas",
    price: "$925",
  },
  {
    id: 6,
    category: "JAS",
    name: "Jas Tiga Potong Navy",
    price: "$1,450",
  },
  {
    id: 7,
    category: "JAS",
    name: "Jas Taupe Signature",
    price: "$1,289",
  },
  {
    id: 8,
    category: "BLAZER",
    name: "Blazer Double-Breasted Abu-abu",
    price: "$845",
  },
]

export function Shop() {
  return (
    <section id="shop" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-serif text-5xl text-foreground mb-4">Koleksi Terbaru</h2>
            <p className="text-muted-foreground max-w-xl">
              Temukan koleksi terbaru jas dan blazer bespoke kami, dibuat dengan bahan terbaik dan
              keanggunan abadi
            </p>
          </div>
          <Button variant="link" className="text-foreground hover:text-primary text-base">
            Lihat Semua →
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
                  src="/file.svg"
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
            Jelajahi Koleksi Lengkap
          </Button>
        </div>
      </div>
    </section>
  )
}
