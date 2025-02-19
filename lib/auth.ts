"use client"

import { useRouter } from "next/navigation"

export function useAuth() {
  const router = useRouter()

  const logout = () => {
    // Aquí iría la lógica para cerrar la sesión en el backend
    // Por ahora, solo redirigiremos al usuario a la página de inicio
    router.push("/")
  }

  return { logout }
}

