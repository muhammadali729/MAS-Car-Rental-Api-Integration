'use client'

import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'

interface Car {
  name: string;
  brand: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: number;
  price_per_day: number;
  image_url?: string;
}

export default function CarSearch() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<Car[]>('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
        setCars(response.data);
        setFilteredCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
  
    fetchCars();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = cars.filter(car => {
      const searchTerm = searchQuery.toLowerCase();
      return (
        car.name.toLowerCase().includes(searchTerm) ||
        car.brand.toLowerCase().includes(searchTerm) ||
        car.type.toLowerCase().includes(searchTerm) ||
        car.transmission.toLowerCase().includes(searchTerm)
      );
    });

    if (pickupDate && returnDate) {
      const pickup = new Date(pickupDate);
      const returnD = new Date(returnDate);
      
      if (returnD < pickup) {
        alert('Return date must be after pickup date');
        return;
      }
    }

    setFilteredCars(filtered);
  };

  return (
    <div className="car-search-container">
      <form onSubmit={handleSearch} className="payment-card" style={{ marginBottom: '2rem' }}>
        <div className="form-group">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem' 
          }}>
            <div className="form-group">
              <label htmlFor="search-query" className="block text-sm font-medium text-gray-700 mb-1">
                Search Cars
              </label>
              <input
                id="search-query"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by car name, brand, or type"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Date
              </label>
              <input
                id="pickup-date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                Return Date
              </label>
              <input
                id="return-date"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1 opacity-0">
                Search
              </label>
              <button type="submit" className="rent-button w-full">
                Search Cars
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="car-grid">
        {filteredCars.map((car, index) => (
          <div key={index} className="car-card">
            <img
              src={car.image_url || '/api/placeholder/240/160'}
              alt={car.name}
              className="car-card-image"
            />
            <div className="car-card-content">
              <h2 className="car-card-title">{car.name}</h2>
              <p className="car-card-description">Brand: {car.brand}</p>
              <p className="car-card-description">Type: {car.type}</p>
              <p className="car-card-description">Transmission: {car.transmission}</p>
              <p className="car-card-description">Seats: {car.seating_capacity}</p>
              <div className="car-detail-price">
                <span>${car.price_per_day}</span>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>/day</span>
              </div>
              <button className="rent-button">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>No cars found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

