export const SITE_URL = "https://thebeautytailor.id"

export const SITE_NAME = "The Beauty Tailor"

export const SITE_TITLE =
  "Penjahit Jas Custom Jakarta Sejak 1935 | The Beauty Tailor"

export const SITE_DESCRIPTION =
  "Penjahit jas custom & bespoke di Jakarta Pusat sejak 1935. Full canvas, wool Italia, Express 72 jam. Konsultasi & fitting di Jl. Hayam Wuruk No.25."

export const OG_IMAGE_PATH = "/images/heropict.jpg"

export const NAP = {
  streetAddress: "Jalan Hayam Wuruk No 25",
  addressLocality: "Jakarta Pusat",
  addressRegion: "DKI Jakarta",
  addressCountry: "ID",
  telephone: "+62213451127",
  email: "info@thebeautytailor.id",
  instagram: "https://www.instagram.com/thebeauty_tailor/",
} as const

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Tailor"],
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    telephone: NAP.telephone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [NAP.instagram],
  }
}
