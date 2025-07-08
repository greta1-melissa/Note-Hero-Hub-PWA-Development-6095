import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiPlay, FiPause, FiVolume2, FiMaximize, FiCalendar, FiEye, FiHeart, FiShare2 } = FiIcons;

const Videos = () => {
  const { theme } = useTheme();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos', count: 8 },
    { id: 'marching', name: 'Marching Band', count: 3 },
    { id: 'concert', name: 'Concert Band', count: 3 },
    { id: 'choral', name: 'Choral', count: 2 },
  ];

  const videos = [
    {
      id: 1,
      title: 'State Championship Winning Performance',
      category: 'marching',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      duration: '12:45',
      views: 15420,
      likes: 892,
      date: '2024-10-15',
      description: 'Our championship-winning marching band performance that secured first place at the state level competition.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: true
    },
    {
      id: 2,
      title: 'Symphony Hall Solo Performance',
      category: 'concert',
      thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop',
      duration: '8:32',
      views: 8730,
      likes: 456,
      date: '2024-09-22',
      description: 'Featured trumpet solo in Mahler\'s Symphony No. 5 at the prestigious Downtown Symphony Hall.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: true
    },
    {
      id: 3,
      title: 'Holiday Choral Concert Highlights',
      category: 'choral',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      duration: '15:20',
      views: 5240,
      likes: 312,
      date: '2024-12-10',
      description: 'Beautiful holiday choral performance featuring traditional carols and contemporary arrangements.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: false
    },
    {
      id: 4,
      title: 'Behind the Scenes: Marching Band Practice',
      category: 'marching',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      duration: '6:15',
      views: 3210,
      likes: 189,
      date: '2024-08-05',
      description: 'Get an inside look at our intensive marching band practice sessions and preparation process.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: false
    },
    {
      id: 5,
      title: 'Jazz Ensemble Performance',
      category: 'concert',
      thumbnail: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&h=300&fit=crop',
      duration: '11:28',
      views: 6890,
      likes: 423,
      date: '2024-07-14',
      description: 'Smooth jazz performance featuring original arrangements and improvisation at the Blue Note Jazz Club.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: false
    },
    {
      id: 6,
      title: 'Spring Choral Festival',
      category: 'choral',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      duration: '18:45',
      views: 4560,
      likes: 267,
      date: '2024-05-20',
      description: 'Collaborative choral performance celebrating spring with multiple choir groups.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      featured: false
    },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  const featuredVideos = videos.filter(v => v.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <>
      <Helmet>
        <title>Videos - Note Hero Hub</title>
        <meta name="description" content="Watch Euan's musical performances including marching band competitions, concert hall shows, and choral presentations." />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-videos" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-videos)" />
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
                Performance <span className="text-primary-400">Videos</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch highlights from concerts, competitions, and special performances 
                that showcase the artistry and passion behind each musical moment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Videos */}
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
                Featured Performances
              </h2>
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Don't miss these standout performances and memorable moments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
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
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <SafeIcon icon={FiPlay} className="w-8 h-8 text-black ml-1" />
                      </motion.div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {video.title}
                    </h3>
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {video.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiEye} className="w-4 h-4 text-primary-400" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {formatViews(video.views)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {video.likes}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-400" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {formatDate(video.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className={`py-8 sticky top-16 z-40 backdrop-blur-lg border-b ${
          theme === 'dark'
            ? 'bg-gray-900/90 border-gray-800'
            : 'bg-white/90 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-black'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-black/20 text-black'
                      : theme === 'dark'
                      ? 'bg-gray-700 text-gray-400'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* All Videos Grid */}
        <section className={`py-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-black to-gray-900' 
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                All Performances
              </h2>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
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
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video group cursor-pointer">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <SafeIcon icon={FiPlay} className="w-6 h-6 text-black ml-0.5" />
                        </motion.div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {video.title}
                      </h3>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiEye} className="w-3 h-3 text-primary-400" />
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                              {formatViews(video.views)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiHeart} className="w-3 h-3 text-red-500" />
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                              {video.likes}
                            </span>
                          </div>
                        </div>
                        <span className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {formatDate(video.date)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Upload Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">
                More Videos Coming Soon
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Stay tuned for new performance videos, behind-the-scenes content, 
                and exclusive musical moments. Subscribe to never miss an update.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe for Updates
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Videos;