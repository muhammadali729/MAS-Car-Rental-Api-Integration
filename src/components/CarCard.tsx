import { Heart } from 'lucide-react'
import { Button } from './ui/button'
import { CarType } from '../../public/types'
import Link from 'next/link'

interface CarCardProps {
  car: CarType
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.name} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
        <p className="text-gray-600 mb-4">{car.model}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">${car.price}</span>
            <span className="text-gray-500">/day</span>
          </div>
          <Link href={`/cars/${car.id}`}>
            <Button>Rent Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}