import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiMusic, FiPlay, FiArrowRight, FiStar, FiUsers, FiCalendar } = FiIcons;

const Home = () => {
  const { theme } = useTheme();

  const stats = [
    { icon: FiMusic, label: 'Performances', value: '150+' },
    { icon: FiUsers, label: 'Audiences Reached', value: '10K+' },
    { icon: FiStar, label: 'Years Experience', value: '8+' },
    { icon: FiCalendar, label: 'Events This Year', value: '25+' },
  ];

  const features = [
    {
      icon: FiMusic,
      title: 'Marching Band',
      description: 'Precision, rhythm, and spectacular performances that captivate audiences.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiPlay,
      title: 'Concert Band',
      description: 'Classical and contemporary pieces performed with technical excellence.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FiStar,
      title: 'Choral Music',
      description: 'Harmonious vocal performances that touch the soul and inspire.',
      color: 'from-pink-500 to-red-600'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Note Hero Hub - Euan's Musical Portfolio</title>
        <meta name="description" content="Experience the musical journey of Euan - a versatile musician specializing in marching band, concert band, and choral performances." />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiMusic} className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent mb-4">
                Note Hero Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Euan's Musical Portfolio
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Experience the harmony of marching band precision, concert band elegance, 
                and choral beauty through the artistry of a dedicated musician.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPlay} className="w-5 h-5" />
                <span>Watch Performances</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-400 text-primary-400 font-semibold rounded-lg hover:bg-primary-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Portfolio</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <SafeIcon icon={stat.icon} className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-20 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 to-black' 
            : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Musical Excellence
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Discover the diverse musical talents and performances that define 
                Euan's artistic journey across multiple disciplines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl shadow-lg backdrop-blur-lg border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                      : 'bg-white/50 border-gray-200 hover:bg-white/70'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl font-bold text-black mb-4">
                Ready to Experience the Music?
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Join thousands of music lovers who have been captivated by Euan's 
                performances. Discover what makes each show unforgettable.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Get Started</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;