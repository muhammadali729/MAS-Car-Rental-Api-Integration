import CarSearch from '@/components/CarSearch'
import CarGrid from '@/components/CarGrid'
import { getCars } from '@/lib/actions/carActions'
import { client } from '@/sanity/lib/client';

export default async function Home() {
  const cars = await getCars()


  const query = `*[_type == "products"]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }`
; // Include _id for unique key
  const products = await client.fetch(query);
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-500 text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">The Best Platform for Car Rental</h1>
          <p className="text-lg">Find your ideal car at competitive prices</p>
        </div>
        <div className="bg-blue-500 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Easy way to rent a car at a low price</h2>
          <p className="text-lg">Discover our wide selection of vehicles</p>
        </div>
      </section>
      
      
      <CarSearch />
      <CarGrid cars={cars} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((product) => (
            <div key={product._id} className="p-4 border rounded-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.brand}</p>
              <p className="text-gray-700">Type: {product.type}</p>
              <p className="text-gray-700">Fuel Capacity: {product.fuelCapacity}</p>
              <p className="text-gray-700">Transmission: {product.transmission}</p>
              <p className="text-gray-700">Seating: {product.seatingCapacity}</p>
              <p className="text-gray-700">Price Per Day: ${product.pricePerDay}</p>
              {product.originalPrice && (
                <p className="text-gray-500 line-through">Original Price: ${product.originalPrice}</p>
              )}
              <div className="mt-2">
              {product.tags && Array.isArray(product.tags) && product.tags.map((tag) => (
  <span key={tag} className="text-sm text-white bg-blue-500 rounded-full px-2 py-1 mr-2">
    {tag}
  </span>
))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}