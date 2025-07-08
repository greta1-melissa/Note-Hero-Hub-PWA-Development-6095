import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiMusic, FiPlay, FiCalendar, FiMapPin, FiUsers, FiFilter, FiGrid, FiList } = FiIcons;

const Portfolio = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Performances', count: 12 },
    { id: 'marching', name: 'Marching Band', count: 5 },
    { id: 'concert', name: 'Concert Band', count: 4 },
    { id: 'choral', name: 'Choral', count: 3 },
  ];

  const performances = [
    {
      id: 1,
      title: 'State Championship Performance',
      category: 'marching',
      date: '2024-10-15',
      location: 'Memorial Stadium, Austin',
      audience: 15000,
      description: 'Led the brass section in a commanding performance that secured first place in the state championship.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      highlights: ['First Place', 'Solo Performance', 'Section Leader'],
      duration: '12 minutes'
    },
    {
      id: 2,
      title: 'Symphony Hall Concert',
      category: 'concert',
      date: '2024-09-22',
      location: 'Downtown Symphony Hall',
      audience: 800,
      description: 'Featured soloist in Mahler\'s Symphony No. 5, delivering a breathtaking trumpet solo.',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop',
      highlights: ['Solo Performance', 'Classical Repertoire', 'Standing Ovation'],
      duration: '45 minutes'
    },
    {
      id: 3,
      title: 'Holiday Choral Concert',
      category: 'choral',
      date: '2024-12-10',
      location: 'St. Mary\'s Cathedral',
      audience: 500,
      description: 'Performed with the city choir in a beautiful holiday concert featuring traditional carols.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      highlights: ['Choral Harmony', 'Holiday Special', 'Community Event'],
      duration: '60 minutes'
    },
    {
      id: 4,
      title: 'Regional Marching Competition',
      category: 'marching',
      date: '2024-08-18',
      location: 'University Stadium',
      audience: 8000,
      description: 'Exceptional field performance showcasing precision and musicality in competitive marching.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      highlights: ['Competition', 'Field Performance', 'Team Excellence'],
      duration: '8 minutes'
    },
    {
      id: 5,
      title: 'Jazz Ensemble Evening',
      category: 'concert',
      date: '2024-07-14',
      location: 'Blue Note Jazz Club',
      audience: 200,
      description: 'Intimate jazz performance featuring original arrangements and improvisation.',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&h=300&fit=crop',
      highlights: ['Jazz Performance', 'Improvisation', 'Original Arrangements'],
      duration: '90 minutes'
    },
    {
      id: 6,
      title: 'Spring Choral Festival',
      category: 'choral',
      date: '2024-05-20',
      location: 'City Arts Center',
      audience: 600,
      description: 'Collaborative performance with multiple choirs celebrating spring and renewal.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      highlights: ['Collaboration', 'Festival', 'Spring Theme'],
      duration: '75 minutes'
    },
  ];

  const filteredPerformances = selectedCategory === 'all' 
    ? performances 
    : performances.filter(p => p.category === selectedCategory);

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
        <title>Portfolio - Note Hero Hub</title>
        <meta name="description" content="Explore Euan's musical portfolio featuring marching band, concert band, and choral performances with detailed highlights and achievements." />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-portfolio" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-portfolio)" />
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
                Musical <span className="text-primary-400">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore a collection of memorable performances spanning marching band 
                competitions, concert hall presentations, and choral celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Controls */}
        <section className={`py-8 sticky top-16 z-40 backdrop-blur-lg border-b ${
          theme === 'dark'
            ? 'bg-gray-900/90 border-gray-800'
            : 'bg-white/90 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
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

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-black'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:text-gray-300'
                      : 'bg-gray-200 text-gray-600 hover:text-gray-700'
                  }`}
                >
                  <SafeIcon icon={FiGrid} className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary-500 text-black'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:text-gray-300'
                      : 'bg-gray-200 text-gray-600 hover:text-gray-700'
                  }`}
                >
                  <SafeIcon icon={FiList} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Performances Grid/List */}
        <section className={`py-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 to-black' 
            : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${viewMode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
                }
              >
                {filteredPerformances.map((performance, index) => (
                  <motion.div
                    key={performance.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl shadow-lg backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                        : 'bg-white/50 border-gray-200 hover:bg-white/70'
                    } ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'md:w-1/3' : 'aspect-video'
                    }`}>
                      <img
                        src={performance.image}
                        alt={performance.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <SafeIcon icon={FiPlay} className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {performance.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          performance.category === 'marching'
                            ? 'bg-blue-100 text-blue-800'
                            : performance.category === 'concert'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {performance.category}
                        </span>
                      </div>

                      <p className={`text-sm mb-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {performance.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-400" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {formatDate(performance.date)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-400" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {performance.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <SafeIcon icon={FiUsers} className="w-4 h-4 text-primary-400" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {performance.audience.toLocaleString()} audience
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {performance.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Duration */}
                      <div className="text-xs text-primary-400 font-medium">
                        Duration: {performance.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">
                Experience Live Performances
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Join us for upcoming concerts and performances. Check our events 
                calendar for the latest shows and booking information.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Upcoming Events
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;