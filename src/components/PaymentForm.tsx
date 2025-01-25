'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { processPayment } from '@/lib/actions/paymentActions'

interface PaymentFormProps {
  carId?: string
}

export function PaymentForm({ carId }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (carId) {
      await processPayment({
        carId,
        totalAmount: 0, // Calculate based on rental duration
        ...formData,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Card Number"
        value={formData.cardNumber}
        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
        placeholder="1234 5678 9012 3456"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
          placeholder="MM/YY"
        />
        <Input
          label="CVV"
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
          placeholder="123"
          type="password"
        />
      </div>
      <Input
        label="Cardholder Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="John Doe"
      />
      <Button type="submit" className="w-full">
        Complete Payment
      </Button>
    </form>
  )
}