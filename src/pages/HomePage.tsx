import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';

export default function HomePage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>MartSpace - B2B Marketplace Platform</title>
        <meta 
          name="description" 
          content="Connect with verified suppliers and grow your business with MartSpace, the leading B2B marketplace platform." 
        />
        <meta 
          name="keywords" 
          content="B2B marketplace, business suppliers, wholesale, industrial supplies, manufacturing, global trade" 
        />
      </Helmet>

      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
      </main>
    </>
  );
}