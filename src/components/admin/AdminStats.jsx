import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import {useTheme} from '../../hooks/useTheme';

const {FiTrendingUp, FiTrendingDown, FiMinus} = FiIcons;

const AdminStats = ({ stats }) => {
  const {theme} = useTheme();

  const getTrendIcon = (trend) => {
    if (trend > 0) return FiTrendingUp;
    if (trend < 0) return FiTrendingDown;
    return FiMinus;
  };

  const getTrendColor = (trend) => {
    if (trend > 0) return 'text-green-500';
    if (trend < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
              <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
            </div>
            <div className={`flex items-center space-x-1 ${getTrendColor(stat.trend)}`}>
              <SafeIcon icon={getTrendIcon(stat.trend)} className="w-4 h-4" />
              <span className="text-sm font-medium">
                {stat.trend > 0 ? '+' : ''}{stat.trend}%
              </span>
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
  );
};

export default AdminStats;