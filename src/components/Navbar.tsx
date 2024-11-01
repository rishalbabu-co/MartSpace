import { Search, ShoppingCart, Menu, Bell, User } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

interface NavbarProps {
  currentPage: 'home' | 'products' | 'requirements';
  setCurrentPage: (page: 'home' | 'products' | 'requirements') => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const { openModal } = useModal();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <span className="ml-2 text-xl font-bold text-gray-800">MartSpace</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setCurrentPage('products')}
              className={`hidden md:block px-4 py-2 text-sm font-medium ${
                currentPage === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Browse Products
            </button>
            <button 
              onClick={() => setCurrentPage('requirements')}
              className={`hidden md:block px-4 py-2 text-sm font-medium ${
                currentPage === 'requirements' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              LeadSpace
            </button>
            <button 
              onClick={openModal}
              className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
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