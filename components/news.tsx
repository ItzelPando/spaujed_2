import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const news = [
  {
    title: "Resultados y formato de retabulación",
    date: "noviembre 8, 2024",
    description: "Resultados de retabulación 2024",
    image: "https://placehold.co/600x400/red/white?text=Noticia+1",
  },
  {
    title: "Beneficios de nómina Banamex",
    date: "mayo 13, 2024",
    description: "Promoción Gana un Auto Reclamación de Siniestro",
    image: "https://placehold.co/600x400/red/white?text=Noticia+2",
  },
  {
    title: "Concursos por oposición",
    date: "febrero 7, 2024",
    description: "Febrero de 2024: Concurso por oposición",
    image: "https://placehold.co/600x400/red/white?text=Noticia+3",
  },
]

export function News() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Últimas noticias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-sm text-gray-500">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

