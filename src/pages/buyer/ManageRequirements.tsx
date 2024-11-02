import { useState } from 'react';
import { FileText, Search, Filter, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

interface Requirement {
  id: number;
  title: string;
  category: string;
  quantity: string;
  budget: string;
  status: 'open' | 'in-progress' | 'closed';
  responses: number;
  deadline: string;
}

export default function ManageRequirements() {
  const { openModal } = useModal();
  const [requirements] = useState<Requirement[]>([
    {
      id: 1,
      title: "Industrial Automation System",
      category: "Manufacturing",
      quantity: "5 Units",
      budget: "$25,000 - $30,000",
      status: "open",
      responses: 12,
      deadline: "2024-04-15"
    },
    {
      id: 2,
      title: "Raw Materials for Production",
      category: "Industrial Supplies",
      quantity: "1000 kg",
      budget: "$5,000 - $7,000",
      status: "in-progress",
      responses: 8,
      deadline: "2024-04-20"
    }
  ]);

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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Manage Requirements</h1>
            <button
              onClick={openModal}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Post Requirement
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search requirements..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Requirements List */}
          <div className="space-y-4">
            {requirements.map((requirement) => (
              <div
                key={requirement.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {requirement.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Category:</span> {requirement.category}
                      </div>
                      <div>
                        <span className="font-medium">Quantity:</span> {requirement.quantity}
                      </div>
                      <div>
                        <span className="font-medium">Budget:</span> {requirement.budget}
                      </div>
                      <div>
                        <span className="font-medium">Deadline:</span> {requirement.deadline}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getStatusColor(requirement.status)}`}>
                    {getStatusIcon(requirement.status)}
                    <span className="ml-1 capitalize">{requirement.status}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {requirement.responses} responses received
                  </span>
                  <div className="space-x-2">
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      View Responses
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}