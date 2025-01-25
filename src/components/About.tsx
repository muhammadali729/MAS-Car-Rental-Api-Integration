export default function About() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About CarRental</h1>
        
        <div className="prose lg:prose-xl">
          <p className="mb-6">
            Welcome to MAS CarRental, your premier destination for hassle-free car rentals. 
            We pride ourselves on providing exceptional service and a wide selection of 
            vehicles to meet every need and budget.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to make car rental simple, affordable, and accessible to everyone. 
            We believe in transparent pricing, excellent customer service, and maintaining 
            a modern fleet of well-maintained vehicles.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Wide selection of vehicles</li>
            <li>Competitive pricing</li>
            <li>24/7 customer support</li>
            <li>Flexible rental periods</li>
            <li>Multiple pickup locations</li>
            <li>Clean and well-maintained vehicles</li>
          </ul>
        </div>
      </div>
    )
  }