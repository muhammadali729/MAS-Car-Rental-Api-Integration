import { PaymentForm } from '@/components/PaymentForm'

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
      <PaymentForm />
    </div>
  )
}