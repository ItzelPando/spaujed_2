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
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
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

            <h1 className="text-3xl font-bold text-center mb-4">INICIAR SESIÓN</h1>
            <h2 className="text-xl font-medium text-center text-gray-600 mb-4">
              Bienvenido al Sindicato de Personal Académico de la UJED
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
<<<<<<< HEAD
                  type="number"
                  placeholder="Matricula"
                  {...register("matricula")}
                  className="w-full px-4 py-2 text-lg border rounded-md"/>
=======
                  type="text"
                  placeholder="Matricula"
                  {...register("matricula")}
                  className="w-full px-4 py-2 text-lg border rounded-md"
                />
>>>>>>> 2fc1b4f2c379c6204dcdb4c4808dd259ab7d3eb3
                {errors.matricula && <p className="text-red-500 text-sm mt-1">{errors.matricula.message}</p>}
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password")}
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
            </form>
          </div>
        </Card>
      </main>
    </div>
  )
}
