import { useState } from 'react';
import { Search, MapPin, Filter, Globe, Clock, DollarSign, Building2, Tag } from 'lucide-react';

interface Lead {
  id: number;
  title: string;
  description: string;
  location: string;
  budget: string;
  category: string;
  company: string;
  postedAt: string;
  distance?: string;
}

export default function SearchLeads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Categories',
    'Industrial Supplies',
    'Electronics',
    'Construction',
    'Manufacturing',
    'Textiles',
    'Agriculture'
  ];

  const sampleLeads: Lead[] = [
    {
      id: 1,
      title: 'Bulk Order of Electronic Components',
      description: 'Looking for reliable supplier of electronic components including resistors, capacitors, and integrated circuits.',
      location: 'Mumbai, India',
      budget: '$10,000 - $15,000',
      category: 'Electronics',
      company: 'Tech Solutions Ltd',
      postedAt: '2 hours ago',
      distance: '5 km'
    },
    {
      id: 2,
      title: 'Industrial Machinery Required',
      description: 'Need heavy-duty industrial machinery for manufacturing plant. Must meet ISO standards.',
      location: 'Delhi, India',
      budget: '$50,000 - $75,000',
      category: 'Manufacturing',
      company: 'Industrial Corp',
      postedAt: '5 hours ago',
      distance: '12 km'
    },
    {
      id: 3,
      title: 'Construction Materials Supplier Needed',
      description: 'Seeking suppliers for various construction materials including cement, steel, and timber.',
      location: 'Bangalore, India',
      budget: '$25,000 - $40,000',
      category: 'Construction',
      company: 'BuildRight Constructions',
      postedAt: '1 day ago',
      distance: '8 km'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Search Business Leads</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Query */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="relative">
              <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex gap-4 mt-4">
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Globe className="h-4 w-4 mr-2" />
              Worldwide
            </button>
          </div>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {sampleLeads.map((lead) => (
            <div key={lead.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{lead.title}</h2>
                  <p className="text-gray-600 mb-4">{lead.description}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  New Lead
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  {lead.location}
                  {lead.distance && (
                    <span className="ml-2 text-gray-400">({lead.distance})</span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                  {lead.budget}
                </div>
                <div className="flex items-center text-gray-600">
                  <Building2 className="h-4 w-4 mr-2 text-gray-400" />
                  {lead.company}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  {lead.postedAt}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {lead.category}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Contact Buyer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}