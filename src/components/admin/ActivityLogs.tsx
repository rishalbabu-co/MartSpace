import { useState, useEffect } from 'react';
import { Activity, User, Package, FileText } from 'lucide-react';

interface ActivityLog {
  id: number;
  type: 'user' | 'product' | 'requirement';
  action: string;
  details: string;
  user: {
    name: string;
    role: string;
  };
  timestamp: string;
}

export default function ActivityLogs() {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from the API
    setLogs([
      {
        id: 1,
        type: 'user',
        action: 'User Registration',
        details: 'New user account created',
        user: {
          name: 'John Smith',
          role: 'Supplier'
        },
        timestamp: '2024-03-01T10:30:00Z'
      },
      {
        id: 2,
        type: 'product',
        action: 'Product Listed',
        details: 'New product added: Industrial Machinery',
        user: {
          name: 'Tech Corp',
          role: 'Supplier'
        },
        timestamp: '2024-03-01T11:15:00Z'
      },
      {
        id: 3,
        type: 'requirement',
        action: 'Requirement Posted',
        details: 'New requirement: Bulk order of electronics',
        user: {
          name: 'Global Trading Co',
          role: 'Buyer'
        },
        timestamp: '2024-03-01T12:00:00Z'
      }
    ]);
    setLoading(false);
  }, []);

  const getActivityIcon = (type: ActivityLog['type']) => {
    switch (type) {
      case 'user':
        return <User className="h-5 w-5" />;
      case 'product':
        return <Package className="h-5 w-5" />;
      case 'requirement':
        return <FileText className="h-5 w-5" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Activity Logs</h2>
          <div className="flex items-center text-sm text-gray-500">
            <Activity className="h-5 w-5 mr-2" />
            Last 24 hours
          </div>
        </div>

        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className={`p-2 rounded-full ${
                log.type === 'user' ? 'bg-purple-100 text-purple-600' :
                log.type === 'product' ? 'bg-green-100 text-green-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {getActivityIcon(log.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {log.action}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatTimestamp(log.timestamp)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {log.details}
                </p>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  By {log.user.name} • {log.user.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}