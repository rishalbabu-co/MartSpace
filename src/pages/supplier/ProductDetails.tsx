import { useParams, Link } from 'react-router-dom';
import { Star, BookImage } from 'lucide-react';
import ProductGallery from '../../components/supplier/ProductGallery';
import CompanyInfo from '../../components/supplier/CompanyInfo';
import ReviewsSection from '../../components/supplier/ReviewsSection';


export default function ProductDetails() {
  const { id } = useParams();

  const product = {
    name: 'Industrial Automation System Pro X1000',
    images: [
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    price: '$2,500 - $10,000',
    material: 'Industrial Grade Steel & Aluminum',
    origin: 'Germany',
    moq: '1 Unit',
    description: 'Advanced industrial automation system with state-of-the-art control mechanisms and Industry 4.0 compatibility. Features include real-time monitoring, predictive maintenance, and seamless integration with existing systems.',
    specifications: {
      'Dimensions': '120 x 80 x 160 cm',
      'Weight': '250 kg',
      'Power': '380V, 3-Phase',
      'Certification': 'CE, ISO 9001:2015'
    }
  };

  const supplier = {
    name: 'TechCorp Industries',
    established: 2005,
    legalStatus: 'Private Limited Company',
    businessNature: 'Manufacturer & Exporter',
    employees: '100-500',
    turnover: '$10M - $50M',
    memberSince: '2020',
    gstNumber: 'GST123456789',
    description: 'Leading manufacturer of industrial automation solutions with a global presence. Specializing in cutting-edge technology and innovative solutions for modern manufacturing challenges.',
    rating: 4.8,
    totalReviews: 156
  };

  const reviews = [
    {
      user: 'John Smith',
      company: 'Manufacturing Co.',
      rating: 5,
      comment: 'Excellent product quality and after-sales support.',
      date: '2024-02-15'
    },
    {
      user: 'Sarah Chen',
      company: 'Industrial Solutions Ltd',
      rating: 4,
      comment: 'Good product, slightly delayed delivery but worth the wait.',
      date: '2024-02-10'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-1">
            <ProductGallery images={product.images} />
          </div>

          {/* Middle Column - Product Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Price Range</p>
                  <p className="text-lg font-semibold text-blue-600">{product.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Material</p>
                  <p className="text-lg font-semibold">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country of Origin</p>
                  <p className="text-lg font-semibold">{product.origin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Minimum Order Quantity</p>
                  <p className="text-lg font-semibold">{product.moq}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                      <span className="text-gray-600">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
                  Get Best Price
                </button>
                <Link 
                  to={`/supplier/${id}/catalog`}
                  className="flex-1 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                >
                  <BookImage className="h-5 w-5 mr-2" />
                  View Our Products Catalog
                </Link>
              </div>
            </div>

            {/* Supplier Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{supplier.name}</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">
                      {supplier.rating} ({supplier.totalReviews} reviews)
                    </span>
                  </div>
                </div>
                
                
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Contact Supplier
                </button>
               
              </div>

              <CompanyInfo supplier={supplier} />
            </div>

            {/* Ratings and Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}