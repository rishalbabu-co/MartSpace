import { Search } from 'lucide-react';

export default function LatestLeads() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Latest Leads</h1>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Leads List */}
          <div className="space-y-4">
            {[1, 2, 3].map((lead) => (
              <div key={lead} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Industrial Equipment Required</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">New Lead</span>
                </div>
                <p className="text-gray-600 mb-3">Looking for high-quality industrial equipment...</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Posted 2 hours ago</span>
                  <span>Location: Mumbai, India</span>
                  <span>Budget: $5,000 - $10,000</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}