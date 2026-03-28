import type React from "react"
import type { Metadata } from "next"
import Script from 'next/script'
import { Cormorant_Garamond, Geist_Mono } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Beauty Tailor - Bespoke Tailoring Since 1935",
  description:
    "Legendary bespoke tailoring house crafting exceptional garments from the finest materials since 1930. Discover timeless elegance and unparalleled craftsmanship.",
  generator: "v0.app",
  icons: {
    icon: "/logo-beauty.png",
    apple: "/logo-beauty.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorantGaramond.className} antialiased`}>
        {children}

        {/* Global Site Tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17068113026"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17068113026');
          `}
        </Script>
      </body>
    </html>
  )
}
