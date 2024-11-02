import { Cookie, Info } from 'lucide-react';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      type: "Essential",
      description: "Required for basic platform functionality",
      examples: ["Authentication", "Security", "Load balancing"]
    },
    {
      type: "Functional",
      description: "Enhance user experience and functionality",
      examples: ["Language preferences", "User settings", "Session management"]
    },
    {
      type: "Analytics",
      description: "Help us understand how users interact with our platform",
      examples: ["Page views", "User behavior", "Performance metrics"]
    },
    {
      type: "Marketing",
      description: "Used for targeted advertising and marketing",
      examples: ["Ad preferences", "Campaign tracking", "Remarketing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
          <div className="prose prose-blue max-w-none">
            <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg">
              <Cookie className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-blue-800">
                Last updated: March 15, 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device when you visit our platform.
                They help us provide you with a better experience by remembering your preferences and
                understanding how you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.type} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">{cookie.type}</h3>
                    <p className="text-gray-600 text-sm mb-2">{cookie.description}</p>
                    <div className="text-sm text-gray-500">
                      <strong>Examples:</strong>
                      <ul className="list-disc pl-5 mt-1">
                        {cookie.examples.map((example) => (
                          <li key={example}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Managing Cookies</h2>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <p className="text-yellow-800">
                    You can control and manage cookies in your browser settings.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>View your cookies</li>
                <li>Delete your cookies</li>
                <li>Block third party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                Some of our pages may contain content from third parties (like social media widgets or
                analytics tools) which may set their own cookies. We do not control these cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-600 text-sm">
                For questions about our Cookie Policy, please contact us at privacy@martspace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}