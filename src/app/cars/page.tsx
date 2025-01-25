import { getCars } from '@/lib/actions/carActions'
import CarGrid from '@/components/CarGrid'
import CarSearch from '@/components/CarSearch'

export default async function CarsPage() {
  const cars = await getCars()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Cars</h1>
      <CarSearch />
      <CarGrid cars={cars} />
    </div>
  )
}