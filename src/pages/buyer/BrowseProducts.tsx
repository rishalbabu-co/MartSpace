import { Search, Filter, Package } from 'lucide-react';

export default function BrowseProducts() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Browse Products</h1>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <div key={product} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                  <div className="flex items-center justify-center">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Product Name</h3>
                  <p className="text-gray-600 text-sm mb-2">Supplier Name</p>
                  <p className="text-blue-600 font-medium">$999.99</p>
                  <p className="text-sm text-gray-500 mt-2">MOQ: 100 pieces</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}