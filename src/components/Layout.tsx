import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'requirements'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}