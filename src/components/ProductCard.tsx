import { MapPin } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{product.price}</p>
        <p className="text-sm text-gray-600 mb-1">MOQ: {product.moq}</p>
        <p className="text-sm text-gray-600 mb-1">{product.supplier}</p>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {product.location}
        </div>
        {product.distance && (
          <p className="text-sm text-gray-500 mt-1">
            {product.distance.toFixed(1)} km away
          </p>
        )}
      </div>
    </div>
  );
}