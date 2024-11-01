import { Box, Truck, Building2, Factory, Cpu, Shirt, Wheat } from 'lucide-react';

const categories = [
  { icon: Box, name: 'Industrial Supplies', count: '2.5M+ Products' },
  { icon: Truck, name: 'Logistics', count: '50K+ Services' },
  { icon: Building2, name: 'Construction', count: '1M+ Items' },
  { icon: Factory, name: 'Manufacturing', count: '100K+ Units' },
  { icon: Cpu, name: 'Electronics', count: '500K+ Products' },
  { icon: Shirt, name: 'Textiles', count: '750K+ Products' },
  { icon: Wheat, name: 'Agriculture', count: '300K+ Products' },
];

export default function CategorySection() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Icon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-sm font-medium text-gray-800 text-center">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}