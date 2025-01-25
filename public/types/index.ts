import { Key } from 'react'; // Import React's Key type if intended
import React from 'react'; // Import React for JSX-related types

export interface CarSpecifications {
  seats: number;
  doors: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
}

export interface CarType {
  tags: string[]; // Replace 'any' with a more specific type
  _id: Key | null | undefined; // Ensure the Key type is correctly used
  imageUrl?: string; // Optional property
  pricePerDay: number; // Changed to 'number' for consistency
  transmission: 'Automatic' | 'Manual'; // Changed to match CarSpecifications
  fuelCapacity: number; // Define as a number or the relevant type
  brand: string; // Use 'string' instead of ReactI18NextChildren
  seatingCapacity: number; // Use 'number' for seats
  originalPrice: number; // Define as a number or relevant type
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  type: 'sedan' | 'suv' | 'luxury' | 'sports';
  available: boolean;
  features: string[];
  specifications: CarSpecifications;
}

export interface BookingType {
  id: string;
  carId: string;
  userId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string; // ISO date string
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  phone?: string;
  bookings?: BookingType[];
}
