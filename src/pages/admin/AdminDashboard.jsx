import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DashboardOverview from '../../components/admin/DashboardOverview';
import ContentManager from '../../components/admin/ContentManager';
import UserManager from '../../components/admin/UserManager';
import MediaManager from '../../components/admin/MediaManager';
import AnalyticsReports from '../../components/admin/AnalyticsReports';
import AdminSettings from '../../components/admin/AdminSettings';
import { useTheme } from '../../hooks/useTheme';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Note Hero Hub</title>
        <meta name="description" content="Admin dashboard for Note Hero Hub management" />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        {/* Sidebar */}
        <AdminSidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />

        {/* Main Content */}
        <div className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}>
          {/* Header */}
          <AdminHeader 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
          />

          {/* Content */}
          <main className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="/dashboard" element={<DashboardOverview />} />
                <Route path="/content" element={<ContentManager />} />
                <Route path="/users" element={<UserManager />} />
                <Route path="/media" element={<MediaManager />} />
                <Route path="/analytics" element={<AnalyticsReports />} />
                <Route path="/settings" element={<AdminSettings />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;