import { LandingHero } from "@/components/landing-hero"
import { Features } from "@/components/features"
import { News } from "@/components/news"
import type { Metadata } from "next"
import { JsonLd } from "react-schemaorg"
import type { Organization } from "@schema-org-jsonld/schema-org-types"

export const metadata: Metadata = {
  title: "Inicio | SPAUJED",
  description:
    "SPAUJED: Defendiendo los derechos laborales y promoviendo el desarrollo profesional de los académicos de la UJED.",
}

export default function Home() {
  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SPAUJED",
          url: "https://www.spaujed.org",
          logo: "https://www.spaujed.org/logo.png",
          sameAs: [
            "https://www.facebook.com/spaujed",
            "https://twitter.com/spaujed",
            "https://www.instagram.com/spaujed",
          ],
        }}
      />
      <main className="flex min-h-screen flex-col">
        <LandingHero />
        <Features />
        <News />
      </main>
    </>
  )
}

