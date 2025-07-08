import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { 
  FiFileText, FiPlay, FiHeart, FiTrendingUp, FiCalendar, FiEye, 
  FiDownload, FiMusic, FiUsers, FiMessageSquare, FiSettings,
  FiBarChart3, FiImage, FiEdit, FiPlus
} = FiIcons;

const AdminDashboard = () => {
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

  const quickActions = [
    {
      title: 'Create New Post',
      description: 'Write a new blog post',
      icon: FiFileText,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/content'
    },
    {
      title: 'Upload Media',
      description: 'Add images or videos',
      icon: FiImage,
      color: 'from-green-500 to-green-600',
      href: '/admin/media'
    },
    {
      title: 'View Analytics',
      description: 'Check performance stats',
      icon: FiBarChart3,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/analytics'
    },
    {
      title: 'Edit Portfolio',
      description: 'Update your performances',
      icon: FiMusic,
      color: 'from-yellow-500 to-yellow-600',
      href: '/admin/content'
    }
  ];

  const recentActivity = [
    { 
      action: 'Published new blog post: "Marching Band Tips"', 
      time: '2 minutes ago', 
      type: 'content', 
      icon: FiFileText 
    },
    { 
      action: 'Uploaded new performance video', 
      time: '1 hour ago', 
      type: 'video', 
      icon: FiPlay 
    },
    { 
      action: 'Updated portfolio with new concert', 
      time: '2 hours ago', 
      type: 'portfolio', 
      icon: FiMusic 
    },
    { 
      action: 'Received new contact inquiry', 
      time: '3 hours ago', 
      type: 'contact', 
      icon: FiMessageSquare 
    },
    { 
      action: 'Generated monthly analytics report', 
      time: '1 day ago', 
      type: 'system', 
      icon: FiTrendingUp 
    }
  ];

  const topContent = [
    { title: 'State Championship Performance', views: 3420, engagement: '89%' },
    { title: 'Symphony Hall Concert', views: 2890, engagement: '76%' },
    { title: 'Behind the Scenes: Marching Band', views: 2340, engagement: '82%' },
    { title: 'Jazz Performance Highlights', views: 1890, engagement: '71%' },
    { title: 'Holiday Concert Special', views: 1560, engagement: '68%' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            🎵 Welcome Back, Euan!
          </h1>
          <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Here's your Note Hero Hub control panel. Manage your musical portfolio with ease.
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <SafeIcon icon={FiSettings} className="w-5 h-5" />
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
            className={`p-6 rounded-xl shadow-lg border transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                : 'bg-white border-gray-200 hover:shadow-xl'
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
      <div>
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          ⚡ Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className={`p-6 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                  : 'bg-white border-gray-200 hover:shadow-xl'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                <SafeIcon icon={action.icon} className="w-5 h-5 text-white" />
              </div>
              <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {action.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {action.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              📝 Recent Activity
            </h3>
            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 ${
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
                  <p className={`text-xs mt-1 ${
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
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              🏆 Top Performing Content
            </h3>
            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
              View Analytics
            </button>
          </div>
          <div className="space-y-3">
            {topContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-colors hover:border-primary-400 ${
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm">
                    <SafeIcon icon={FiEye} className="w-3 h-3 text-primary-400" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {content.views.toLocaleString()} views
                    </span>
                  </div>
                  <button className="text-primary-400 hover:text-primary-300">
                    <SafeIcon icon={FiEdit} className="w-3 h-3" />
                  </button>
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
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            📊 Portfolio Views (Last 6 Months)
          </h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-xs bg-primary-500 text-black rounded-full">6M</button>
            <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 rounded-full">1Y</button>
          </div>
        </div>
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
                className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg min-h-[20px] flex items-end justify-center pb-2 relative group cursor-pointer"
              >
                <span className="text-xs font-medium text-black">
                  {data.views > 2000 ? `${(data.views / 1000).toFixed(1)}k` : data.views}
                </span>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {data.views} views
                </div>
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
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Personal Portfolio Dashboard</h3>
            <p className="text-black/80">
              Your streamlined admin system is optimized for single-user management with all the tools you need to showcase your musical journey.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-black/20 rounded-lg font-medium hover:bg-black/30 transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;