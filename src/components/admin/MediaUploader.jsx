import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiUpload, FiImage, FiVideo, FiMusic, FiFile, FiTrash2, FiDownload, FiEye } = FiIcons;

const MediaUploader = () => {
  const { theme } = useTheme();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'performance-1.jpg',
      type: 'image',
      size: '2.4 MB',
      url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'concert-hall.jpg',
      type: 'image',
      size: '3.1 MB',
      url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop',
      uploadDate: '2024-01-14'
    },
    {
      id: 3,
      name: 'trumpet-solo.mp3',
      type: 'audio',
      size: '5.2 MB',
      url: '#',
      uploadDate: '2024-01-13'
    }
  ]);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error(`File ${file.name} is too large. Max size is 10MB.`);
        return;
      }

      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 
              file.type.startsWith('video/') ? 'video' :
              file.type.startsWith('audio/') ? 'audio' : 'file',
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file),
        uploadDate: new Date().toISOString().split('T')[0]
      };

      setUploadedFiles(prev => [newFile, ...prev]);
      toast.success(`${file.name} uploaded successfully!`);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'image': return FiImage;
      case 'video': return FiVideo;
      case 'audio': return FiMusic;
      default: return FiFile;
    }
  };

  const deleteFile = (id) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
    toast.success('File deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Media Library
        </h2>
        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Upload and manage your media files
        </p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragActive 
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
            : theme === 'dark' 
              ? 'border-gray-600 bg-gray-800/50' 
              : 'border-gray-300 bg-gray-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiUpload} className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Drop files here or click to browse
        </h3>
        <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Supports: JPG, PNG, GIF, MP4, MP3, WAV (Max 10MB)
        </p>
        <input
          type="file"
          multiple
          accept="image/*,video/*,audio/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors"
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          Choose Files
        </motion.button>
      </motion.div>

      {/* File Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadedFiles.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-xl shadow-lg border overflow-hidden ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            {/* File Preview */}
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              {file.type === 'image' ? (
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <SafeIcon 
                  icon={getFileIcon(file.type)} 
                  className="w-12 h-12 text-gray-400" 
                />
              )}
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                  onClick={() => window.open(file.url, '_blank')}
                >
                  <SafeIcon icon={FiEye} className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                >
                  <SafeIcon icon={FiDownload} className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-red-500/80 rounded-full backdrop-blur-sm"
                  onClick={() => deleteFile(file.id)}
                >
                  <SafeIcon icon={FiTrash2} className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* File Info */}
            <div className="p-4">
              <h3 className={`font-medium truncate mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {file.name}
              </h3>
              <div className="flex justify-between items-center text-sm">
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {file.size}
                </span>
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {file.uploadDate}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Usage Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl shadow-lg border p-6 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Storage Usage
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Used: 45.2 MB
            </span>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Available: 954.8 MB
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: '4.5%' }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <SafeIcon icon={FiImage} className="w-4 h-4 text-blue-500" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Images
                </span>
              </div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                32.1 MB
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <SafeIcon icon={FiVideo} className="w-4 h-4 text-red-500" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Videos
                </span>
              </div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                8.9 MB
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <SafeIcon icon={FiMusic} className="w-4 h-4 text-green-500" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Audio
                </span>
              </div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                4.2 MB
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MediaUploader;