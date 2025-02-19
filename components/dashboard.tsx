import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Panel de Control</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Valor del Portafolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$1,234,567</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inversiones Activas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">15.7%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

