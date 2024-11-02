import { Lock, Shield, Eye } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none">
            <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg">
              <Lock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-blue-800">
                Last updated: March 15, 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Name and contact details</li>
                    <li>Business information</li>
                    <li>Payment information</li>
                    <li>Communication records</li>
                  </ul>
                </div>
                <div className="pl-4 border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-2">Usage Data</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Browser type and version</li>
                    <li>IP address</li>
                    <li>Device information</li>
                    <li>Usage patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and improve our services</li>
                <li>To process transactions</li>
                <li>To communicate with users</li>
                <li>To ensure platform security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers and partners</li>
                <li>Legal authorities when required</li>
                <li>Other users as necessary for transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <p className="text-green-800">
                    We implement appropriate security measures to protect your information.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections or deletions</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies. See our Cookie Policy for details.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-600 text-sm">
                For privacy-related inquiries, please contact our Data Protection Officer at privacy@martspace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}