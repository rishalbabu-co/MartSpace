import { Users, Globe, Award, Target } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { label: 'Active Users', value: '100K+' },
    { label: 'Countries', value: '50+' },
    { label: 'Products Listed', value: '1M+' },
    { label: 'Successful Deals', value: '500K+' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting businesses across borders with seamless trade solutions.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Maintaining high standards through rigorous verification processes.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving our platform with cutting-edge technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About MartSpace</h1>
          <p className="text-gray-600 max-w-3xl">
            MartSpace is a leading B2B marketplace platform connecting businesses worldwide. 
            We facilitate seamless trade between manufacturers, suppliers, and buyers across various industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To revolutionize B2B commerce by providing a trusted platform that enables businesses 
              to grow and succeed in the global marketplace.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the world's most trusted and efficient B2B marketplace, driving innovation 
              and fostering sustainable business growth globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}