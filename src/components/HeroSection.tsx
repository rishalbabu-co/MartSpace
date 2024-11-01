export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect with Verified Suppliers
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Join millions of businesses buying and selling products on MartSpace
          </p>
          <div className="w-full max-w-2xl bg-white p-2 rounded-lg flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          <div className="mt-6 text-blue-100">
            <p>Popular: Industrial Machinery, Construction Materials, Electronics</p>
          </div>
        </div>
      </div>
    </div>
  );
}