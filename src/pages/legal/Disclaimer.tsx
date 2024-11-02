import { AlertTriangle, Shield } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Disclaimer</h1>
          <div className="prose prose-blue max-w-none">
            <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-blue-800">
                Last updated: March 15, 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information Accuracy</h2>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <p className="text-yellow-800">
                    While we strive to provide accurate information, we make no warranties about the completeness, reliability, or accuracy of this information.
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Any action you take upon the information on this platform is strictly at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Third-Party Content</h2>
              <p className="text-gray-600 mb-4">
                Our platform may contain links to third-party websites or services that are not owned or controlled by MartSpace. We have no control over, and assume no responsibility for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The content, privacy policies, or practices of any third-party websites or services</li>
                <li>Any damage or loss caused or alleged to be caused by such content</li>
                <li>The availability or accuracy of such websites or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Business Decisions</h2>
              <p className="text-gray-600 mb-4">
                Any reliance you place on information provided through this platform is strictly at your own risk. You should always:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Conduct your own due diligence</li>
                <li>Verify business credentials independently</li>
                <li>Seek professional advice when necessary</li>
                <li>Review all terms and conditions before making transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Platform Availability</h2>
              <p className="text-gray-600 mb-4">
                We do not guarantee that our platform will be:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Available at all times</li>
                <li>Error-free or uninterrupted</li>
                <li>Free from vulnerabilities or bugs</li>
                <li>Compatible with all devices or systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <p className="text-red-800">
                    MartSpace shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-600 text-sm">
                For questions about this disclaimer, please contact us at legal@martspace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}