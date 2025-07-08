import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiHome, FiFileText, FiImage, FiBarChart3, FiSettings, FiUsers, FiMessageSquare, FiCalendar, FiMusic, FiLayout } = FiIcons;

const AdminNavigation = ({ collapsed = false }) => {
  const { theme } = useTheme();
  const location = useLocation();

  const navigationItems = [
    {
      section: 'Overview',
      items: [
        { name: 'Dashboard', path: '/admin/dashboard', icon: FiHome, description: 'Main overview and stats' }
      ]
    },
    {
      section: 'Content Management',
      items: [
        { name: 'Pages', path: '/admin/pages', icon: FiLayout, description: 'Edit website pages' },
        { name: 'Content', path: '/admin/content', icon: FiFileText, description: 'Blog posts and articles' },
        { name: 'Portfolio', path: '/admin/portfolio', icon: FiMusic, description: 'Musical performances' },
        { name: 'Media', path: '/admin/media', icon: FiImage, description: 'Images and videos' }
      ]
    },
    {
      section: 'Analytics & Insights',
      items: [
        { name: 'Analytics', path: '/admin/analytics', icon: FiBarChart3, description: 'Performance metrics' },
        { name: 'Messages', path: '/admin/messages', icon: FiMessageSquare, description: 'Contact inquiries' }
      ]
    },
    {
      section: 'System',
      items: [
        { name: 'Settings', path: '/admin/settings', icon: FiSettings, description: 'Account and preferences' }
      ]
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="space-y-6 p-4">
      {navigationItems.map((section, sectionIndex) => (
        <div key={section.section}>
          {!collapsed && (
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {section.section}
            </h3>
          )}
          <div className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
              >
                <Link
                  to={item.path}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-500 text-black shadow-lg'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-primary-400'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  }`}
                >
                  <SafeIcon
                    icon={item.icon}
                    className={`flex-shrink-0 w-5 h-5 ${collapsed ? 'mx-auto' : 'mr-3'}`}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-2 h-2 bg-black rounded-full"
                        />
                      )}
                    </>
                  )}
                </Link>
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    {item.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default AdminNavigation;