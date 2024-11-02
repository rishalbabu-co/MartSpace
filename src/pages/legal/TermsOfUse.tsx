import { Shield, AlertTriangle } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>
          <div className="prose prose-blue max-w-none">
            <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-blue-800">
                Last updated: March 15, 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using MartSpace ("the Platform"), you agree to be bound by these Terms of Use and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. User Registration</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Users must provide accurate and complete information during registration</li>
                <li>Users are responsible for maintaining the confidentiality of their account</li>
                <li>Users must be at least 18 years old to use the Platform</li>
                <li>Business verification may be required for certain features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Platform Usage</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Users must comply with all applicable laws and regulations</li>
                <li>Prohibited activities include fraud, spam, and harassment</li>
                <li>Users are responsible for all content they post</li>
                <li>The Platform reserves the right to remove content or suspend accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on the Platform, including logos, text, and images, is protected by intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Liability</h2>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <p className="text-yellow-800">
                    The Platform is provided "as is" without warranties of any kind.
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                We are not liable for any damages arising from the use of the Platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Any disputes shall be resolved through arbitration in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-600 text-sm">
                For questions about these Terms of Use, please contact us at legal@martspace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}