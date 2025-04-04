"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/lib/auth"

// Definimos el esquema de validación con Zod
const loginSchema = z.object({
  matricula: z.string().min(1, { message: "La matrícula es requerida" }), // Agregado para matricula
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }), // Contraseña
})

// Inferimos el tipo TypeScript del esquema
type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    router.push("/dashboard")
    // Aquí iría la lógica para enviar los datos al servidor
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl grid md:grid-cols-2 p-0 overflow-hidden">
          {/* Columna Izquierda */}
          <div className="bg-[#f8f9fa] p-8 flex flex-col items-center justify-center space-y-8">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MIHY58rJ4NdWAHQVtHeNfAwRVJoyIV.png"
                alt="Logo SPAUJED"
                width={300}
                height={100}
                className="w-auto h-16"
              />
            </Link>
            <div className="relative w-64 h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tchUSpvTr79uZKRZ0oRaCGuLNCKqri.png"
                alt="Escudo UJED"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="bg-white p-8 flex flex-col justify-center">
            {/* Logo en móvil */}
            <div className="md:hidden flex justify-center mb-8">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MIHY58rJ4NdWAHQVtHeNfAwRVJoyIV.png"
                  alt="Logo SPAUJED"
                  width={200}
                  height={60}
                  className="w-auto h-12"
                />
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-center mb-8">INICIAR SESIÓN</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  type="number"
                  placeholder="Matricula"
                  {...register("matricula")}
                  className="w-full px-4 py-2 text-lg border rounded-md"/>
                {errors.matricula && <p className="text-red-500 text-sm mt-1">{errors.matricula.message}</p>}
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password")} // Sin cambios aquí
                  className="w-full px-4 py-2 text-lg border rounded-md pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg">
                INICIAR SESIÓN
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">O</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border border-gray-300 py-3 flex items-center justify-center gap-2 text-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Iniciar sesión con Google
              </Button>

              <div className="text-center space-y-2 text-gray-600">
                <Link href="/forgot-password" className="block hover:text-red-500">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </main>
    </div>
  )
}
