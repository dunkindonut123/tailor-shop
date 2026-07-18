export function Craftsmanship() {
  const craftSteps = [
    {
      number: "01",
      title: "Konsultasi",
      description: "Pertemuan pribadi untuk memahami gaya, preferensi, dan kebutuhan Anda.",
    },
    {
      number: "02",
      title: "Pengukuran",
      description: "Pengukuran akurat oleh master tailor kami demi kecocokan sempurna.",
    },
    {
      number: "03",
      title: "Pemilihan Kain",
      description: "Pilih dari koleksi kain terbaik dunia yang kami kurasi.",
    },
    {
      number: "04",
      title: "Pembuatan Pola",
      description: "Pola individual dibuat khusus sesuai bentuk tubuh unik Anda.",
    },
    {
      number: "05",
      title: "Fitting Pertama",
      description: "Fitting awal untuk memastikan pakaian jatuh dengan sempurna.",
    },
    {
      number: "06",
      title: "Penyelesaian Akhir",
      description: "Finishing tangan yang teliti dan fitting akhir pada pakaian bespoke Anda.",
    },
  ]

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Prosesnya</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Keahlian Mahir
            <br />
            <span className="italic font-normal">Di Setiap Jahitan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dari konsultasi pertama hingga jahitan terakhir, setiap langkah dikerjakan dengan ketelitian dan kepedulian
            oleh para artisan ahli kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {craftSteps.map((step) => (
            <div key={step.number} className="group">
              <p className="text-6xl font-light text-secondary/20 group-hover:text-secondary/40 transition-colors mb-4">
                {step.number}
              </p>
              <h3 className="text-2xl font-normal text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative h-[500px] rounded-sm overflow-hidden">
          <img src="/images/craftmanpict.jpg" alt="Detail keahlian menjahit" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
