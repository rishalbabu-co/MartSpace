import { useState } from 'react';
import { 
  Users, Package, TrendingUp, DollarSign, 
  ShoppingCart, AlertCircle, BarChart2, Activity,
  Moon, Sun, LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminSidebar from './AdminSidebar';
import AnalyticsOverview from './AnalyticsOverview';
import UserManagement from './UserManagement';
import ProductManagement from './ProductManagement';
import RequirementManagement from './RequirementManagement';
import ActivityLogs from './ActivityLogs';
import Settings from './Settings';

type TabType = 'overview' | 'users' | 'products' | 'requirements' | 'activity' | 'settings';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { adminLogout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && <AnalyticsOverview />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'products' && <ProductManagement />}
            {activeTab === 'requirements' && <RequirementManagement />}
            {activeTab === 'activity' && <ActivityLogs />}
            {activeTab === 'settings' && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
}