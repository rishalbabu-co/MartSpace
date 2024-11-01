import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Requirement } from '../data/requirements';
import { categories } from '../data/products';
import { useRequirements } from '../contexts/RequirementsContext';

export default function RequirementsPage() {
  const { requirements } = useRequirements();
  const [filteredRequirements, setFilteredRequirements] = useState<Requirement[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    let result = [...requirements];

    if (searchQuery) {
      result = result.filter(req =>
        req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(req => req.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      result = result.filter(req => req.status === selectedStatus);
    }

    setFilteredRequirements(result);
  }, [searchQuery, selectedCategory, selectedStatus, requirements]);

  const getStatusColor = (status: Requirement['status']) => {
    switch (status) {
      case 'open':
        return 'text-green-600 bg-green-50';
      case 'in-progress':
        return 'text-blue-600 bg-blue-50';
      case 'closed':
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: Requirement['status']) => {
    switch (status) {
      case 'open':
        return <CheckCircle className="h-4 w-4" />;
      case 'in-progress':
        return <Clock className="h-4 w-4" />;
      case 'closed':
        return <XCircle className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Search and Filter Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search requirements..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Requirements List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {filteredRequirements.map((requirement) => (
            <div
              key={requirement.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                  {requirement.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(requirement.status)}`}>
                    {getStatusIcon(requirement.status)}
                    <span className="ml-1 capitalize">{requirement.status}</span>
                  </span>
                  <span className="text-sm text-gray-500">
                    {requirement.responses} responses
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{requirement.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                  {requirement.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  Due: {formatDate(requirement.deadline)}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                  {requirement.budget}
                </div>
                <div className="flex items-center text-gray-600">
                  <Filter className="h-5 w-5 mr-2 text-gray-400" />
                  {requirement.category}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="font-medium text-gray-800">{requirement.postedBy.name}</p>
                    <p className="text-sm text-gray-500">{requirement.postedBy.company}</p>
                  </div>
                  {requirement.postedBy.verified && (
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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