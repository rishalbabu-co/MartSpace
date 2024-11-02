import { Heart, Package, Trash2 } from 'lucide-react';

export default function Favorites() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Favorites</h1>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <div className="flex items-center justify-center">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-red-50">
                    <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Product Name</h3>
                  <p className="text-gray-600 text-sm mb-2">Supplier: Company Name</p>
                  <p className="text-blue-600 font-medium mb-2">$999.99</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Added on Mar 15, 2024</span>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}