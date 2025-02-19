import { Card } from "@/components/ui/card"
import { Car } from "lucide-react"

interface TramiteCreditoVehiculoProps {
  title: string
  description: string
  contenido: {
    introduccion: string
    montoMaximo: string
    requisitosNuevo: string[]
    requisitosUsado: string[]
    requisitosSolicitante: string[]
    requisitosAval: string[]
    condiciones: string[]
    notasImportantes: string[]
  }
}

export function TramiteCreditoVehiculo({ title, description, contenido }: TramiteCreditoVehiculoProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Car className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-8">
        <div className="prose max-w-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Requisitos para trámite de automovil SPAUJED</h2>
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-0.5 px-3 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
              <p className="text-xs text-white font-semibold leading-none">Monto máximo</p>
              <p className="text-xl font-bold text-white leading-tight">{contenido.montoMaximo}</p>
            </div>
          </div>
          <p className="text-lg">{description}</p>
          <p>{contenido.introduccion}</p>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4">Para auto nuevo o compra en lote:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.requisitosNuevo.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Para auto usado: VALOR DEL LIBRO AZUL</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.requisitosUsado.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Solicitante ACADÉMICO con base:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.requisitosSolicitante.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Aval ACADÉMICO con base:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.requisitosAval.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Condiciones del crédito:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.condiciones.map((condicion, index) => (
                <li key={index}>{condicion}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">NOTA IMPORTANTE:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {contenido.notasImportantes.map((nota, index) => (
                <li key={index}>{nota}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Card>
  )
}

