import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Juan Pérez",
    position: "Secretario General",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dra. María González",
    position: "Secretaria de Organización",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mtro. Carlos Rodríguez",
    position: "Secretario de Finanzas",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dra. Ana Martínez",
    position: "Secretaria de Actas y Acuerdos",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function OurTeam() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

