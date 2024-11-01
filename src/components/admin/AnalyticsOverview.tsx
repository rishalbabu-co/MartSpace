import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer
} from 'recharts';

const monthlyData = [
  { name: 'Jan', users: 400, products: 240, requirements: 180 },
  { name: 'Feb', users: 500, products: 320, requirements: 220 },
  { name: 'Mar', users: 600, products: 450, requirements: 280 },
  { name: 'Apr', users: 800, products: 520, requirements: 350 },
  { name: 'May', users: 1000, products: 600, requirements: 420 },
  { name: 'Jun', users: 1200, products: 700, requirements: 500 }
];

const revenueData = [
  { name: 'Jan', revenue: 5000 },
  { name: 'Feb', revenue: 7000 },
  { name: 'Mar', revenue: 8500 },
  { name: 'Apr', revenue: 12000 },
  { name: 'May', revenue: 15000 },
  { name: 'Jun', revenue: 18000 }
];

export default function AnalyticsOverview() {
  return (
    <div className="space-y-8">
      {/* Growth Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Platform Growth
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3B82F6" name="Users" />
                <Bar dataKey="products" fill="#10B981" name="Products" />
                <Bar dataKey="requirements" fill="#6366F1" name="Requirements" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Revenue Trend
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3B82F6"
                  name="Revenue ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '24.5K', change: '+12%' },
          { label: 'Active Products', value: '85.2K', change: '+25%' },
          { label: 'Monthly Revenue', value: '$425K', change: '+18%' },
          { label: 'Active Requirements', value: '1.2K', change: '+8%' }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {stat.label}
            </h4>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <span className="ml-2 text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}