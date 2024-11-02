import { MessageSquare, Phone, Mail, Globe, Clock } from 'lucide-react';

export default function CustomerSupport() {
  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support line",
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      availability: "24-48 hour response",
      action: "Send Email"
    }
  ];

  const commonIssues = [
    "Account Setup & Verification",
    "Payment Issues",
    "Shipping & Delivery",
    "Product Listings",
    "Order Management",
    "Platform Navigation"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer Support</h1>
          <p className="text-gray-600 max-w-3xl">
            We're here to help. Choose your preferred way to get in touch with us.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-2">{channel.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 inline mr-2" />
                  {channel.availability}
                </p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {channel.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Common Issues */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonIssues.map((issue, index) => (
              <button
                key={index}
                className="p-4 text-left text-gray-700 hover:bg-gray-50 rounded-lg group"
              >
                {issue}
              </button>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Support Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Global Support</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Live Chat:</strong> 24/7
                </p>
                <p className="text-gray-600">
                  <strong>Phone Support:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
                <p className="text-gray-600">
                  <strong>Email Support:</strong> 24-48 hour response time
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Regional Support</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <Globe className="h-4 w-4 inline mr-2" />
                  Asia Pacific: +1 (555) 123-4567
                </p>
                <p className="text-gray-600">
                  <Globe className="h-4 w-4 inline mr-2" />
                  Europe: +1 (555) 234-5678
                </p>
                <p className="text-gray-600">
                  <Globe className="h-4 w-4 inline mr-2" />
                  Americas: +1 (555) 345-6789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}