import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            CarRental
          </Link>
          
          <div className="space-x-6">
            <Link href="/cars" className="text-gray-600 hover:text-gray-900">
              Cars
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}