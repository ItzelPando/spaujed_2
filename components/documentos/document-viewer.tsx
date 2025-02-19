import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface DocumentViewerProps {
  title: string
  description: string
  icon: LucideIcon
}

export function DocumentViewer({ title, description, icon: Icon }: DocumentViewerProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500">Seleccione un documento para visualizar su contenido.</p>
        </div>
      </div>
    </Card>
  )
}

