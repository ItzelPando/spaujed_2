"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface File {
  id: number
  name: string
  size: string
  uploadedBy: string
  date: string
}

export default function DashboardPage() {
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    // Simulando la obtención de datos de archivos. En un proyecto real, usarías una API.
    const fetchedFiles = [
      { id: 1, name: "Archivo1.pdf", size: "1.5MB", uploadedBy: "Juan Pérez", date: "2025-03-01" },
      { id: 2, name: "Imagen2.jpg", size: "500KB", uploadedBy: "María López", date: "2025-03-02" },
      { id: 3, name: "Informe3.docx", size: "2.2MB", uploadedBy: "Carlos Martínez", date: "2025-03-03" },
      { id: 4, name: "Presentación4.pptx", size: "3MB", uploadedBy: "Ana García", date: "2025-03-04" }
    ]
    setFiles(fetchedFiles)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard de Archivos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total de Archivos Subidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{files.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Archivos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {files.slice(0, 3).map((file) => (
                <li key={file.id} className="flex items-center mb-2">
                  <span className="text-sm">{file.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Archivos por Usuario</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {Object.entries(
                files.reduce((acc, file) => {
                  acc[file.uploadedBy] = acc[file.uploadedBy] || []
                  acc[file.uploadedBy].push(file)
                  return acc
                }, {} as Record<string, File[]>)
              ).map(([user, userFiles]) => (
                <div key={user}>
                  <h3 className="font-bold text-lg">{user}</h3>
                  <ul>
                    {userFiles.map((file) => (
                      <li key={file.id}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acciones Administrativas</CardTitle>
          </CardHeader>
          <CardContent>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full mb-4">
              Subir Nuevo Archivo
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
              Eliminar Archivos Seleccionados
            </button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Detalles de Archivos Subidos</h3>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Nombre</th>
              <th className="p-2">Tamaño</th>
              <th className="p-2">Subido por</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td className="p-2">{file.name}</td>
                <td className="p-2">{file.size}</td>
                <td className="p-2">{file.uploadedBy}</td>
                <td className="p-2">{file.date}</td>
                <td className="p-2">
                  <button className="text-blue-600">Descargar</button>
                  <button className="text-red-600 ml-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
