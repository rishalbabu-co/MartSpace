import { useState } from 'react';
import { Star, Heart, ExternalLink } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  supplier: string;
  rating: number;
  match: number;
  category: string;
}

export default function SuggestedProducts() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Industrial Automation Controller",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      price: "$1,999.99",
      supplier: "AutoControl Systems",
      rating: 4.8,
      match: 95,
      category: "Industrial Electronics"
    },
    {
      id: 2,
      name: "Smart Manufacturing Sensor Kit",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      price: "$499.99",
      supplier: "SensorTech Solutions",
      rating: 4.6,
      match: 88,
      category: "IoT Devices"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Suggested Products</h1>
          <p className="text-gray-600">
            Based on your recent activity and requirements
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['All Suggestions', 'Based on Requirements', 'Similar to Viewed', 'Top Rated', 'Best Value'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                    {product.match}% Match
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{product.supplier}</p>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">{product.price}</span>
                  <button className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}