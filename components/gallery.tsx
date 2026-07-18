const GALLERY_ALTS = [
  "Jas bespoke The Beauty Tailor di atelier",
  "Detail jahitan tangan pada jas custom",
  "Fitting jas pria di The Beauty Tailor Jakarta",
  "Kain wool Italia untuk jas bespoke",
  "Proses pembuatan jas full canvas",
  "Pelanggan dalam jas custom Jakarta",
  "Detail kerah dan lapel jas bespoke",
  "Jas pengantin pria custom",
  "Atelier The Beauty Tailor Hayam Wuruk",
  "Pemilihan kain untuk jas custom",
  "Jahitan presisi pada lengan jas",
  "Potongan jas formal pria",
  "Warisan craftsmanship tailor Jakarta",
  "Jas tuxedo custom The Beauty Tailor",
  "Detail kancing dan lining jas bespoke",
  "Hasil akhir jas custom siap pakai",
] as const

export function Gallery() {
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    src: `/images/gallery-picts/gal-${i + 1}.png`,
    alt: GALLERY_ALTS[i],
  }))

  return (
    <section id="gallery" className="py-0 bg-background">
      <div className="w-full">
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Ikuti Kami</h2>
        </div>
        <div className="grid grid-cols-4 gap-0">
          {images.map((image) => (
            <a
              key={image.id}
              href="https://www.instagram.com/thebeauty_tailor/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden bg-muted flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
