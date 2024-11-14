import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import PostRequirementModal from './components/PostRequirementModal';
import { ModalProvider } from './contexts/ModalContext';
import { RequirementsProvider } from './contexts/RequirementsContext';
import { AuthModalProvider } from './contexts/AuthModalContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
import { useAuth } from './contexts/AuthContext';
import ProductDetails from './pages/supplier/ProductDetails';
import SupplierCatalog from './pages/supplier/SupplierCatalog';
import ManufacturerPage from './pages/manufacturer/ManufacturerPage';

// Import pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import LatestLeads from './pages/seller/LatestLeads';
import SearchLeads from './pages/seller/SearchLeads';
import ProductsManagement from './pages/seller/ProductsManagement';
import Orders from './pages/seller/Orders';
import Payments from './pages/seller/Payments';
import CreditBalance from './pages/seller/CreditBalance';
import MembershipPlans from './pages/seller/MembershipPlans';
import BrowseProducts from './pages/buyer/BrowseProducts';
import Industries from './pages/buyer/Industries';
import Shopping from './pages/buyer/Shopping';
import ManageRequirements from './pages/buyer/ManageRequirements';
import SuggestedProducts from './pages/buyer/SuggestedProducts';
import ShipOnMartspace from './pages/buyer/ShipOnMartspace';
import Favorites from './pages/buyer/Favorites';
import Settings from './pages/app/Settings';
import MyAccount from './pages/user/MyAccount';

// Import company pages
import AboutUs from './pages/company/AboutUs';
import JoinSales from './pages/company/JoinSales';
import SuccessStories from './pages/company/SuccessStories';
import PressSection from './pages/company/PressSection';

// Import support pages
import CustomerSupport from './pages/support/CustomerSupport';
import Feedback from './pages/support/Feedback';
import Complaints from './pages/support/Complaints';
import SafetyTips from './pages/support/SafetyTips';
import HelpCenter from './pages/support/HelpCenter';

// Import legal pages
import TermsOfUse from './pages/legal/TermsOfUse';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import Disclaimer from './pages/legal/Disclaimer';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <RequirementsProvider>
      <ModalProvider>
        <AuthModalProvider>
          <AdminAuthProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes */}
                <Route path="/account" element={
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
                } />
                
                {/* Product and Supplier Routes */}
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/supplier/:id/catalog" element={<SupplierCatalog />} />
                <Route path="/manufacturer/:id" element={<ManufacturerPage />} />
                
                {/* Seller Routes */}
                <Route path="/seller/leads" element={<LatestLeads />} />
                <Route path="/seller/search-leads" element={<SearchLeads />} />
                <Route path="/seller/products" element={<ProductsManagement />} />
                <Route path="/seller/orders" element={<Orders />} />
                <Route path="/seller/payments" element={<Payments />} />
                <Route path="/seller/credit-balance" element={<CreditBalance />} />
                <Route path="/seller/membership-plans" element={<MembershipPlans />} />
                
                {/* Buyer Routes */}
                <Route path="/buyer/products" element={<BrowseProducts />} />
                <Route path="/buyer/industries" element={<Industries />} />
                <Route path="/buyer/shopping" element={<Shopping />} />
                <Route path="/buyer/requirements" element={<ManageRequirements />} />
                <Route path="/buyer/suggested" element={<SuggestedProducts />} />
                <Route path="/buyer/shipping" element={<ShipOnMartspace />} />
                <Route path="/buyer/favorites" element={<Favorites />} />
                
                {/* App Routes */}
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } />

                {/* Company Routes */}
                <Route path="/company/about" element={<AboutUs />} />
                <Route path="/company/join-sales" element={<JoinSales />} />
                <Route path="/company/success-stories" element={<SuccessStories />} />
                <Route path="/company/press" element={<PressSection />} />

                {/* Support Routes */}
                <Route path="/support/customer-support" element={<CustomerSupport />} />
                <Route path="/support/feedback" element={<Feedback />} />
                <Route path="/support/complaints" element={<Complaints />} />
                <Route path="/support/safety-tips" element={<SafetyTips />} />
                <Route path="/support/help" element={<HelpCenter />} />

                {/* Legal Routes */}
                <Route path="/legal/terms" element={<TermsOfUse />} />
                <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                <Route path="/legal/cookies" element={<CookiePolicy />} />
                <Route path="/legal/disclaimer" element={<Disclaimer />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedAdminRoute>
                    <Dashboard />
                  </ProtectedAdminRoute>
                } 
              />
            </Routes>
            <PostRequirementModal />
          </AdminAuthProvider>
        </AuthModalProvider>
      </ModalProvider>
    </RequirementsProvider>
  );
}