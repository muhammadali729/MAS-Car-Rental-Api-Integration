'use server'

import { CarType } from '../../../public/types'

// This would typically connect to a database
const MOCK_CARS: CarType[] = [
  {
    id: '1',
    name: 'Rolls-Royce',
    model: 'Ghost',
    price: 899,
    image: '/cars/rolls-royce.jpg',
    type: 'luxury',
    available: true,
    features: ['Leather Seats', 'Climate Control', 'Navigation'],
    specifications: {
      seats: 5,
      doors: 4,
      transmission: 'Automatic',
      fuelType: 'Petrol'
    }
  },
  {
    id: '2',
    name: 'Luxury Sedan',
    model: '2022',
    price: 200,
    image: '/cars/luxury-sedan.jpeg',
    type: 'luxury',
    available: true,
    features: ['Premium Comfort', 'Automatic Transmission'],
    specifications: {
        transmission: 'Automatic',
        fuelType: 'Petrol',
        seats: 4,
        doors: 4,
    }
  },
  {
    id: '3',
    name: 'SUV',
    model: '2021',
    price: 250,
    image: '/cars/suv.jpeg',
    type: 'suv',
    available: true,
    features: ['Spacious Interior', 'Manual Transmission'],
    specifications: {
        seats: 4,
        doors: 4,
      transmission: 'Manual',
      fuelType: 'Petrol'
    }
  },
  {
    id: '4',
    name: 'Economy Hatchback',
    model: '2023',
    price: 280,
    image: '/cars/economy-hatchback.jpeg',
    type: 'sedan',
    available: true,
    features: ['City Efficiency', 'Automatic Transmission'],
    specifications: {
        seats: 4,
        doors: 4,
      transmission: 'Automatic',
      fuelType: 'Petrol'
    }
  },
  {
    id: '5',
    name: 'Convertible',
    model: '2020',
    price: 320,
    image: '/cars/convertible.jpeg',
    type: 'luxury',
    available: true,
    features: ['Stylish Design', 'Automatic Transmission'],
    specifications: {
        seats: 4,
        doors: 4,
      transmission: 'Automatic',
      fuelType: 'Petrol'
    }
  },
  {
    id: '6',
    name: 'Electric Car',
    model: '2024',
    price: 430,
    image: '/cars/electric-car.jpeg',
    type: 'sports',
    available: true,
    features: ['Eco-Friendly', 'Automatic Transmission'],
    specifications: {
        seats: 4,
        doors: 4,
      transmission: 'Automatic',
      fuelType: 'Electric'
    }
  }
  
]

export async function getCars(): Promise<CarType[]> {
  // In a real app, this would fetch from a database
  return MOCK_CARS
}

export async function getCar(id: string): Promise<CarType | null> {
  const car = MOCK_CARS.find(car => car.id === id)
  return car || null
}

export async function searchCars(params: {
  location?: string
  pickupDate?: string
  returnDate?: string
  type?: string
  minPrice?: number
  maxPrice?: number
}): Promise<CarType[]> {
  // Filter cars based on search parameters
  return MOCK_CARS.filter(car => {
    if (params.type && car.type !== params.type) return false
    if (params.minPrice && car.price < params.minPrice) return false
    if (params.maxPrice && car.price > params.maxPrice) return false
    return true
  })
}

export async function toggleFavorite(carId: string): Promise<void> {
  // This would update the database in a real app
  console.log('Toggling favorite for car:', carId)
}