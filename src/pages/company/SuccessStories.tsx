import { Star, Award, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80",
      quote: "MartSpace helped us expand our business to 15 new countries within a year.",
      author: "John Smith",
      role: "CEO",
      growth: "300%",
      category: "Electronics Manufacturing"
    },
    {
      company: "Global Textiles Ltd",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80",
      quote: "Our export volume increased by 5x after joining MartSpace.",
      author: "Sarah Chen",
      role: "Operations Director",
      growth: "500%",
      category: "Textile Manufacturing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover how businesses are transforming and growing with MartSpace
          </p>
        </div>

        {/* Success Stories */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-6">
                <img
                  src={story.logo}
                  alt={story.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{story.company}</h2>
                  <p className="text-gray-500 mb-4">{story.category}</p>
                  <blockquote className="text-lg text-gray-600 mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium text-gray-800">{story.author}</p>
                      <p className="text-gray-500">{story.role}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-500 font-bold">{story.growth} Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$1B+</div>
            <div className="text-gray-600">Total Transaction Value</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Success Story</h2>
          <p className="text-blue-100 mb-6">
            Join thousands of businesses growing with MartSpace
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}