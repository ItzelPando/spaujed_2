
import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { OurTeam } from "@/components/about/our-team"
import { History } from "@/components/about/history"
import { JsonLd } from "react-schemaorg"
import type { AboutPage } from "schema-dts"

export const metadata: Metadata = {
  title: "Nosotros | SPAUJED",
  description:
    "Conozca más sobre el Sindicato de Personal Académico de la Universidad Juárez del Estado de Durango. Nuestra misión, visión, equipo e historia.",
  keywords: ["SPAUJED", "historia", "misión", "visión", "equipo directivo", "sindicato académico"],
}

export default function NosotrosPage() {
  return (
    <>
      <JsonLd<AboutPage>
        item={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Acerca de SPAUJED",
          description:
            "Información sobre el Sindicato de Personal Académico de la Universidad Juárez del Estado de Durango",
        }}
      />
      <main className="flex min-h-screen flex-col">
        <AboutHero />
        <MissionVision />
        <OurTeam />
        <History />
      </main>
    </>
  )
}

