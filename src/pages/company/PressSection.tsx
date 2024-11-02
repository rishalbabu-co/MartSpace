import { Newspaper, Download, Calendar, ExternalLink } from 'lucide-react';

export default function PressSection() {
  const pressReleases = [
    {
      title: "MartSpace Expands to Southeast Asian Markets",
      date: "March 15, 2024",
      description: "Leading B2B marketplace announces major expansion into Southeast Asian markets...",
      link: "#"
    },
    {
      title: "MartSpace Achieves 1 Million Active Users",
      date: "February 28, 2024",
      description: "Platform reaches significant milestone with one million active business users...",
      link: "#"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      format: "AI, PNG, SVG",
      size: "2.5 MB"
    },
    {
      title: "Brand Guidelines",
      format: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Product Screenshots",
      format: "ZIP",
      size: "5.2 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Press & Media</h1>
          <p className="text-gray-600 max-w-3xl">
            Get the latest news, updates, and media resources about MartSpace
          </p>
        </div>

        {/* Press Releases */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{release.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {release.date}
                    </div>
                  </div>
                  <a
                    href={release.link}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">Format: {item.format}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Media Contact</h2>
          <div className="max-w-2xl">
            <p className="text-gray-600 mb-4">
              For press inquiries, please contact our media relations team:
            </p>
            <div className="space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong> press@martspace.com
              </p>
              <p className="text-gray-800">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-800">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}