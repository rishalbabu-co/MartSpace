import { Truck, Package, Globe, Clock, Shield, DollarSign } from 'lucide-react';

export default function ShipOnMartspace() {
  const features = [
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Ship to over 200 countries with competitive rates"
    },
    {
      icon: Shield,
      title: "Secure Shipping",
      description: "End-to-end tracking and insurance coverage"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Express shipping options available worldwide"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Best-in-class shipping rates for businesses"
    }
  ];

  const services = [
    {
      title: "Standard Shipping",
      delivery: "5-7 business days",
      price: "From $9.99",
      features: [
        "Door-to-door delivery",
        "Online tracking",
        "Basic insurance coverage",
        "Regular updates"
      ]
    },
    {
      title: "Express Shipping",
      delivery: "2-3 business days",
      price: "From $24.99",
      features: [
        "Priority handling",
        "Real-time tracking",
        "Enhanced insurance",
        "SMS updates"
      ]
    },
    {
      title: "Premium Shipping",
      delivery: "1-2 business days",
      price: "From $49.99",
      features: [
        "Same-day pickup",
        "Premium handling",
        "Full insurance coverage",
        "24/7 support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Ship on MartSpace</h1>
            <p className="text-blue-100 mb-6">
              Reliable, fast, and secure shipping solutions for your business needs
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Shipping Services */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{service.delivery}</span>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Package className="h-4 w-4 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Calculate Shipping */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Shipping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Origin
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter origin address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter destination address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Weight
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter weight in kg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Dimensions
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="L x W x H in cm"
              />
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Calculate Rate
          </button>
        </div>
      </div>
    </div>
  );
}