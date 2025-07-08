import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import supabase from '../lib/supabase';

const { 
  FiMenu, FiX, FiHome, FiFileText, FiImage, FiBarChart3, FiSettings,
  FiMusic, FiPlay, FiHeart, FiTrendingUp, FiEye, FiEdit, FiTrash2,
  FiPlus, FiLogOut, FiUser, FiSave
} = FiIcons;

const SafeIcon = ({ icon: Icon, className, ...props }) => {
  return Icon ? <Icon className={className} {...props} /> : <div className={className} />;
};

// Dashboard Overview Component
const DashboardOverview = () => {
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    totalViews: 0,
    featuredPosts: 0
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts_nhh2024')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPosts(data || []);
      
      // Calculate stats
      const totalPosts = data?.length || 0;
      const publishedPosts = data?.filter(p => p.status === 'published').length || 0;
      const totalViews = data?.reduce((sum, p) => sum + (p.views || 0), 0) || 0;
      const featuredPosts = data?.filter(p => p.featured).length || 0;

      setStats({
        totalPosts,
        publishedPosts,
        totalViews,
        featuredPosts
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Set default stats if database isn't available
      setStats({
        totalPosts: 3,
        publishedPosts: 2,
        totalViews: 498,
        featuredPosts: 2
      });
    }
  };

  const statCards = [
    { title: 'Total Posts', value: stats.totalPosts, icon: FiFileText, color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { title: 'Published', value: stats.publishedPosts, icon: FiPlay, color: 'from-green-500 to-green-600', trend: '+8%' },
    { title: 'Total Views', value: stats.totalViews, icon: FiEye, color: 'from-purple-500 to-purple-600', trend: '+23%' },
    { title: 'Featured', value: stats.featuredPosts, icon: FiHeart, color: 'from-red-500 to-red-600', trend: '+15%' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">
          🎵 Welcome Back, Euan!
        </h1>
        <p className="text-xl text-gray-400">
          Here's your Note Hero Hub control panel. Manage your musical portfolio with ease.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="text-green-400 text-sm font-medium flex items-center">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4 mr-1" />
                {stat.trend}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">⚡ Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Create New Post', icon: FiFileText, color: 'from-blue-500 to-blue-600', link: '/admin/content' },
            { title: 'Upload Media', icon: FiImage, color: 'from-green-500 to-green-600', link: '/admin/media' },
            { title: 'View Analytics', icon: FiBarChart3, color: 'from-purple-500 to-purple-600', link: '/admin/analytics' },
            { title: 'Settings', icon: FiSettings, color: 'from-yellow-500 to-yellow-600', link: '/admin/settings' }
          ].map((action, index) => (
            <Link key={action.title} to={action.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                  <SafeIcon icon={action.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {action.title === 'Create New Post' ? 'Write a new blog post' :
                   action.title === 'Upload Media' ? 'Add images or videos' :
                   action.title === 'View Analytics' ? 'Check performance stats' :
                   'Manage your settings'}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">📝 Recent Posts</h2>
          <Link 
            to="/admin/content"
            className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
          >
            View All Posts
          </Link>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          {posts.length > 0 ? (
            <div className="divide-y divide-gray-700">
              {posts.slice(0, 5).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-4 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">
                        {post.title}
                        {post.featured && (
                          <span className="ml-2 px-2 py-1 bg-yellow-500 text-black text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                        <span>{post.category}</span>
                        <span>{post.views || 0} views</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No posts yet</h3>
              <p className="text-gray-400 mb-4">Create your first blog post to get started</p>
              <Link
                to="/admin/content"
                className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
                Create Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Content Management Component
const ContentManagement = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts_nhh2024')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Error loading posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const { error } = await supabase
          .from('posts_nhh2024')
          .delete()
          .eq('id', id);

        if (error) throw error;

        setPosts(posts.filter(post => post.id !== id));
        toast.success('Post deleted successfully');
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Error deleting post');
      }
    }
  };

  if (showEditor) {
    return <PostEditor post={editingPost} onSave={() => {
      setShowEditor(false);
      setEditingPost(null);
      fetchPosts();
    }} onCancel={() => {
      setShowEditor(false);
      setEditingPost(null);
    }} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Content Management</h2>
          <p className="text-gray-400 mt-2">Create and manage your blog posts and content</p>
        </div>
        <button
          onClick={() => setShowEditor(true)}
          className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Posts', value: posts.length, color: 'from-blue-500 to-blue-600' },
          { label: 'Published', value: posts.filter(p => p.status === 'published').length, color: 'from-green-500 to-green-600' },
          { label: 'Drafts', value: posts.filter(p => p.status === 'draft').length, color: 'from-yellow-500 to-yellow-600' },
          { label: 'Featured', value: posts.filter(p => p.featured).length, color: 'from-purple-500 to-purple-600' }
        ].map((stat, index) => (
          <div key={stat.label} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Posts Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading posts...</p>
          </div>
        ) : posts.length > 0 ? (
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
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {post.title}
                        {post.featured && (
                          <span className="ml-2 px-2 py-1 text-xs bg-yellow-500 text-black rounded-full">
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
                      {post.views || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(post.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setEditingPost(post);
                            setShowEditor(true);
                          }}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <SafeIcon icon={FiEdit} className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No posts yet</h3>
            <p className="text-gray-400 mb-4">Create your first blog post to get started</p>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
              Create Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Post Editor Component
const PostEditor = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    category: post?.category || 'general',
    status: post?.status || 'draft',
    featured: post?.featured || false
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('posts_nhh2024')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', post.id);

        if (error) throw error;
        toast.success('Post updated successfully');
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts_nhh2024')
          .insert([formData]);

        if (error) throw error;
        toast.success('Post created successfully');
      }

      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Error saving post');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors flex items-center space-x-2"
          >
            <SafeIcon icon={FiSave} className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Post'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={15}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                  placeholder="Write your post content here..."
                />
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Post Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="general">General</option>
                  <option value="marching">Marching Band</option>
                  <option value="concert">Concert Band</option>
                  <option value="choral">Choral</option>
                  <option value="tips">Music Tips</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-yellow-500 border-gray-600 rounded focus:ring-yellow-500"
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
};

// Other placeholder components
const MediaManagement = () => (
  <div className="text-center py-12">
    <SafeIcon icon={FiImage} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
    <h3 className="text-xl font-semibold mb-2 text-white">Media Library</h3>
    <p className="text-gray-400 mb-6">Upload and manage your images and videos</p>
    <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center space-x-2 mx-auto">
      <SafeIcon icon={FiPlus} className="w-4 h-4" />
      <span>Upload Media</span>
    </button>
  </div>
);

const Analytics = () => (
  <div className="text-center py-12">
    <SafeIcon icon={FiBarChart3} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
    <h3 className="text-xl font-semibold mb-2 text-white">Analytics Dashboard</h3>
    <p className="text-gray-400">Track your performance metrics and insights</p>
  </div>
);

const Settings = () => (
  <div className="text-center py-12">
    <SafeIcon icon={FiSettings} className="w-16 h-16 mx-auto mb-4 text-gray-500" />
    <h3 className="text-xl font-semibold mb-2 text-white">Settings</h3>
    <p className="text-gray-400">Manage your account and preferences</p>
  </div>
);

// Main Admin Dashboard Layout
const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard', path: '/admin/dashboard' },
    { id: 'content', icon: FiFileText, label: 'Content', path: '/admin/content' },
    { id: 'media', icon: FiImage, label: 'Media', path: '/admin/media' },
    { id: 'analytics', icon: FiBarChart3, label: 'Analytics', path: '/admin/analytics' },
    { id: 'settings', icon: FiSettings, label: 'Settings', path: '/admin/settings' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full z-50 bg-gray-800 border-r border-gray-700 shadow-xl"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {sidebarOpen ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="w-5 h-5 text-black" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-yellow-400">Note Hero Hub</h1>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto">
              <SafeIcon icon={FiMusic} className="w-5 h-5 text-black" />
            </div>
          )}
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
            <Link key={item.id} to={item.path}>
              <div
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                }`}
              >
                <SafeIcon icon={item.icon} className={`w-5 h-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
                {sidebarOpen && <span>{item.label}</span>}
              </div>
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-4 left-4 right-4">
          {sidebarOpen ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-semibold text-sm">E</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Euan</p>
                  <p className="text-xs text-gray-400">Site Owner</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-900/20 hover:text-red-400 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-black font-semibold text-xs">E</span>
              </div>
              <button
                onClick={logout}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-900/20 transition-colors mx-auto"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4 text-red-400" />
              </button>
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-280' : 'ml-80'}`}>
        {/* Top Bar */}
        <header className="bg-gray-800/95 border-b border-gray-700 backdrop-blur-lg sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
              <p className="text-sm text-gray-400">Manage your Note Hero Hub</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold text-sm">E</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-white">Euan</p>
                <p className="text-xs text-gray-400">Site Owner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/content" element={<ContentManagement />} />
            <Route path="/media" element={<MediaManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;