import { Search, ArrowRight } from 'lucide-react';

const industries = [
  {
    category: "Manufacturing",
    sectors: [
      "Automotive", "Aerospace", "Electronics", "Machinery", "Textiles",
      "Food Processing", "Pharmaceuticals", "Chemical", "Metal Fabrication"
    ]
  },
  {
    category: "Technology",
    sectors: [
      "Software", "Hardware", "Telecommunications", "IT Services", "Semiconductors",
      "Artificial Intelligence", "Cloud Computing", "IoT", "Cybersecurity"
    ]
  },
  {
    category: "Construction",
    sectors: [
      "Residential", "Commercial", "Infrastructure", "Heavy Engineering",
      "Interior Design", "Architecture", "Building Materials"
    ]
  },
  {
    category: "Agriculture",
    sectors: [
      "Farming", "Livestock", "Forestry", "Fishery", "Agricultural Technology",
      "Organic Farming", "Hydroponics", "Seeds & Fertilizers"
    ]
  },
  {
    category: "Healthcare",
    sectors: [
      "Medical Devices", "Pharmaceuticals", "Biotechnology", "Healthcare Services",
      "Medical Supplies", "Laboratory Equipment"
    ]
  },
  {
    category: "Energy",
    sectors: [
      "Oil & Gas", "Renewable Energy", "Nuclear", "Power Generation",
      "Energy Storage", "Smart Grid", "Energy Efficiency"
    ]
  },
  {
    category: "Transportation",
    sectors: [
      "Automotive", "Aviation", "Maritime", "Railways", "Logistics",
      "Supply Chain", "Fleet Management"
    ]
  },
  {
    category: "Retail",
    sectors: [
      "E-commerce", "Fashion", "Electronics", "Home & Garden", "Sports",
      "Luxury Goods", "Food & Beverage"
    ]
  }
];

export default function BrowseIndustries() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Browse by Industries</h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search industries..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8">
          {industries.map((industry) => (
            <div key={industry.category} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{industry.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industry.sectors.map((sector) => (
                  <button
                    key={sector}
                    className="flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg group"
                  >
                    <span>{sector}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}