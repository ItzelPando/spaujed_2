import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="relative w-full mt-16">
      <div className="relative h-[500px] md:h-[600px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://www.spaujed.org/wp-content/uploads/2024/01/mAIN-scaled.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sindicato de Personal Académico
              <span className="block mt-2">de la UJED</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">¡Bienvenido! Descarga aquí nuestra gaceta oficial</p>
            <Button variant="destructive" size="lg">
              Pasión Sindical
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

