import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import { useTheme } from '../../hooks/useTheme';

// Lazy load admin components for better performance
const AdminDemo = lazy(() => import('../../components/admin/AdminDemo'));
const ContentManager = lazy(() => import('../../components/admin/ContentManager'));
const MediaManager = lazy(() => import('../../components/admin/MediaManager'));
const AnalyticsReports = lazy(() => import('../../components/admin/AnalyticsReports'));
const AdminSettings = lazy(() => import('../../components/admin/AdminSettings'));
const PageManager = lazy(() => import('../../components/admin/PageManager'));

// Loading component
const LoadingSpinner = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className={`w-8 h-8 border-2 border-transparent border-t-primary-500 rounded-full animate-spin mx-auto mb-4`} />
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading...
        </p>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Note Hero Hub</title>
        <meta name="description" content="Personal admin dashboard for Note Hero Hub" />
        <meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
      </Helmet>

      <div className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        {/* Sidebar */}
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}>
          {/* Header */}
          <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content */}
          <main className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="/dashboard" element={<AdminDemo />} />
                  <Route path="/pages" element={<PageManager />} />
                  <Route path="/content" element={<ContentManager />} />
                  <Route path="/media" element={<MediaManager />} />
                  <Route path="/analytics" element={<AnalyticsReports />} />
                  <Route path="/settings" element={<AdminSettings />} />
                </Routes>
              </Suspense>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;