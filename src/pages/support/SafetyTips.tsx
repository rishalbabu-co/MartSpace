import { Shield, AlertTriangle, Lock, Eye, CreditCard, UserCheck } from 'lucide-react';

export default function SafetyTips() {
  const safetyCategories = [
    {
      icon: Lock,
      title: "Account Security",
      tips: [
        "Use a strong, unique password",
        "Enable two-factor authentication",
        "Never share your login credentials",
        "Regularly update your password"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Safety",
      tips: [
        "Use secure payment methods",
        "Never share payment details via email",
        "Verify payment gateway security",
        "Keep payment receipts"
      ]
    },
    {
      icon: UserCheck,
      title: "Business Verification",
      tips: [
        "Verify supplier credentials",
        "Check business registration",
        "Review company history",
        "Request sample products"
      ]
    },
    {
      icon: Eye,
      title: "Transaction Monitoring",
      tips: [
        "Monitor all transactions",
        "Keep detailed records",
        "Report suspicious activity",
        "Review account regularly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Safety Tips</h1>
          <p className="text-gray-600 max-w-3xl">
            Follow these guidelines to ensure safe and secure transactions on MartSpace.
          </p>
        </div>

        {/* Safety Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {safetyCategories.map((category, index) => {
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
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Warning Signs */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Warning Signs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Requests for payment outside the platform
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Unusually low prices or too-good-to-be-true offers
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Pressure to complete transaction quickly
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Reluctance to provide business verification
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Poor communication or unprofessional behavior
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Requests for sensitive information via email
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Report Issues */}
        <div className="bg-red-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Report Suspicious Activity
              </h3>
              <p className="text-red-700 mb-4">
                If you encounter any suspicious activity or potential fraud, please report it immediately.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Report an Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}