import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SPAUJED - Sindicato de Personal Académico de la UJED",
    template: "%s | SPAUJED",
  },
  description:
    "Sindicato de Personal Académico de la Universidad Juárez del Estado de Durango. Defendemos los derechos laborales y promovemos el desarrollo profesional de nuestros agremiados.",
  keywords: ["SPAUJED", "sindicato", "académico", "UJED", "Durango", "educación superior"],
  authors: [{ name: "SPAUJED" }],
  creator: "SPAUJED",
  publisher: "SPAUJED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.spaujed.org",
    siteName: "SPAUJED",
    images: [
      {
        url: "/principal.jpg",
        width: 1200,
        height: 630,
        alt: "SPAUJED - Sindicato de Personal Académico de la UJED",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spaujed",
    creator: "@spaujed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {!isDashboardRoute() && <Navbar />}
          <main>{children}</main>
          {!isDashboardRoute() && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  )
}

function isDashboardRoute() {
  // Esta es una implementación básica. En un entorno real,
  // necesitarías una forma más robusta de detectar las rutas del dashboard.
  return typeof window !== "undefined" && window.location.pathname.startsWith("/dashboard")
}



import './globals.css'