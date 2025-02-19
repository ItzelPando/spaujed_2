import { Card } from "@/components/ui/card"
import type React from "react"

interface TramiteGeneralProps {
  title: string
  description: string
  icon: React.ElementType
  requisitos: string[]
  proceso: string[]
}

export function TramiteGeneral({ title, description, icon: Icon, requisitos, proceso }: TramiteGeneralProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">{description}</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Requisitos</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {requisitos.map((requisito, index) => (
                <li key={index}>{requisito}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Proceso</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {proceso.map((paso, index) => (
                <li key={index}>{paso}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Card>
  )
}

