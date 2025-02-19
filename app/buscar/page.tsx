"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { mockData } from "@/lib/mockData"

interface SearchResult {
  title: string
  description: string
  url: string
}

export default function BuscarPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true)
      // Simulamos un pequeño retraso para imitar una búsqueda real
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (query) {
        const lowercaseQuery = query.toLowerCase()
        const filteredResults = mockData.filter(
          (item) =>
            item.title.toLowerCase().includes(lowercaseQuery) ||
            item.description.toLowerCase().includes(lowercaseQuery) ||
            item.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery)),
        )
        setResults(filteredResults)
      } else {
        setResults([])
      }

      setLoading(false)
    }

    fetchSearchResults()
  }, [query])

  if (!query) {
    return <div className="container mx-auto px-4 py-24">Por favor, ingrese un término de búsqueda.</div>
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda para: {query}</h1>
      {loading ? (
        <p>Cargando resultados...</p>
      ) : results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <Link href={result.url} className="text-blue-600 hover:underline">
                    {result.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados para su búsqueda.</p>
      )}
    </div>
  )
}

