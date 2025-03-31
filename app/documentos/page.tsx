"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  FileText,
  Scale,
  Calculator,
  TrendingUp,
  FileCheck,
  Gavel,
  BarChart,
  Users,
  CreditCard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DocumentViewer } from "@/components/documentos/document-viewer"
import Head from "next/head"

const documentos = [
  {
    id: 1,
    title: "Estatutos",
    description: "Estatutos y reglamentos del Sindicato de Personal Académico de la UJED.",
    icon: FileText,
    documentUrl: "https://drive.google.com/file/d/1kVF78q1ZRfA-u2TF55l3CE6kCmgUSiE7/view",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Contratos Colectivos",
    description: "Contratos colectivos de trabajo vigentes.",
    icon: Scale,
    documentUrl: "https://drive.google.com/file/d/1d-jsHP1n1TsZPRstPyCK5zyerpv6H4ih/view",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Medidas compensatorias",
    description: "Información sobre medidas compensatorias para el personal académico.",
    icon: Calculator,
    documentUrl: "https://drive.google.com/file/d/10z9-FTnzdOB0VihFb5qv57RzfCKQtGto/view",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Retabulación",
    description: "Proceso y resultados de retabulación.",
    icon: TrendingUp,
    documentUrl: "https://drive.google.com/file/d/1zPQoyH-f2V1BPQgCLmXaM-RebpAW1hcq/view",
    imageUrl: "https://via.placeholder.com/150",
  },
]

export default function DocumentosPage() {
  const [selectedDocument, setSelectedDocument] = useState(documentos[0])

  return (
    <>
      <Head>
        <title>Documentos | SPAUJED</title>
        <meta
          name="description"
          content="Acceda a documentos importantes de SPAUJED, incluyendo estatutos, contratos colectivos, convenios y más."
        />
        <meta
          name="keywords"
          content="SPAUJED, documentos, estatutos, contratos colectivos, convenios, informes"
        />
      </Head>
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold mb-12 text-center">Documentos</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mini Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <Card className="p-4">
              <nav className="space-y-1">
                {documentos.map((documento) => (
                  <button
                    key={documento.id}
                    onClick={() => setSelectedDocument(documento)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      selectedDocument.id === documento.id
                        ? "bg-red-50 text-red-600"
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <documento.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="flex-grow text-left">{documento.title}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <DocumentViewer
              title={selectedDocument.title}
              description={selectedDocument.description}
              icon={selectedDocument.icon}
              documentUrl={selectedDocument.documentUrl}
              imageUrl={selectedDocument.imageUrl ?? ""} // Hace que sea opcional
            />
          </main>
        </div>
      </div>
    </>
  )
}
