const products = [
  {
    id: 1,
    name: 'Industrial Automation System',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    price: '$2,500 - $10,000',
    moq: '1 Set',
    supplier: 'TechCorp Industries',
    location: 'Shanghai, China'
  },
  {
    id: 2,
    name: 'Solar Panel Kit',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    price: '$800 - $1,200',
    moq: '10 Units',
    supplier: 'GreenEnergy Solutions',
    location: 'Gujarat, India'
  },
  {
    id: 3,
    name: 'Construction Equipment',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
    price: '$15,000 - $25,000',
    moq: '1 Unit',
    supplier: 'BuildTech Machinery',
    location: 'Texas, USA'
  },
  {
    id: 4,
    name: 'Smart Manufacturing Robot',
    image: 'https://images.unsplash.com/photo-1565508590984-051ecaa3a724?auto=format&fit=crop&w=800&q=80',
    price: '$8,000 - $12,000',
    moq: '1 Unit',
    supplier: 'RoboTech Systems',
    location: 'Seoul, South Korea'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                <p className="text-sm text-gray-500">{product.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}