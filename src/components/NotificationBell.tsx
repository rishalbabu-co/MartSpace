import { useState, useRef, useEffect } from 'react';
import { Bell, X, Circle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useAuthModal } from '../contexts/AuthModalContext';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'order' | 'requirement' | 'system';
}

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Order Received',
      message: 'You have received a new order for Industrial Equipment',
      time: '2 hours ago',
      read: false,
      type: 'order'
    },
    {
      id: '2',
      title: 'Requirement Match',
      message: 'New requirement matches your product catalog',
      time: '5 hours ago',
      read: false,
      type: 'requirement'
    },
    {
      id: '3',
      title: 'Account Verified',
      message: 'Your business account has been verified successfully',
      time: '1 day ago',
      read: true,
      type: 'system'
    }
  ]);

  const { isAuthenticated } = useAuth();
  const { showAuthModal } = useAuthModal();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleBellClick = () => {
    if (!isAuthenticated) {
      showAuthModal();
      return;
    }
    setIsOpen(!isOpen);
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return 'bg-green-100 text-green-800';
      case 'requirement':
        return 'bg-blue-100 text-blue-800';
      case 'system':
        return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleBellClick}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Bell className="h-6 w-6 text-gray-600" />
        {isAuthenticated && unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 text-xs text-white items-center justify-center">
              {unreadCount}
            </span>
          </span>
        )}
      </button>

      {isAuthenticated && isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">
                  Mark all as read
                </span>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-1">
                          {!notification.read && (
                            <Circle className="h-2 w-2 text-blue-600 mr-2 fill-current" />
                          )}
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {notification.message}
                        </p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs mt-2 ${getNotificationColor(notification.type)}`}>
                          {notification.type}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="ml-4 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-50 rounded-lg">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}