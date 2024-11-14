import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingBag, FileText, Settings, Users, LogOut, ChevronRight, Building2, Package, Truck, DollarSign, Bell, Search } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/AuthContext';
import { useAuthModal } from '../contexts/AuthModalContext';
import toast from 'react-hot-toast';
import NotificationBell from './NotificationBell';

interface NavbarProps {
  currentPage: 'home' | 'products' | 'requirements';
  setCurrentPage: (page: 'home' | 'products' | 'requirements') => void;
}

const menuItems = {
  seller: [
    { icon: Package, label: 'Latest Leads', path: '/seller/leads' },
    { icon: Search, label: 'Search Leads', path: '/seller/search-leads' },
    { icon: Package, label: 'Products Management', path: '/seller/products' },
    { icon: ShoppingBag, label: 'Orders', path: '/seller/orders' },
    { icon: DollarSign, label: 'Payments', path: '/seller/payments' },
    { icon: DollarSign, label: 'Credit Balance', path: '/seller/credit-balance' },
    { icon: Users, label: 'Membership Plans', path: '/seller/membership-plans' }
  ],
  buyer: [
    { icon: Package, label: 'Browse Products', path: '/buyer/products' },
    { icon: Building2, label: 'Browse Industries', path: '/buyer/industries' },
    { icon: ShoppingBag, label: 'Shopping', path: '/buyer/shopping' },
    { icon: FileText, label: 'Requirements', path: '/buyer/requirements' },
    { icon: Package, label: 'Suggested Products', path: '/buyer/suggested' },
    { icon: Truck, label: 'Ship on MartSpace', path: '/buyer/shipping' },
    { icon: Package, label: 'Favorites', path: '/buyer/favorites' }
  ],
  support: [
    { icon: Bell, label: 'Customer Support', path: '/support/customer-support' },
    { icon: FileText, label: 'Feedback', path: '/support/feedback' },
    { icon: FileText, label: 'Help Center', path: '/support/help' }
  ]
};

export default function Navbar({ setCurrentPage }: NavbarProps) {
  const { openModal } = useModal();
  const { isAuthenticated, logoutUser } = useAuth();
  const { showAuthModal } = useAuthModal();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navigate = useNavigate();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        megaMenuRef.current && 
        !megaMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePostRequirement = () => {
    if (!isAuthenticated) {
      showAuthModal();
    } else {
      openModal();
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setIsMegaMenuOpen(false);
      toast.success('Signed out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign out. Please try again.');
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/"
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-700">MartSpace</span>
                <span className="text-xs text-gray-500">Your Global B2B2C Marketplace</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={handlePostRequirement}
              className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Post Requirement
            </button>
            <NotificationBell />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="h-6 w-6 text-gray-600 cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div
          ref={megaMenuRef}
          className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50"
        >
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-3 gap-8">
              {isAuthenticated ? (
                <>
                  {/* Seller Tools - Only shown when authenticated */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Package className="h-5 w-5 text-blue-600 mr-2" />
                      Seller Tools
                    </h3>
                    <div className="space-y-1">
                      {menuItems.seller.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <Icon className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                            <span className="group-hover:text-blue-600">{item.label}</span>
                            <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buyer Tools - Only shown when authenticated */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <ShoppingBag className="h-5 w-5 text-blue-600 mr-2" />
                      Buyer Tools
                    </h3>
                    <div className="space-y-1">
                      {menuItems.buyer.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <Icon className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                            <span className="group-hover:text-blue-600">{item.label}</span>
                            <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Show login prompts when not authenticated */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Package className="h-5 w-5 text-blue-600 mr-2" />
                      Seller Tools
                    </h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">Sign in to access seller tools and start selling on MartSpace</p>
                      <Link
                        to="/login"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <ShoppingBag className="h-5 w-5 text-blue-600 mr-2" />
                      Buyer Tools
                    </h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">Sign in to access buyer tools and start sourcing products</p>
                      <Link
                        to="/register"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {/* Account & Support - Always visible */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  Account & Support
                </h3>
                <div className="space-y-1">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/account"
                        className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Users className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">My Account</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Settings className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">Settings</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg group"
                      >
                        <LogOut className="h-5 w-5 mr-2" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Users className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">Sign In</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Users className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">Register</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                      </Link>
                    </>
                  )}

                  <div className="border-t my-2"></div>

                  {menuItems.support.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5 text-gray-400 mr-2 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">{item.label}</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-600" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}