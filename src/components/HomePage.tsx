import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Package, Globe, ArrowRight, Star } from 'lucide-react';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import FeaturedProducts from './FeaturedProducts';

// City data with real images
const topCities = [
  { name: "Mumbai", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80" },
  { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" },
  { name: "Bangalore", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80" },
  { name: "Chennai", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80" }
];

// Premium brands
const premiumBrands = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "BuildPro", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "MediTech", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "AgriGrow", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80" }
];

// Featured categories with icons and images
const featuredCategories = [
  {
    title: "Building Construction",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
    items: ["Construction Equipment", "Building Materials", "Interior Finishing"]
  },
  {
    title: "Electronics & Electrical",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80",
    items: ["Industrial Electronics", "Consumer Electronics", "Electrical Equipment"]
  },
  {
    title: "Medical & Healthcare",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=800&q=80",
    items: ["Medical Equipment", "Pharmaceuticals", "Healthcare Supplies"]
  },
  {
    title: "Industrial Equipment",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
    items: ["Manufacturing Tools", "Industrial Machinery", "Plant Equipment"]
  }
];

// Suggested products
const suggestedProducts = [
  {
    name: "Industrial Automation System",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
    price: "$2,500 - $10,000",
    supplier: "TechCorp Industries",
    rating: 4.8
  },
  {
    name: "Construction Equipment Set",
    image: "https://cdn.shopify.com/s/files/1/0714/8784/8673/files/industrial.png?v=1731492962?auto=format&fit=crop&w=800&q=80",
    price: "$15,000 - $25,000",
    supplier: "BuildPro Solutions",
    rating: 4.9
  },
  {
    name: "Medical Diagnostic Kit",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=800&q=80",
    price: "$5,000 - $8,000",
    supplier: "MediTech Systems",
    rating: 4.7
  },
  {
    name: "Smart Manufacturing Robot",
    image: "https://cdn.shopify.com/s/files/1/0714/8784/8673/files/robotic.png?v=1731493330?auto=format&fit=crop&w=800&q=80",
    price: "$30,000 - $50,000",
    supplier: "RoboTech Industries",
    rating: 4.9
  }
];

export default function HomePage() {
  useEffect(() => {
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
      </Helmet>

      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />

        {/* Products You May Be Looking For */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Products You May Be Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{product.price}</p>
                    <p className="text-sm text-gray-600 mb-2">{product.supplier}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Categories You May Looking for</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                    <ul className="space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="h-4 w-4 text-blue-500 mr-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* We Connect Buyers & Sellers */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">We Connect Buyers & Sellers</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Join thousands of businesses trading on MartSpace, the leading B2B marketplace platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">50K+ Suppliers</h3>
                <p className="text-blue-100">Verified businesses from around the world</p>
              </div>
              <div className="text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">1M+ Products</h3>
                <p className="text-blue-100">Across multiple categories and industries</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">100+ Countries</h3>
                <p className="text-blue-100">Global reach for your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Cities */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Find Suppliers from Top Cities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCities.map((city, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Brands */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore Products from Premium Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {premiumBrands.map((brand, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold text-white mb-4">Get MartSpace App</h2>
                <p className="text-gray-400 mb-6">
                  Download our mobile app to access MartSpace on the go. Available for iOS and Android devices.
                </p>
               <div className="flex space-x-4">
                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com/store/apps/details?id=your_app_id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/0714/8784/8673/files/googleplay.png?v=1730577183"
                      alt="Get it on Google Play"
                      className="h-14" // Adjust height as needed
                    />
                  </a>
                
                  {/* App Store Badge */}
                  <a
                    href="https://apps.apple.com/us/app/your_app_id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/0714/8784/8673/files/AppStore.png?v=1730577435"
                      alt="Download on the App Store"
                      className="h-12" // Adjust height as needed
                    />
                  </a>
                </div>
                
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                  alt="MartSpace Mobile App"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}