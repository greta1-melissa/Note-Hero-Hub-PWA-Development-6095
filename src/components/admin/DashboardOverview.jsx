import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';
import AdminStats from './AdminStats';

const { FiUsers, FiFileText, FiPlay, FiTrendingUp, FiEye, FiHeart, FiCalendar, FiClock } = FiIcons;

const DashboardOverview = () => {
  const { theme } = useTheme();

  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      trend: 12.5,
      icon: FiUsers,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Content Posts',
      value: '156',
      trend: 8.2,
      icon: FiFileText,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Video Views',
      value: '45.2K',
      trend: 23.1,
      icon: FiPlay,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Engagement',
      value: '89.3%',
      trend: 5.7,
      icon: FiHeart,
      color: 'from-red-500 to-red-600'
    }
  ];

  const recentActivity = [
    { action: 'New blog post published', time: '2 minutes ago', type: 'content', icon: FiFileText },
    { action: 'User registration spike', time: '5 minutes ago', type: 'user', icon: FiUsers },
    { action: 'Video uploaded successfully', time: '1 hour ago', type: 'video', icon: FiPlay },
    { action: 'Analytics report generated', time: '2 hours ago', type: 'system', icon: FiTrendingUp },
    { action: 'New concert booking inquiry', time: '3 hours ago', type: 'booking', icon: FiCalendar }
  ];

  const upcomingEvents = [
    { title: 'State Championship', date: '2024-11-15', type: 'Competition', status: 'confirmed' },
    { title: 'Winter Concert', date: '2024-12-10', type: 'Performance', status: 'pending' },
    { title: 'Holiday Special', date: '2024-12-24', type: 'Event', status: 'confirmed' }
  ];

  const quickActions = [
    { title: 'Upload New Video', icon: FiPlay, color: 'bg-purple-500', action: () => {} },
    { title: 'Create New Post', icon: FiFileText, color: 'bg-blue-500', action: () => {} },
    { title: 'View Analytics', icon: FiTrendingUp, color: 'bg-green-500', action: () => {} },
    { title: 'Manage Events', icon: FiCalendar, color: 'bg-yellow-500', action: () => {} }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Dashboard Overview
        </h2>
        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Welcome back! Here's what's happening with your site.
        </p>
      </div>

      {/* Stats */}
      <AdminStats stats={stats} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`lg:col-span-2 p-6 rounded-xl shadow-lg border ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activity.type === 'content' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'user' ? 'bg-green-100 text-green-600' :
                  activity.type === 'video' ? 'bg-purple-100 text-purple-600' :
                  activity.type === 'booking' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  <SafeIcon icon={activity.icon} className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activity.action}
                  </p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-xl shadow-lg border ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Quick Actions
          </h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={action.action}
                className={`w-full p-3 rounded-lg font-medium transition-colors flex items-center space-x-3 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                  <SafeIcon icon={action.icon} className="w-4 h-4 text-white" />
                </div>
                <span>{action.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`p-6 rounded-xl shadow-lg border ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {event.title}
                </h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  event.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {event.status}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-400" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {new Date(event.date).toLocaleDateString()}
                </span>
              </div>
              <div className={`text-xs mt-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {event.type}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;