import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NKS | Niyashi Kaushik Spaces",
  description:
    "Boutique interior design and styling studio. Rooted in process clarity, material intelligence, and long-term value.",
  generator: "v0.app",
  keywords: ["interior design", "luxury interiors", "boutique studio", "residential design", "material intelligence"],
}

export const viewport: Viewport = {
  themeColor: "#f5f3f0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
