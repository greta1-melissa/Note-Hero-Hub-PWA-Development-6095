import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const { 
  FiMenu, FiX, FiHome, FiFileText, FiImage, FiBarChart3, FiSettings, 
  FiMusic, FiPlay, FiHeart, FiTrendingUp, FiEye, FiDownload, FiEdit,
  FiPlus, FiSearch, FiSave, FiTrash2, FiCalendar, FiUser, FiSun, FiMoon
} = FiIcons;

const AdminDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [editingPost, setEditingPost] = useState(null);

  const stats = [
    { title: 'Total Posts', value: '42', trend: 8.2, icon: FiFileText, color: 'from-blue-500 to-blue-600' },
    { title: 'Video Views', value: '15.2K', trend: 23.1, icon: FiPlay, color: 'from-purple-500 to-purple-600' },
    { title: 'Total Likes', value: '3.4K', trend: 15.7, icon: FiHeart, color: 'from-red-500 to-red-600' },
    { title: 'Monthly Views', value: '8.9K', trend: 12.3, icon: FiEye, color: 'from-green-500 to-green-600' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'State Championship Performance',
      excerpt: 'Our incredible state championship performance that secured first place.',
      category: 'marching',
      status: 'published',
      date: '2024-01-15',
      views: 1542,
      featured: true
    },
    {
      id: 2,
      title: 'About Euan - Musical Journey',
      excerpt: 'Learn about Euan\'s musical background and journey.',
      category: 'about',
      status: 'published',
      date: '2024-01-10',
      views: 892,
      featured: false
    },
    {
      id: 3,
      title: 'Summer Concert Series',
      excerpt: 'Upcoming summer concert series featuring classical pieces.',
      category: 'concert',
      status: 'draft',
      date: '2024-01-08',
      views: 0,
      featured: false
    }
  ];

  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'content', icon: FiFileText, label: 'Content' },
    { id: 'media', icon: FiImage, label: 'Media' },
    { id: 'analytics', icon: FiBarChart3, label: 'Analytics' },
    { id: 'settings', icon: FiSettings, label: 'Settings' }
  ];

  const SafeIcon = ({ icon: Icon, className, ...props }) => {
    return Icon ? <Icon className={className} {...props} /> : <div className={className} />;
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          🎵 Welcome Back, Euan!
        </h1>
        <p className="text-gray-400">
          Here's your Note Hero Hub control panel. Manage your musical portfolio with ease.
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
            className="p-6 rounded-xl shadow-lg border bg-gray-800 border-gray-700 hover:bg-gray-750"
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
            <h3 className="text-2xl font-bold mb-1 text-white">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-400">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Create New Post', icon: FiFileText, color: 'from-blue-500 to-blue-600' },
          { title: 'Upload Media', icon: FiImage, color: 'from-green-500 to-green-600' },
          { title: 'View Analytics', icon: FiBarChart3, color: 'from-purple-500 to-purple-600' },
          { title: 'Edit Portfolio', icon: FiMusic, color: 'from-yellow-500 to-yellow-600' }
        ].map((action, index) => (
          <motion.button
            key={action.title}
            onClick={() => action.title.includes('Post') ? setActiveTab('content') : null}
            whileHover={{ y: -3 }}
            className="p-6 rounded-xl shadow-lg border bg-gray-800 border-gray-700 hover:bg-gray-750 text-left"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
              <SafeIcon icon={action.icon} className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold mb-1 text-white">
              {action.title}
            </h3>
            <p className="text-sm text-gray-400">
              {action.title.includes('Post') ? 'Write a new blog post' : 
               action.title.includes('Media') ? 'Add images or videos' :
               action.title.includes('Analytics') ? 'Check performance stats' :
               'Update your performances'}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="p-6 rounded-xl shadow-lg border bg-gray-800 border-gray-700">
        <h3 className="text-lg font-semibold mb-6 text-white">
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
                className="w-full bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg min-h-[20px] flex items-end justify-center pb-2"
              >
                <span className="text-xs font-medium text-black">
                  {data.views > 2000 ? `${(data.views / 1000).toFixed(1)}k` : data.views}
                </span>
              </motion.div>
              <span className="text-xs mt-2 text-gray-400">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Content Management</h2>
          <p className="text-gray-400">Manage your website content and media</p>
        </div>
        <button
          onClick={() => setEditingPost({ id: 'new', title: '', content: '', category: 'marching' })}
          className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Add Content</span>
        </button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Posts', value: blogPosts.length, color: 'from-blue-500 to-blue-600' },
          { label: 'Published', value: blogPosts.filter(p => p.status === 'published').length, color: 'from-green-500 to-green-600' },
          { label: 'Drafts', value: blogPosts.filter(p => p.status === 'draft').length, color: 'from-yellow-500 to-yellow-600' },
          { label: 'Total Views', value: blogPosts.reduce((sum, p) => sum + p.views, 0), color: 'from-purple-500 to-purple-600' }
        ].map((stat, index) => (
          <div key={stat.label} className="p-4 rounded-lg shadow-lg border bg-gray-800 border-gray-700">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content Table */}
      <div className="rounded-xl shadow-lg border overflow-hidden bg-gray-800 border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {blogPosts.map((post, index) => (
                <tr key={post.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      {post.title}
                      {post.featured && (
                        <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEditor = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          {editingPost?.id === 'new' ? 'Create New Post' : 'Edit Post'}
        </h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setEditingPost(null)}
            className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-700 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiSave} className="w-4 h-4" />
            <span>Save Post</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2">
          <div className="rounded-xl shadow-lg border p-6 bg-gray-800 border-gray-700">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Title *</label>
                <input
                  type="text"
                  defaultValue={editingPost?.title || ''}
                  className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Content *</label>
                <textarea
                  defaultValue={editingPost?.content || ''}
                  rows={15}
                  className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Write your post content here..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl shadow-lg border p-6 bg-gray-800 border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-white">Post Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Category</label>
                <select
                  defaultValue={editingPost?.category || 'marching'}
                  className="w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 border-gray-600 text-white"
                >
                  <option value="marching">Marching Band</option>
                  <option value="concert">Concert Band</option>
                  <option value="choral">Choral</option>
                  <option value="tips">Music Tips</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Status</label>
                <select
                  defaultValue={editingPost?.status || 'draft'}
                  className="w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 border-gray-600 text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  defaultChecked={editingPost?.featured || false}
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label htmlFor="featured" className="text-sm text-gray-300">
                  Featured Post
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveContent = () => {
    if (editingPost) return renderEditor();
    
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'content': return renderContent();
      case 'media': return (
        <div className="text-center py-12">
          <SafeIcon icon={FiImage} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <h3 className="text-xl font-semibold mb-2 text-white">Media Library</h3>
          <p className="text-gray-400">Upload and manage your images and videos</p>
        </div>
      );
      case 'analytics': return (
        <div className="text-center py-12">
          <SafeIcon icon={FiBarChart3} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <h3 className="text-xl font-semibold mb-2 text-white">Analytics Dashboard</h3>
          <p className="text-gray-400">Track your performance metrics and insights</p>
        </div>
      );
      case 'settings': return (
        <div className="text-center py-12">
          <SafeIcon icon={FiSettings} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <h3 className="text-xl font-semibold mb-2 text-white">Settings</h3>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full z-50 bg-gray-800 border-gray-700 border-r shadow-xl transition-all duration-300"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <AnimatePresence mode="wait">
            {sidebarOpen ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiMusic} className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-yellow-400">Note Hero Hub</h1>
                  <p className="text-xs text-gray-400">Admin Panel</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto"
              >
                <SafeIcon icon={FiMusic} className="w-5 h-5 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-md hover:bg-gray-700 transition-colors"
          >
            <SafeIcon icon={sidebarOpen ? FiX : FiMenu} className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
              }`}
            >
              <SafeIcon icon={item.icon} className={`flex-shrink-0 w-5 h-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-4 left-4 right-4">
          {sidebarOpen ? (
            <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold text-sm">E</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Euan</p>
                <p className="text-xs text-gray-400">Site Owner</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-black font-semibold text-xs">E</span>
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-280' : 'ml-80'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-gray-800/95 border-gray-700 border-b backdrop-blur-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">Manage your Note Hero Hub</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg transition-colors bg-gray-700 text-yellow-400 hover:bg-gray-600"
              >
                <SafeIcon icon={theme === 'dark' ? FiSun : FiMoon} className="w-5 h-5" />
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-semibold text-sm">E</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Euan</p>
                  <p className="text-xs text-gray-400">Site Owner</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            key={activeTab + (editingPost ? 'editing' : '')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderActiveContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDemo;