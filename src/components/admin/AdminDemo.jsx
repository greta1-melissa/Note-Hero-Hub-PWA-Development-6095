import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiFileText, FiPlay, FiHeart, FiTrendingUp, FiCalendar, FiEye, FiDownload, FiMusic } = FiIcons;

const AdminDemo = () => {
  const { theme } = useTheme();

  const stats = [
    {
      title: 'Total Posts',
      value: '42',
      trend: 8.2,
      icon: FiFileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Video Views',
      value: '15.2K',
      trend: 23.1,
      icon: FiPlay,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Total Likes',
      value: '3.4K',
      trend: 15.7,
      icon: FiHeart,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Monthly Views',
      value: '8.9K',
      trend: 12.3,
      icon: FiEye,
      color: 'from-green-500 to-green-600'
    }
  ];

  const recentActivity = [
    { action: 'Published new blog post: "Marching Band Tips"', time: '2 minutes ago', type: 'content', icon: FiFileText },
    { action: 'Uploaded new performance video', time: '1 hour ago', type: 'video', icon: FiPlay },
    { action: 'Updated portfolio with new concert', time: '2 hours ago', type: 'portfolio', icon: FiMusic },
    { action: 'Received new contact inquiry', time: '3 hours ago', type: 'contact', icon: FiCalendar },
    { action: 'Generated monthly analytics report', time: '1 day ago', type: 'system', icon: FiTrendingUp }
  ];

  const topContent = [
    { title: 'State Championship Performance', views: 3420, engagement: '89%' },
    { title: 'Symphony Hall Concert', views: 2890, engagement: '76%' },
    { title: 'Behind the Scenes: Marching Band', views: 2340, engagement: '82%' },
    { title: 'Jazz Performance Highlights', views: 1890, engagement: '71%' },
    { title: 'Holiday Concert Special', views: 1560, engagement: '68%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            🎵 Welcome Back, Euan!
          </h1>
          <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Here's an overview of your Note Hero Hub portfolio.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center space-x-2"
          >
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export Data</span>
          </motion.button>
        </div>
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
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
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
            📝 Recent Activity
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
                  activity.type === 'video' ? 'bg-purple-100 text-purple-600' :
                  activity.type === 'portfolio' ? 'bg-green-100 text-green-600' :
                  activity.type === 'contact' ? 'bg-yellow-100 text-yellow-600' :
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

        {/* Top Content Performance */}
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
            🏆 Top Performing Content
          </h3>
          <div className="space-y-3">
            {topContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-medium text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {content.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    parseInt(content.engagement) > 80 
                      ? 'bg-green-100 text-green-800' 
                      : parseInt(content.engagement) > 70 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {content.engagement}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <SafeIcon icon={FiEye} className="w-3 h-3 text-primary-400" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {content.views.toLocaleString()} views
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`p-6 rounded-xl shadow-lg border ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          📊 Portfolio Views (Last 6 Months)
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[
            { month: 'Jan', views: 1200 },
            { month: 'Feb', views: 1800 },
            { month: 'Mar', views: 2400 },
            { month: 'Apr', views: 2100 },
            { month: 'May', views: 2800 },
            { month: 'Jun', views: 3200 }
          ].map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(data.views / 3500) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg min-h-[20px] flex items-end justify-center pb-2"
              >
                <span className="text-xs font-medium text-black">
                  {data.views > 2000 ? `${(data.views / 1000).toFixed(1)}k` : data.views}
                </span>
              </motion.div>
              <span className={`text-xs mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {data.month}
              </span>
            </div>
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
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Personal Portfolio Dashboard</h3>
            <p className="text-black/80">
              Your streamlined admin system is optimized for single-user management with all the tools you need to showcase your musical journey.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDemo;