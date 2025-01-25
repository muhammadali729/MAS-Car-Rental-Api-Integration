export interface CarSpecifications {
    seats: number
    doors: number
    transmission: 'Automatic' | 'Manual'
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
  }
  
  export interface CarType {
    tags: any
    _id: Key | null | undefined
    imageUrl: string | undefined
    pricePerDay: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    transmission: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    fuelCapacity: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    brand: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    seatingCapacity: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    originalPrice: any
    id: string
    name: string
    model: string
    price: number
    image: string
    type: 'sedan' | 'suv' | 'luxury' | 'sports'
    available: boolean
    features: string[]
    specifications: CarSpecifications
  }
  
  export interface BookingType {
    id: string
    carId: string
    userId: string
    startDate: string
    endDate: string
    totalAmount: number
    status: 'pending' | 'confirmed' | 'cancelled'
    createdAt: string
  }
  
  export interface UserType {
    id: string
    name: string
    email: string
    phone?: string
    bookings?: BookingType[]
  }