import { getCar } from '@/lib/actions/carActions'
import { PaymentForm } from '@/components/PaymentForm'

export default async function PaymentDetailPage({
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
      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <p><strong>Car:</strong> {car.name} {car.model}</p>
            <p><strong>Price per day:</strong> ${car.price}</p>
          </div>
        </div>
        <PaymentForm carId={id} />
      </div>
    </div>
  )
}