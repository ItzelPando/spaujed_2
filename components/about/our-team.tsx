'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const teamMembers = [
  {
    name: "Lic. T.S. Artemio Oliván Santos",
    position: "Secretario de Organización",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/TEMO.png",
  },
  {
    name: "M.P.E. Hilda Yamilé Rosales Madera",
    position: "Secretaria de Conflictos y del Trabajo",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/1-1.png",
  },
  {
    name: "D.G.A.P. Gerardo Frayre Vázquez",
    position: "Secretario de Finanzas y Administración",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/Frayre.png",
  },
  {
    name: "M.E. Johanna Prado Stampfler",
    position: "Secretaria de Asuntos Académicos",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/jOHANNA.png",
  },
  {
    name: "C.D. Yomayna Bermúdez Ramírez",
    position: "Secretaria de Prensa y Propaganda",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/2-1.png",
  },
  {
    name: "M.C.S. Adriana E. Ricartti Villagrán",
    position: "Secretaria de Eduacación Sindical",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/3-1.png",
  },
  {
    name: "M.E. José Alberto Pérez de la Cruz",
    position: "Secretario de Prestaciones y Asistencia Social",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/10.png",
  },
  {
    name: "M.C.M. Minerva Arreola Gamboa",
    position: "Secretaria de Deportes y Recreación",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/14.png",
  },
  {
    name: "M.A.I.E. José de Jesús Martínez Gallegos",
    position: "Secretario de Jubilaciones y Pensiones",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/Pepe-Mtz.png",
  },
  {
    name: "MD. María de la Luz Gurrola Ríos",
    position: "Secretaria de Actas, Archivo y Estadística.",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/9.png",
  },
  {
    name: "D.E. Rosa Carmín González Peyro",
    position: "Secretaria de Vinculación y Eventos Especiales",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/4-2.png",
  },
  {
    name: "L.N. Mayra Judithsy Alanís Hernández",
    position: "Secretaria de Relaciones Públicas",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/13.png",
  },
  {
    name: "Dr. Eliu Jahaziel Reyes Reyes",
    position: "Secretario de Cultura",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/11.png",
  },
  {
    name: "Dra. Cipactli Andrade Villegas",
    position: "Asesora Jurídica",
    image: "https://www.spaujed.org/wp-content/uploads/2024/01/8.png",
  },
]

const mainMember = {
  name: "Dr. Érik Iván Hernández Cosain",
  position: "Secretario General del SPAUJED",
  image: "https://www.spaujed.org/wp-content/uploads/2024/01/Cosain.png",
}

export function OurTeam() {
  const [showMore, setShowMore] = useState(false)

  const displayedMembers = showMore ? teamMembers : teamMembers.slice(0, 4)

  return (
    <section className="py-24">-
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4 flex justify-center mb-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-112 w-full max-w-md">
              <div className="h-80 relative">
                <Image
                  src={mainMember.image || "https://www.spaujed.org/wp-content/uploads/2024/01/Cosain.png"}
                  alt={mainMember.name}
                  fill
                  objectFit="contain"
                  className="object-cover object-top rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{mainMember.name}</h3>
                <p className="text-gray-600 leading-relaxed">{mainMember.position}</p>
              </CardContent>
            </Card>
          </div>
          {displayedMembers.map((member) => (
            <Card key={member.name} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-60 relative">
                <Image
                  src={member.image || ""}
                  alt={member.name}
                  fill
                  className="object-cover object-top rounded-t-lg"
                />
              </div>
              <CardContent className="p-2">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="bg-red-600 text-white hover:bg-red-100"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ver menos" : "Ver más"}
          </Button>
        </div>
      </div>
    </section>
  )
}




