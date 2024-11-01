import { Search, ShoppingCart, Menu, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MartSpace</span>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, suppliers..."
                  className="w-[400px] pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Post Requirement
            </button>
            <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
            <User className="h-6 w-6 text-gray-600 cursor-pointer" />
            <Menu className="h-6 w-6 text-gray-600 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}