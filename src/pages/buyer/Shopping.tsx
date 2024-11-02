import { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  seller: string;
}

export default function Shopping() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Industrial Safety Equipment Set",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      price: "$299.99",
      rating: 4.5,
      reviews: 128,
      seller: "SafetyFirst Co."
    },
    {
      id: 2,
      name: "Professional Tool Kit",
      image: "https://images.unsplash.com/photo-1581241309674-a6cf4198acf7?auto=format&fit=crop&w=800&q=80",
      price: "$199.99",
      rating: 4.8,
      reviews: 256,
      seller: "ToolMaster Pro"
    },
    // Add more products as needed
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Shopping</h1>
            <div className="flex gap-4">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['All', 'Popular', 'New Arrivals', 'Best Sellers', 'Deals', 'Premium'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.seller}</p>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">{product.price}</span>
                  <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add
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