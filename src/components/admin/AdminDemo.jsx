import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiFileText, FiPlay, FiHeart, FiTrendingUp, FiEye } = FiIcons;

const AdminDemo = () => {
  const { theme } = useTheme();

  const stats = [
    { title: 'Total Posts', value: '42', trend: 8.2, icon: FiFileText, color: 'from-blue-500 to-blue-600' },
    { title: 'Video Views', value: '15.2K', trend: 23.1, icon: FiPlay, color: 'from-purple-500 to-purple-600' },
    { title: 'Total Likes', value: '3.4K', trend: 15.7, icon: FiHeart, color: 'from-red-500 to-red-600' },
    { title: 'Monthly Views', value: '8.9K', trend: 12.3, icon: FiEye, color: 'from-green-500 to-green-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          🎵 Welcome Back, Euan!
        </h1>
        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Here's an overview of your Note Hero Hub portfolio.
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
            whileHover={{ y: -5, scale: 1.02 }}
            className={`p-6 rounded-xl shadow-lg border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span className="text-sm font-medium">+{stat.trend}%</span>
              </div>
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`p-6 rounded-xl shadow-lg border ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          🚀 Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Edit Pages', href: '/admin/pages', color: 'bg-blue-500' },
            { label: 'Add Content', href: '/admin/content', color: 'bg-green-500' },
            { label: 'Upload Media', href: '/admin/media', color: 'bg-purple-500' },
            { label: 'View Analytics', href: '/admin/analytics', color: 'bg-yellow-500' },
          ].map((action, index) => (
            <motion.a
              key={action.label}
              href={`#${action.href}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${action.color} text-white p-4 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg`}
            >
              {action.label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-black"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Dashboard Loaded Successfully!</h3>
            <p className="text-black/80">
              Your admin panel is ready. Navigate using the sidebar to manage your musical portfolio.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDemo;