"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Car, Home, Wallet, Eye, FileText, FileCheck, GraduationCap, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { TramiteGeneral } from "@/components/tramites/TramiteGeneral"
import { TramiteCreditoVehiculo } from "@/components/tramites/TramiteCreditoVehiculo"
import { TramiteCreditoHipotecario } from "@/components/tramites/TramiteCreditoHipotecario"
import { TramiteCreditoPersonal } from "@/components/tramites/TramiteCreditoPersonal"
import { TramiteExentoPago } from "@/components/tramites/TramiteExentoPago"
import { TramiteBeca } from "@/components/tramites/TramiteBeca"
import { TramiteISSSTEProcedures } from "@/components/tramites/TramiteISSSTEProcedures"
import Head from "next/head"

const tramites = [
  {
    id: 1,
    title: "Crédito de vehículo",
    description:
      "A partir del pasado 1 de agosto de 2023, los préstamos de automóvil tienen un monto máximo de 650 mil pesos, gracias a las gestiones del Comité Ejecutivo.",
    icon: Car,
    contenido: {
      introduccion:
        "Seguimos trabajando en acciones que beneficien a todos los integrantes del SPAUJED, dando respuesta a sus peticiones y favoreciendo su patrimonio de la mejor manera.",
      montoMaximo: "$650,000",
      requisitosNuevo: [
        "Cotización para auto nuevo o lote con razón social en hoja membretada firmada y sellada de la agencia o lote.",
        "Cuentas y claves interbancarias impresa en hoja membretada firmada y sella de la agencia.",
      ],
      requisitosUsado: [
        "Copia de factura para compra a terceros, endoso visible.",
        "Datos bancarios del vendedor en documento oficial, puede ser copia del estado de cuenta o solicitarlos directamente al banco. (CLABE, nombre, cuenta y banco)",
        "Llevar factura original al edificio central antes de realizar transferencia.",
      ],
      requisitosSolicitante: [
        "2 copias del último talón de pago.",
        "2 copias de identificación oficial vigente con fotografía",
        "2 copias comprobante de domicilio.",
      ],
      requisitosAval: [
        "2 copias del último talón de pago.",
        "2 copias de identificación oficial vigente con fotografía.",
      ],
      condiciones: [
        "Aportación extra para el fondo de jubilaciones de $5,000 para auto nuevo y $3,000 para comprar a terceros, PAGAR ANTES DE LOS PRIMEROS 5 DÍAS HÁBILES.",
        "Posterior al trámite asegurar el auto bajo cobertura total. Se entrega copia de póliza y factura a Tesorería de la UJED).",
        "Interés de 7% anual sobre saldos si es menor a $300,000",
        "Interés del 8% si es mayor de $300,001 - $650,000",
        "Plazo máximo 5 años, 120 quincenas",
      ],
      notasImportantes: [
        "Lista de espera aprox. 10 a 15 días hábiles.",
        "El préstamo está sujeto a autorización.",
        "Se autorizan a académicos con titularidad de sus clases.",
        "ADICIONAL A SU DESCUENTO QUINCENAL SE DESCONTARÁ UN SEGURO DE DEUDOR.",
      ],
    },
  },
  {
    id: 2,
    title: "Crédito hipotecario",
    description: "Financiamiento para adquisición, construcción o remodelación de vivienda.",
    icon: Home,
  },
  {
    id: 3,
    title: "Crédito personal",
    description:
      "De diciembre de 2023 a febrero de 2024 están abiertas solicitudes de préstamo con montos máximos de $100,000 a través de la Caja de Ahorro, con interés del 3% para ahorradores y 4 % para no ahorradores.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Lentes",
    description: "Apoyo para adquisición de lentes y atención oftalmológica.",
    icon: Eye,
    requisitos: [
      "Ser miembro activo del SPAUJED",
      "Prescripción médica reciente",
      "Identificación oficial vigente",
      "Último talón de pago",
    ],
    proceso: [
      "Acudir a revisión con oftalmólogo autorizado",
      "Obtener prescripción médica",
      "Presentar solicitud de apoyo",
      "Autorización del beneficio",
      "Adquisición de lentes en ópticas afiliadas",
    ],
  },
  {
    id: 5,
    title: "Convenios vigentes",
    description: "Información sobre convenios activos con diferentes instituciones.",
    icon: FileText,
    requisitos: ["Ser miembro activo del SPAUJED", "Identificación oficial vigente", "Último talón de pago"],
    proceso: [
      "Consultar lista de convenios disponibles",
      "Verificar requisitos específicos del convenio",
      "Solicitar carta de beneficiario",
      "Presentar documentación en institución convenida",
    ],
  },
  {
    id: 6,
    title: "Exentos de pago",
    description: "Gestión de exención de pagos para académicos y sus beneficiarios.",
    icon: FileCheck,
  },
  {
    id: 7,
    title: 'Beca "Lic. Héctor García Calderón"',
    description: "Programa de becas para desarrollo académico de los miembros.",
    icon: GraduationCap,
    requisitos: [
      "Ser miembro activo del SPAUJED",
      "Antigüedad mínima requerida",
      "Carta de aceptación del programa académico",
      "Historial académico",
      "Plan de estudios",
      "Presupuesto detallado",
    ],
    proceso: [
      "Presentar solicitud en período establecido",
      "Entregar documentación completa",
      "Evaluación por comité de becas",
      "Entrevista (si aplica)",
      "Notificación de resultados",
    ],
  },
  {
    id: 8,
    title: "Trámites ISSSTE",
    description: "Gestión y apoyo en trámites relacionados con el ISSSTE.",
    icon: Building2,
  },
]

export default function TramitesPage() {
  const [selectedTramite, setSelectedTramite] = useState(tramites[0])

  return (
    <>
      <Head>
        <title>Trámites y Servicios | SPAUJED</title>
        <meta
          name="description"
          content="Información sobre trámites y servicios ofrecidos por SPAUJED, incluyendo créditos, becas y más."
        />
        <meta name="keywords" content="SPAUJED, trámites, servicios, créditos, becas, ISSSTE" />
      </Head>
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold mb-12 text-center">Trámites y servicios</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mini Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <Card className="p-4">
              <nav className="space-y-1">
                {tramites.map((tramite) => (
                  <button
                    key={tramite.id}
                    onClick={() => setSelectedTramite(tramite)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      selectedTramite.id === tramite.id ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <tramite.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="flex-grow text-left">{tramite.title}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {selectedTramite.id === 1 ? (
              <TramiteCreditoVehiculo
                title={selectedTramite.title}
                description={selectedTramite.description}
                contenido={selectedTramite.contenido}
              />
            ) : selectedTramite.id === 2 ? (
              <TramiteCreditoHipotecario title={selectedTramite.title} description={selectedTramite.description} />
            ) : selectedTramite.id === 3 ? (
              <TramiteCreditoPersonal title={selectedTramite.title} description={selectedTramite.description} />
            ) : selectedTramite.id === 6 ? (
              <TramiteExentoPago title={selectedTramite.title} description={selectedTramite.description} />
            ) : selectedTramite.id === 7 ? (
              <TramiteBeca title={selectedTramite.title} description={selectedTramite.description} />
            ) : selectedTramite.id === 8 ? (
              <TramiteISSSTEProcedures title={selectedTramite.title} description={selectedTramite.description} />
            ) : (
              <TramiteGeneral
                title={selectedTramite.title}
                description={selectedTramite.description}
                icon={selectedTramite.icon}
                requisitos={selectedTramite.requisitos}
                proceso={selectedTramite.proceso}
              />
            )}
          </main>
        </div>
      </div>
    </>
  )
}

