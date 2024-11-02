import { Search, Book, MessageSquare, FileText, ExternalLink, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
  const categories = [
    {
      title: "Getting Started",
      icon: Book,
      articles: [
        "How to Create an Account",
        "Complete Your Business Profile",
        "Verify Your Business",
        "Understanding Platform Features"
      ]
    },
    {
      title: "Buying Guide",
      icon: FileText,
      articles: [
        "Finding Products",
        "Contacting Suppliers",
        "Making Secure Payments",
        "Order Management"
      ]
    },
    {
      title: "Selling Guide",
      icon: MessageSquare,
      articles: [
        "List Your Products",
        "Manage Inquiries",
        "Order Processing",
        "Payment Collection"
      ]
    }
  ];

  const popularArticles = [
    "How to Post Requirements",
    "Secure Payment Methods",
    "Business Verification Process",
    "Shipping & Logistics",
    "Account Security",
    "Membership Plans"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header with Search */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <button
                key={index}
                className="flex items-center justify-between p-4 text-left text-gray-700 hover:bg-gray-50 rounded-lg group"
              >
                <span>{article}</span>
                <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <button className="text-gray-600 hover:text-blue-600 text-left">
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center text-blue-600 hover:text-blue-700 mt-4">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-6">
            Our support team is here to help you with any questions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Support
            </button>
            <button className="flex items-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600">
              <ExternalLink className="h-5 w-5 mr-2" />
              Visit Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}