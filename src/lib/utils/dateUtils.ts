export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  export function calculateRentalDays(pickupDate: string, returnDate: string): number {
    const start = new Date(pickupDate)
    const end = new Date(returnDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
  
  export function isDateAvailable(date: string, bookedDates: string[]): boolean {
    return !bookedDates.includes(date)
  }
  
  export function getNextAvailableDate(bookedDates: string[]): string {
    const today = new Date()
    while (bookedDates.includes(today.toISOString().split('T')[0])) {
      today.setDate(today.getDate() + 1)
    }
    return today.toISOString().split('T')[0]
  }