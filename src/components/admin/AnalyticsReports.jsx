import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';
import AnalyticsCharts from './analytics/AnalyticsCharts';

const { FiDownload, FiCalendar, FiTrendingUp, FiUsers, FiEye, FiHeart, FiShare2 } = FiIcons;

const AnalyticsReports = () => {
  const { theme } = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const periods = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' }
  ];

  const keyMetrics = [
    {
      title: 'Total Page Views',
      value: '12,486',
      change: '+18.2%',
      trend: 'up',
      icon: FiEye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Unique Visitors',
      value: '8,234',
      change: '+12.5%',
      trend: 'up',
      icon: FiUsers,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Engagement Rate',
      value: '74.3%',
      change: '+5.8%',
      trend: 'up',
      icon: FiHeart,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Social Shares',
      value: '1,847',
      change: '+32.1%',
      trend: 'up',
      icon: FiShare2,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const topContent = [
    { title: 'State Championship Performance', views: 3420, engagement: '89%' },
    { title: 'Symphony Hall Concert', views: 2890, engagement: '76%' },
    { title: 'Behind the Scenes: Marching Band', views: 2340, engagement: '82%' },
    { title: 'Jazz Performance Highlights', views: 1890, engagement: '71%' },
    { title: 'Holiday Concert Special', views: 1560, engagement: '68%' }
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 3420, percentage: 42 },
    { source: 'Social Media', visitors: 2180, percentage: 27 },
    { source: 'Search Engines', visitors: 1640, percentage: 20 },
    { source: 'Referrals', visitors: 890, percentage: 11 }
  ];

  const generateReport = () => {
    // Mock report generation
    const reportData = {
      period: selectedPeriod,
      metrics: keyMetrics,
      topContent,
      trafficSources,
      generatedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-report-${selectedPeriod}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Analytics & Reports
          </h2>
          <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Track performance and generate detailed reports
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className={`px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            {periods.map(period => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateReport}
            className="px-4 py-2 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center space-x-2"
          >
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export Report</span>
          </motion.button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl shadow-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {metric.value}
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {metric.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <AnalyticsCharts />

      {/* Content Performance & Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Content */}
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
            Top Performing Content
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

        {/* Traffic Sources */}
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
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <motion.div
                key={source.source}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div>
                  <div className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {source.source}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {source.visitors.toLocaleString()} visitors
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${source.percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="h-2 bg-primary-500 rounded-full"
                    />
                  </div>
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {source.percentage}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsReports;