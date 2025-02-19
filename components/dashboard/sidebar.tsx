import Link from "next/link"
import Image from "next/image"
import { Home, FileText, Users, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r">
      <div className="h-16 flex items-center px-6 border-b">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MIHY58rJ4NdWAHQVtHeNfAwRVJoyIV.png"
          alt="SPAUJED Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </div>
      <nav className="space-y-1 pt-4">
        <Link
          href="/dashboard"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Home className="h-5 w-5 mr-3 text-gray-500" />
          <span className="text-sm font-medium">Inicio</span>
        </Link>
        <Link
          href="/dashboard/documentos"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <FileText className="h-5 w-5 mr-3 text-gray-500" />
          <span className="text-sm font-medium">Documentos</span>
        </Link>
        <Link
          href="/dashboard/usuarios"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Users className="h-5 w-5 mr-3 text-gray-500" />
          <span className="text-sm font-medium">Usuarios</span>
        </Link>
        <Link
          href="/dashboard/configuracion"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Settings className="h-5 w-5 mr-3 text-gray-500" />
          <span className="text-sm font-medium">Configuración</span>
        </Link>
      </nav>
    </aside>
  )
}

