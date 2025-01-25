import { getCar } from '@/lib/actions/carActions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function CarDetailsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const car = await getCar(id)

  if (!car) {
    return <div>Car not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
          <p className="text-xl mb-4">{car.model}</p>
          <p className="text-2xl font-bold mb-6">${car.price}/day</p>
          <Link href={`/payment/${id}`}>
            <Button>Rent Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}