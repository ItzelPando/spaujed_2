import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Negociamos",
    description:
      "A través de las negociaciones contractuales, perseguimos los mejores acuerdos para los trabajadores de la UJED.",
    image: "https://placehold.co/600x400/red/white?text=Negociamos",
  },
  {
    title: "Te impulsamos",
    description:
      "Realizamos actividades que permitan a nuestros agremiados desarrollarse en todos los ámbitos humanos y profesionales.",
    image: "https://placehold.co/600x400/red/white?text=Te+impulsamos",
  },
  {
    title: "Identidad",
    description: "Hacemos todo lo necesario para que no solo seas, sino que también te sientas parte del SPAUJED.",
    image: "https://placehold.co/600x400/red/white?text=Identidad",
  },
  {
    title: "Nos comprometemos",
    description:
      "Adoptamos una política de equidad, en la que sigamos compromisos que permiten avanzar en la protección de los derechos de las y los universitarios.",
    image: "https://placehold.co/600x400/red/white?text=Nos+comprometemos",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-6">Trabajamos para ti</h2>
        <p className="text-center text-gray-600 mb-12">
          Cada una de nuestras acciones están encaminadas a la estabilidad laboral de nuestros agremiados.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-0">
                <div className="h-48 relative">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold mb-3">{feature.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

