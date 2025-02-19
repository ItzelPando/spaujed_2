"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Ir a la página de inicio">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MIHY58rJ4NdWAHQVtHeNfAwRVJoyIV.png"
              alt="SPAUJED Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <form
              onSubmit={handleSearch}
              className={`hidden md:flex items-center ${searchVisible ? "flex" : "hidden"}`}
            >
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-48 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchVisible(!searchVisible)}>
              <Search className="h-6 w-6" />
            </Button>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/noticias" className="text-gray-600 hover:text-red-600">
                Noticias
              </Link>
              <Link href="/documentos" className="text-gray-600 hover:text-red-600">
                Documentos
              </Link>
              <Link href="/tramites" className="text-gray-600 hover:text-red-600">
                Trámites
              </Link>
              <Link href="/nosotros" className="text-gray-600 hover:text-red-600">
                Nosotros
              </Link>
              <Link href="/login">
                <Button variant="destructive">Iniciar sesión</Button>
              </Link>
            </nav>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/noticias" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Noticias
                  </Link>
                  <Link href="/documentos" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Documentos
                  </Link>
                  <Link href="/tramites" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Trámites
                  </Link>
                  <Link href="/nosotros" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Nosotros
                  </Link>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="destructive" className="w-full">
                      Iniciar sesión
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <form onSubmit={handleSearch} className={`md:hidden px-4 py-2 ${searchVisible ? "block" : "hidden"}`}>
        <Input
          type="search"
          placeholder="Buscar..."
          className="w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </header>
  )
}

