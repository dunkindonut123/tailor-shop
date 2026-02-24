export function Gallery() {
  // Create 16 images from gallery-picts folder
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    src: `/images/gallery-picts/gal-${i + 1}.png`,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <section id="gallery" className="py-0 bg-background">
      <div className="w-full">
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Follow Us</h2>
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
