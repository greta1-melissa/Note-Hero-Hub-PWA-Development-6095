import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiUsers, FiFileText, FiPlay, FiTrendingUp, FiEye, FiHeart } = FiIcons;

const DashboardOverview = () => {
  const { theme } = useTheme();

  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: FiUsers,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Content Posts',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: FiFileText,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Video Views',
      value: '45.2K',
      change: '+23.1%',
      trend: 'up',
      icon: FiPlay,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Engagement',
      value: '89.3%',
      change: '+5.7%',
      trend: 'up',
      icon: FiHeart,
      color: 'from-red-500 to-red-600'
    }
  ];

  const recentActivity = [
    { action: 'New video uploaded', time: '2 minutes ago', type: 'video' },
    { action: 'User registration', time: '5 minutes ago', type: 'user' },
    { action: 'Portfolio updated', time: '1 hour ago', type: 'content' },
    { action: 'Analytics report generated', time: '2 hours ago', type: 'system' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-2xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Dashboard Overview
        </h2>
        <p className={`mt-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Welcome back! Here's what's happening with your site.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl shadow-lg border ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.title}
                </p>
                <p className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </p>
                <div className="flex items-center mt-1">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl shadow-lg border ${
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
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="flex-1">
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {activity.action}
                  </p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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
            <button className="w-full p-3 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Upload New Video
            </button>
            <button className={`w-full p-3 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}>
              Create New Post
            </button>
            <button className={`w-full p-3 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}>
              View Analytics
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;