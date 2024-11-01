import { useState } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductsPage from './components/ProductsPage';
import RequirementsPage from './components/RequirementsPage';
import Footer from './components/Footer';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import PostRequirementModal from './components/PostRequirementModal';
import { ModalProvider } from './contexts/ModalContext';
import { RequirementsProvider } from './contexts/RequirementsContext';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function MainLayout() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'requirements'>('home');

  return (
    <>
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'products' ? (
        <ProductsPage />
      ) : currentPage === 'requirements' ? (
        <RequirementsPage />
      ) : (
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
        </main>
      )}
      <Footer />
      <PostRequirementModal />
    </>
  );
}

export default function App() {
  return (
    <RequirementsProvider>
      <ModalProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </ModalProvider>
    </RequirementsProvider>
  );
}