import { 
  Box, Truck, Building2, Factory, Cpu, Shirt, Wheat, 
  Wrench, Car, Plane, Ship, Smartphone, Camera, Coffee, 
  Hammer, FlaskConical, Leaf, Heart, ShoppingBag, Briefcase,
  Printer, Scissors, Palette, Utensils, Wine, Gem,
  Thermometer, Droplet, Zap, Compass, Book, Music,
  Headphones, Watch, Sun, Wifi, Package, Database,
  Cloud, Monitor, PenTool, Film, Radio, Anchor, 
  Shield, Umbrella, Rocket, Map, Microscope, 
  Lightbulb, Settings, Atom, Beaker
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  // Manufacturing & Industrial
  { icon: Factory, name: 'Manufacturing Equipment', count: '2.1M+ Products' },
  { icon: Settings, name: 'Industrial Machinery', count: '1.8M+ Products' },
  { icon: Wrench, name: 'Tools & Hardware', count: '3.2M+ Products' },
  { icon: Settings, name: 'Industrial Parts', count: '4.5M+ Products' },
  { icon: Settings, name: 'Process Equipment', count: '980K+ Products' },

  // Technology & Electronics
  { icon: Cpu, name: 'Electronics', count: '5.2M+ Products' },
  { icon: Smartphone, name: 'Telecommunications', count: '1.5M+ Products' },
  { icon: Cpu, name: 'Semiconductors', count: '750K+ Products' },
  { icon: Monitor, name: 'Display Technology', count: '620K+ Products' },
  { icon: Database, name: 'Data Centers', count: '150K+ Products' },

  // Transportation & Logistics
  { icon: Truck, name: 'Logistics Services', count: '890K+ Services' },
  { icon: Car, name: 'Automotive', count: '2.8M+ Products' },
  { icon: Plane, name: 'Aerospace', count: '450K+ Products' },
  { icon: Ship, name: 'Maritime', count: '380K+ Products' },
  { icon: Anchor, name: 'Port Equipment', count: '220K+ Products' },

  // Construction & Infrastructure
  { icon: Building2, name: 'Construction', count: '3.1M+ Items' },
  { icon: Hammer, name: 'Building Materials', count: '4.2M+ Products' },
  { icon: Compass, name: 'Architecture Services', count: '180K+ Services' },
  { icon: Map, name: 'Infrastructure', count: '290K+ Projects' },
  { icon: Sun, name: 'Renewable Energy', count: '520K+ Products' },

  // Textiles & Fashion
  { icon: Shirt, name: 'Textiles', count: '6.1M+ Products' },
  { icon: Scissors, name: 'Apparel Manufacturing', count: '2.9M+ Products' },
  { icon: Palette, name: 'Fabric Design', count: '1.2M+ Designs' },
  { icon: Gem, name: 'Accessories', count: '3.4M+ Products' },
  { icon: ShoppingBag, name: 'Fashion Retail', count: '4.8M+ Products' },

  // Agriculture & Food
  { icon: Wheat, name: 'Agriculture', count: '1.9M+ Products' },
  { icon: Leaf, name: 'Organic Farming', count: '780K+ Products' },
  { icon: Coffee, name: 'Food Processing', count: '920K+ Products' },
  { icon: Utensils, name: 'Commercial Kitchen', count: '1.4M+ Products' },
  { icon: Wine, name: 'Beverages', count: '850K+ Products' },

  // Healthcare & Medical
  { icon: Heart, name: 'Medical Devices', count: '2.2M+ Products' },
  { icon: FlaskConical, name: 'Pharmaceuticals', count: '1.6M+ Products' },
  { icon: Microscope, name: 'Laboratory Equipment', count: '890K+ Products' },
  { icon: Thermometer, name: 'Diagnostics', count: '670K+ Products' },
  { icon: Beaker, name: 'Biotechnology', count: '450K+ Products' },

  // Technology Services
  { icon: Cloud, name: 'Cloud Computing', count: '320K+ Services' },
  { icon: Wifi, name: 'Network Equipment', count: '780K+ Products' },
  { icon: Shield, name: 'Cybersecurity', count: '430K+ Solutions' },
  { icon: Monitor, name: 'Software Development', count: '290K+ Services' },
  { icon: Atom, name: 'AI & Machine Learning', count: '180K+ Solutions' },

  // Media & Entertainment
  { icon: Camera, name: 'Audio Visual', count: '1.1M+ Products' },
  { icon: Film, name: 'Media Production', count: '420K+ Products' },
  { icon: Radio, name: 'Broadcasting', count: '150K+ Products' },
  { icon: Headphones, name: 'Sound Equipment', count: '890K+ Products' },
  { icon: Music, name: 'Entertainment', count: '720K+ Products' },

  // Professional Services
  { icon: Briefcase, name: 'Business Services', count: '480K+ Services' },
  { icon: PenTool, name: 'Office Supplies', count: '2.4M+ Products' },
  { icon: Printer, name: 'Printing Equipment', count: '680K+ Products' },
  { icon: Book, name: 'Education', count: '920K+ Resources' },
  { icon: Palette, name: 'Creative Services', count: '340K+ Services' },

  // Energy & Utilities
  { icon: Zap, name: 'Power Generation', count: '380K+ Products' },
  { icon: Lightbulb, name: 'Lighting', count: '1.8M+ Products' },
  { icon: Droplet, name: 'Water Treatment', count: '420K+ Products' },
  { icon: Rocket, name: 'Clean Energy', count: '290K+ Solutions' },
  { icon: Umbrella, name: 'Environmental', count: '520K+ Products' },

  // Packaging & Storage
  { icon: Box, name: 'Packaging Materials', count: '2.5M+ Products' },
  { icon: Package, name: 'Storage Solutions', count: '1.2M+ Products' },
  { icon: Package, name: 'Warehousing', count: '280K+ Services' },
  { icon: Box, name: 'Office Storage', count: '920K+ Products' },
  { icon: Watch, name: 'Inventory Systems', count: '180K+ Solutions' }
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse Business Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/buyer/industries?category=${encodeURIComponent(category.name)}`}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <Icon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.count}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}