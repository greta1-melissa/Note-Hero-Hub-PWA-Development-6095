import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../hooks/useTheme';

const { FiMusic, FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { name: 'Instagram', icon: SiIcons.SiInstagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: SiIcons.SiYoutube, url: 'https://youtube.com', color: 'hover:text-red-500' },
    { name: 'Spotify', icon: SiIcons.SiSpotify, url: 'https://spotify.com', color: 'hover:text-green-500' },
    { name: 'SoundCloud', icon: SiIcons.SiSoundcloud, url: 'https://soundcloud.com', color: 'hover:text-orange-500' },
    { name: 'TikTok', icon: SiIcons.SiTiktok, url: 'https://tiktok.com', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Videos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: FiMail, text: 'euan@noteherohub.com', href: 'mailto:euan@noteherohub.com' },
    { icon: FiPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: FiMapPin, text: 'Los Angeles, CA', href: null },
  ];

  return (
    <footer className={`relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
        : 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="#fbbf24" strokeOpacity="0.1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Note Hero Hub
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6 max-w-md"
            >
              Experience the musical journey of Euan - a versatile musician specializing in 
              marching band, concert band, and choral performances. Discover the harmony 
              between passion and artistry.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 ${social.color}`}
                  title={social.name}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.path}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Get in Touch
            </motion.h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <SafeIcon icon={contact.icon} className="w-4 h-4 text-primary-400" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{contact.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Note Hero Hub. All rights reserved. Built with{' '}
            <SafeIcon icon={FiHeart} className="inline w-4 h-4 text-red-500 mx-1" />
            for music lovers.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;