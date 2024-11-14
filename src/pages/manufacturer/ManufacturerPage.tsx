import { useState, useEffect } from 'react';
import { 
  Building2, MapPin, Globe, Users, DollarSign, Award, 
  Shield, Clock, Star, TrendingUp, Package, FileText,
  CheckCircle, AlertTriangle, BadgeCheck, ShieldCheck,
  MailCheck, PackageCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CreditScore {
  score: number;
  rating: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D';
  status: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  factors: string[];
}

export default function ManufacturerPage() {
  const [isVisible, setIsVisible] = useState(false);

  const manufacturer = {
    name: "TechCorp Industries",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80",
    description: "Leading manufacturer of industrial automation solutions with over 15 years of experience in delivering high-quality products to global markets.",
    established: 2005,
    headquarters: "Shanghai, China",
    employees: "500-1000",
    revenue: "$50M - $100M",
    certifications: ["ISO 9001:2015", "CE", "RoHS"],
    markets: ["Asia", "Europe", "North America"],
    specialties: [
      "Industrial Automation",
      "Smart Manufacturing",
      "IoT Solutions",
      "Process Control"
    ],
    detailedDescription: `TechCorp Industries is a pioneering force in industrial automation and smart manufacturing solutions. Founded in 2005, we have consistently pushed the boundaries of innovation to deliver cutting-edge solutions that transform manufacturing processes.

Our state-of-the-art facilities span over 50,000 square meters, equipped with the latest technology and staffed by highly skilled engineers and technicians. We maintain stringent quality control processes throughout our production cycle, ensuring each product meets international standards.

We pride ourselves on our commitment to sustainability and environmental responsibility, implementing green manufacturing practices and developing energy-efficient solutions. Our R&D department continuously works on breakthrough technologies that help our clients achieve their automation and efficiency goals.`
  };

  const creditScore: CreditScore = {
    score: 850,
    rating: "A+",
    status: "Excellent",
    factors: [
      "Strong payment history",
      "Long-term market presence",
      "High customer satisfaction",
      "Stable financial performance"
    ]
  };

  const stats = [
    { label: "Products", value: "500+", icon: Package },
    { label: "Customers", value: "1000+", icon: Users },
    { label: "Countries", value: "25+", icon: Globe },
    { label: "Success Rate", value: "99%", icon: TrendingUp }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-500';
    if (score >= 700) return 'text-blue-500';
    if (score >= 600) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex items-start gap-6">
            <img
              src={manufacturer.logo}
              alt={manufacturer.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">{manufacturer.name}</h1>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm flex items-center">  <BadgeCheck className="h-5 w-5 text-green-600" /></span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"> <ShieldCheck className="h-5 w-5 text-blue-600" /></span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm flex items-center"> <MailCheck className="h-5 w-5 text-red-600" /></span>
                 <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm flex items-center">  <PackageCheck className="h-5 w-5 text-yellow-600" /></span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{manufacturer.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Building2 className="h-4 w-4 mr-1" />
                  Est. {manufacturer.established}
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {manufacturer.headquarters}
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {manufacturer.employees} employees
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Company Overview</h2>
              
              {/* Company Description */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
                <div className="prose prose-blue max-w-none">
                  {manufacturer.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {manufacturer.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm flex items-center"
                      >
                        <Award className="h-4 w-4 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Markets Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {manufacturer.markets.map((market, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {manufacturer.specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Credit Score Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Credit Score</h2>
                  <Shield className="h-6 w-6" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                  className="text-center mb-4"
                >
                  <div className={`text-5xl font-bold mb-2 ${getScoreColor(creditScore.score)}`}>
                    {creditScore.score}
                  </div>
                  <div className="text-2xl font-semibold">{creditScore.rating}</div>
                  <div className="text-blue-100">{creditScore.status}</div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Key Factors</h3>
                <div className="space-y-3">
                  {creditScore.factors.map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {factor}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Contact Supplier
                </button>
                <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  View Products
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Download Profile
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}