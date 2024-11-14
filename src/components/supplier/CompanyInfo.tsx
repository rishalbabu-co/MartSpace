import { Calendar, Building, Users, DollarSign, FileText, Download } from 'lucide-react';

interface CompanyInfoProps {
  supplier: {
    name: string;
    established: number;
    legalStatus: string;
    businessNature: string;
    employees: string;
    turnover: string;
    memberSince: string;
    gstNumber: string;
    description: string;
  };
}

export default function CompanyInfo({ supplier }: CompanyInfoProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Company Information</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Year Established</p>
                <p className="font-medium">{supplier.established}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Legal Status</p>
                <p className="font-medium">{supplier.legalStatus}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Number of Employees</p>
                <p className="font-medium">{supplier.employees}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Business Details</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Annual Turnover</p>
                <p className="font-medium">{supplier.turnover}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-600">GST Number</p>
                <p className="font-medium">{supplier.gstNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">About Company</h3>
        <p className="text-gray-600">{supplier.description}</p>
      </div>

      <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
        <Download className="h-5 w-5 mr-2" />
        Download Product Brochure
      </button>
    </div>
  );
}