import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiMusic, FiCalendar, FiUser, FiClock, FiSearch, FiTag, FiArrowRight, FiHeart } = FiIcons;

const Blog = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 8 },
    { id: 'marching', name: 'Marching Band', count: 3 },
    { id: 'concert', name: 'Concert Band', count: 2 },
    { id: 'choral', name: 'Choral', count: 1 },
    { id: 'tips', name: 'Music Tips', count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Marching Band Formation',
      excerpt: 'Explore the precision and artistry behind creating memorable marching band formations that captivate audiences and elevate performances.',
      category: 'marching',
      date: '2024-08-15',
      author: 'Euan',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&fit=crop',
      featured: true,
      likes: 245
    },
    {
      id: 2,
      title: 'Finding Your Voice in Choral Ensembles',
      excerpt: 'Discover techniques to blend your unique voice within a choir while maintaining vocal health and contributing to harmonic excellence.',
      category: 'choral',
      date: '2024-07-28',
      author: 'Euan',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop',
      featured: true,
      likes: 183
    },
    {
      id: 3,
      title: 'Brass Maintenance: Essential Care Tips',
      excerpt: 'Learn the proper techniques for maintaining brass instruments to ensure longevity, optimal sound quality, and performance readiness.',
      category: 'tips',
      date: '2024-07-12',
      author: 'Euan',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&fit=crop',
      featured: false,
      likes: 156
    },
    {
      id: 4,
      title: 'Concert Band Dynamics: Creating Emotional Impact',
      excerpt: 'Explore how mastering dynamic contrast can transform concert band performances and create powerful emotional connections with audiences.',
      category: 'concert',
      date: '2024-06-25',
      author: 'Euan',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&fit=crop',
      featured: false,
      likes: 204
    },
    {
      id: 5,
      title: 'Marching in Adverse Weather Conditions',
      excerpt: 'Tips and strategies for maintaining performance quality during competitions and shows in challenging weather environments.',
      category: 'marching',
      date: '2024-06-10',
      author: 'Euan',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&fit=crop',
      featured: false,
      likes: 131
    },
    {
      id: 6,
      title: 'The Psychology of Performance Anxiety',
      excerpt: 'Understanding the mental aspects of musical performance and techniques to transform nervousness into focused energy.',
      category: 'tips',
      date: '2024-05-20',
      author: 'Euan',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?w=800&fit=crop',
      featured: false,
      likes: 176
    },
    {
      id: 7,
      title: 'Concert Band Repertoire: Modern Classics',
      excerpt: 'Exploring contemporary compositions that are becoming standard repertoire for concert bands around the world.',
      category: 'concert',
      date: '2024-05-05',
      author: 'Euan',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&fit=crop',
      featured: false,
      likes: 148
    },
    {
      id: 8,
      title: 'Evolution of Marching Band Techniques',
      excerpt: 'A historical perspective on how marching band styles and techniques have evolved over the decades into modern performances.',
      category: 'marching',
      date: '2024-04-18',
      author: 'Euan',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&fit=crop',
      featured: false,
      likes: 217
    },
  ];

  // Filter posts by category and search term
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Note Hero Hub</title>
        <meta name="description" content="Explore articles, tips, and insights about marching band, concert band, and choral music from Euan's musical journey." />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-blog" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-blog)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Music <span className="text-primary-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, stories, and musical wisdom from years of experience in marching band, 
                concert performances, and choral arrangements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className={`py-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 to-black' 
            : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Featured Articles
              </h2>
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Highlighted pieces from my musical journey and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl shadow-lg backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                      : 'bg-white/50 border-gray-200 hover:bg-white/70'
                  }`}
                >
                  {/* Post Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-400" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiClock} className="w-4 h-4 text-primary-400" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className={`text-xl font-semibold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                          <SafeIcon icon={FiUser} className="w-4 h-4 text-black" />
                        </div>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {post.author}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-sm">
                        <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className={`py-8 sticky top-16 z-40 backdrop-blur-lg border-b ${
          theme === 'dark'
            ? 'bg-gray-900/90 border-gray-800'
            : 'bg-white/90 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Search */}
              <div className="relative w-full md:w-1/3">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-black'
                        : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? 'bg-black/20 text-black'
                        : theme === 'dark'
                        ? 'bg-gray-700 text-gray-400'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className={`py-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-black to-gray-900' 
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`rounded-xl shadow-lg backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                          theme === 'dark'
                            ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                            : 'bg-white/50 border-gray-200 hover:bg-white/70'
                        }`}
                      >
                        {/* Post Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          {/* Category Tag */}
                          <div className="absolute bottom-4 left-4">
                            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                              <SafeIcon icon={FiTag} className="w-3 h-3 text-primary-400" />
                              <span className="text-xs text-white">
                                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-5">
                          <div className="flex justify-between items-center mb-3 text-xs">
                            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {formatDate(post.date)}
                            </span>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiClock} className="w-3 h-3 text-primary-400" />
                              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {post.title}
                          </h3>
                          
                          <p className={`text-sm mb-4 line-clamp-3 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {post.excerpt}
                          </p>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1 text-sm">
                              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
                              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                                {post.likes}
                              </span>
                            </div>
                            <button className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium flex items-center">
                              <span>Read more</span>
                              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center py-16 rounded-xl backdrop-blur-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700'
                        : 'bg-white/50 border-gray-200'
                    }`}
                  >
                    <SafeIcon icon={FiSearch} className={`w-10 h-10 mx-auto mb-4 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                    <h3 className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      No articles found
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      Try adjusting your search or filter criteria
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black mb-4">
                  Subscribe to My Newsletter
                </h2>
                <p className="text-lg text-black/80 mb-6">
                  Get the latest articles, musical insights, and exclusive content delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <SafeIcon icon={FiMusic} className="hidden sm:block w-6 h-6 text-black self-center" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black bg-white/90"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-black text-primary-400 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-sm text-black/60 mt-3">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-black rounded-xl flex items-center justify-center">
                    <SafeIcon icon={FiMusic} className="w-12 h-12 text-primary-400" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FiMusic} className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-1">Weekly Music Insights</h4>
                        <p className="text-black/70 text-sm">
                          Tips, stories, and musical wisdom every week
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-4">
                      {[
                        'Exclusive performance tips',
                        'Behind-the-scenes content',
                        'Early access to new articles',
                        'Special event announcements'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                          </div>
                          <span className="text-black/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center text-black/80 text-sm italic">
                      "Join over 5,000 music enthusiasts who never miss an update!"
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;