import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';
import PageEditor from './PageEditor';

const { FiEdit, FiEye, FiSettings, FiHome, FiUser, FiMusic, FiMail, FiVideo } = FiIcons;

const PageManager = () => {
  const { theme } = useTheme();
  const [selectedPage, setSelectedPage] = useState(null);
  const [showEditor, setShowEditor] = useState(false);

  const [pages, setPages] = useState([
    {
      id: 'home',
      name: 'Home Page',
      slug: '',
      title: 'Note Hero Hub - Euan\'s Musical Portfolio',
      subtitle: 'Experience the harmony of marching band precision, concert band elegance, and choral beauty',
      content: 'Welcome to my musical journey. Discover performances that blend technical precision with emotional depth.',
      heroImage: '',
      metaDescription: 'Experience the musical journey of Euan - a versatile musician specializing in marching band, concert band, and choral performances.',
      lastModified: '2024-01-15T10:30:00Z',
      sections: [
        {
          type: 'stats',
          title: 'Performance Statistics',
          content: 'Over 150 performances reaching 10,000+ audience members'
        },
        {
          type: 'features',
          title: 'Musical Excellence',
          content: 'Discover diverse musical talents across multiple disciplines'
        }
      ]
    },
    {
      id: 'about',
      name: 'About Page',
      slug: 'about',
      title: 'About Euan',
      subtitle: 'A passionate musician dedicated to excellence in marching band, concert band, and choral performances',
      content: 'With over 8 years of musical experience, Euan has developed a unique ability to connect with audiences through powerful performances that blend technical precision with emotional depth.',
      heroImage: '',
      metaDescription: 'Learn about Euan\'s musical journey, achievements, and passion for marching band, concert band, and choral performances.',
      lastModified: '2024-01-10T14:20:00Z',
      sections: [
        {
          type: 'achievements',
          title: 'Achievements & Recognition',
          content: 'Regional Champion, Solo Performances, Section Leader, Music Educator'
        },
        {
          type: 'skills',
          title: 'Musical Skills & Expertise',
          content: 'Trumpet (95%), Piano (85%), Conducting (80%), Composition (75%)'
        },
        {
          type: 'timeline',
          title: 'Musical Journey',
          content: 'From 2016 beginnings to 2024 musical excellence'
        }
      ]
    },
    {
      id: 'portfolio',
      name: 'Portfolio Page',
      slug: 'portfolio',
      title: 'Musical Portfolio',
      subtitle: 'Explore a collection of memorable performances spanning marching band competitions, concert hall presentations, and choral celebrations',
      content: 'Each performance represents dedication, artistry, and the pursuit of musical excellence.',
      heroImage: '',
      metaDescription: 'Explore Euan\'s musical portfolio featuring marching band, concert band, and choral performances with detailed highlights and achievements.',
      lastModified: '2024-01-08T09:15:00Z',
      sections: [
        {
          type: 'categories',
          title: 'Performance Categories',
          content: 'Marching Band, Concert Band, Choral performances with detailed documentation'
        }
      ]
    },
    {
      id: 'videos',
      name: 'Videos Page',
      slug: 'videos',
      title: 'Performance Videos',
      subtitle: 'Watch highlights from concerts, competitions, and special performances',
      content: 'Experience the artistry and passion behind each musical moment through these curated video performances.',
      heroImage: '',
      metaDescription: 'Watch Euan\'s musical performances including marching band competitions, concert hall shows, and choral presentations.',
      lastModified: '2024-01-05T16:45:00Z',
      sections: [
        {
          type: 'featured',
          title: 'Featured Performances',
          content: 'Standout performances and memorable moments'
        }
      ]
    },
    {
      id: 'contact',
      name: 'Contact Page',
      slug: 'contact',
      title: 'Get in Touch',
      subtitle: 'Ready to collaborate, book a performance, or just want to connect?',
      content: 'I\'d love to hear from you and discuss how music can bring your vision to life.',
      heroImage: '',
      metaDescription: 'Get in touch with Euan for bookings, collaborations, or questions about musical performances and events.',
      lastModified: '2024-01-03T11:30:00Z',
      sections: [
        {
          type: 'contact_info',
          title: 'Contact Information',
          content: 'Multiple ways to reach out for collaborations and bookings'
        },
        {
          type: 'faq',
          title: 'Frequently Asked Questions',
          content: 'Common questions about bookings, performances, and collaborations'
        }
      ]
    }
  ]);

  const getPageIcon = (pageId) => {
    switch (pageId) {
      case 'home': return FiHome;
      case 'about': return FiUser;
      case 'portfolio': return FiMusic;
      case 'videos': return FiVideo;
      case 'contact': return FiMail;
      default: return FiSettings;
    }
  };

  const handleEditPage = (page) => {
    setSelectedPage(page);
    setShowEditor(true);
  };

  const handleSavePage = (updatedPage) => {
    setPages(prev => 
      prev.map(page => 
        page.id === updatedPage.id ? updatedPage : page
      )
    );
    setShowEditor(false);
    setSelectedPage(null);
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setSelectedPage(null);
  };

  if (showEditor && selectedPage) {
    return (
      <PageEditor
        page={selectedPage}
        onSave={handleSavePage}
        onCancel={handleCancelEdit}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Page Management
        </h2>
        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Edit the content and layout of your website pages
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg shadow-lg border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <SafeIcon icon={FiSettings} className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {pages.length}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Pages
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-4 rounded-lg shadow-lg border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <SafeIcon icon={FiEdit} className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {pages.filter(p => p.lastModified).length}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Recently Updated
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-4 rounded-lg shadow-lg border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <SafeIcon icon={FiEye} className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {pages.reduce((sum, page) => sum + (page.sections?.length || 0), 0)}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Sections
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pages List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`rounded-xl shadow-lg border transition-all duration-300 overflow-hidden ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                : 'bg-white border-gray-200 hover:shadow-xl'
            }`}
          >
            {/* Page Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={getPageIcon(page.id)} className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {page.name}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      /{page.slug || 'home'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {page.title}
                  </h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {page.subtitle || 'No subtitle'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {page.sections?.length || 0} sections
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {page.lastModified ? new Date(page.lastModified).toLocaleDateString() : 'Never updated'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEditPage(page)}
                  className="flex-1 py-2 px-3 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                >
                  <SafeIcon icon={FiEdit} className="w-4 h-4" />
                  <span>Edit</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(`#/${page.slug}`, '_blank')}
                  className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <SafeIcon icon={FiEye} className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PageManager;