import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiUser, FiMusic, FiAward, FiHeart, FiTarget, FiTrendingUp, FiUsers } = FiIcons;

const About = () => {
  const { theme } = useTheme();

  const achievements = [
    {
      icon: FiAward,
      title: 'Regional Champion',
      description: 'First place in state marching band competition',
      year: '2023'
    },
    {
      icon: FiMusic,
      title: 'Solo Performances',
      description: 'Featured soloist in 15+ concerts',
      year: '2022-2024'
    },
    {
      icon: FiUsers,
      title: 'Section Leader',
      description: 'Led brass section for 3 consecutive years',
      year: '2021-2024'
    },
    {
      icon: FiTrendingUp,
      title: 'Music Educator',
      description: 'Mentored 50+ young musicians',
      year: '2023-2024'
    },
  ];

  const skills = [
    { name: 'Trumpet', level: 95 },
    { name: 'Piano', level: 85 },
    { name: 'Conducting', level: 80 },
    { name: 'Composition', level: 75 },
    { name: 'Vocal Performance', level: 88 },
    { name: 'Music Theory', level: 92 },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Musical Journey Begins',
      description: 'Started learning trumpet and joined school band'
    },
    {
      year: '2018',
      title: 'First Competition',
      description: 'Participated in regional marching band competition'
    },
    {
      year: '2020',
      title: 'Leadership Role',
      description: 'Appointed as section leader for brass section'
    },
    {
      year: '2022',
      title: 'Solo Debut',
      description: 'Performed first solo concert to standing ovation'
    },
    {
      year: '2024',
      title: 'Musical Excellence',
      description: 'Continuing to inspire through music and mentorship'
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Note Hero Hub</title>
        <meta name="description" content="Learn about Euan's musical journey, achievements, and passion for marching band, concert band, and choral performances." />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-about)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold text-white mb-6">
                  About <span className="text-primary-400">Euan</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  A passionate musician dedicated to excellence in marching band, 
                  concert band, and choral performances.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  With over 8 years of musical experience, Euan has developed a unique 
                  ability to connect with audiences through powerful performances that 
                  blend technical precision with emotional depth. From commanding the 
                  field in marching band formations to delivering stirring concert 
                  hall performances, music is not just a passion—it's a calling.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <SafeIcon icon={FiMusic} className="w-5 h-5 text-primary-400" />
                    <span className="text-white">8+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-primary-400" />
                    <span className="text-white">Award Winner</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-primary-400" />
                    <span className="text-white">Music Educator</span>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="w-32 h-32 text-black opacity-50" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={FiMusic} className="w-12 h-12 text-primary-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
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
                Achievements & Recognition
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Celebrating milestones and recognition earned through dedication 
                and musical excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl shadow-lg backdrop-blur-lg border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                      : 'bg-white/50 border-gray-200 hover:bg-white/70'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <SafeIcon icon={achievement.icon} className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-sm text-primary-400 font-semibold mb-1">
                    {achievement.year}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`py-20 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-black to-gray-900' 
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Musical Skills & Expertise
                </h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className="h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Musical Journey
                </h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {item.year.slice(-2)}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SafeIcon icon={FiTarget} className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-black mb-6">
                Musical Mission
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
                To inspire and connect people through the universal language of music, 
                fostering appreciation for the arts while mentoring the next generation 
                of musicians. Every performance is an opportunity to share the joy and 
                transformative power of music.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;