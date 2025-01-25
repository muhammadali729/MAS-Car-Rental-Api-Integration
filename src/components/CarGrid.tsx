import { CarType } from '../../public/types'
import CarCard from './CarCard'

interface CarGridProps {
  cars: CarType[]
}

export default function CarGrid({ cars }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}