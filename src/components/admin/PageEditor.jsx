import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../hooks/useTheme';

const { FiSave, FiEye, FiEdit, FiImage, FiType, FiLayout } = FiIcons;

const PageEditor = ({ page, onSave, onCancel }) => {
  const { theme } = useTheme();
  const [isPreview, setIsPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: page?.title || '',
    subtitle: page?.subtitle || '',
    content: page?.content || '',
    heroImage: page?.heroImage || '',
    metaDescription: page?.metaDescription || '',
    sections: page?.sections || []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSectionUpdate = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) => 
        i === index ? { ...section, [field]: value } : section
      )
    }));
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, {
        type: 'text',
        title: '',
        content: '',
        image: ''
      }]
    }));
  };

  const removeSection = (index) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error('Page title is required');
      return;
    }

    onSave({
      ...page,
      ...formData,
      lastModified: new Date().toISOString()
    });
    toast.success('Page updated successfully');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Edit Page: {page?.name}
          </h2>
          <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Update the content and layout of this page
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isPreview
                ? 'bg-primary-500 text-black'
                : theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            <SafeIcon icon={FiEye} className="w-4 h-4 mr-2" />
            {isPreview ? 'Edit' : 'Preview'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl shadow-lg border p-6 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            {!isPreview ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Page Title */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Page Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter page title"
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter subtitle"
                  />
                </div>

                {/* Hero Image */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Hero Image URL
                  </label>
                  <input
                    type="url"
                    name="heroImage"
                    value={formData.heroImage}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Main Content */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Main Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={10}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Write your page content here..."
                  />
                </div>

                {/* Sections */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Page Sections
                    </label>
                    <button
                      type="button"
                      onClick={addSection}
                      className="px-3 py-1 bg-primary-500 text-black rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      Add Section
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.sections.map((section, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className={`font-medium ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            Section {index + 1}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeSection(index)}
                            className="text-red-500 hover:text-red-400 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          <input
                            type="text"
                            value={section.title}
                            onChange={(e) => handleSectionUpdate(index, 'title', e.target.value)}
                            placeholder="Section title"
                            className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                              theme === 'dark'
                                ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            }`}
                          />
                          <textarea
                            value={section.content}
                            onChange={(e) => handleSectionUpdate(index, 'content', e.target.value)}
                            placeholder="Section content"
                            rows={4}
                            className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                              theme === 'dark'
                                ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSave} className="w-4 h-4" />
                  <span>Save Page</span>
                </motion.button>
              </form>
            ) : (
              /* Preview Mode */
              <div className="prose prose-lg max-w-none">
                <h1 className={`text-3xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {formData.title || 'Untitled Page'}
                </h1>
                
                {formData.subtitle && (
                  <p className={`text-lg mb-6 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {formData.subtitle}
                  </p>
                )}

                {formData.heroImage && (
                  <img
                    src={formData.heroImage}
                    alt="Hero"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}

                <div className={`whitespace-pre-wrap mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {formData.content || 'No content yet...'}
                </div>

                {/* Sections Preview */}
                {formData.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h2>
                    <div className={`whitespace-pre-wrap ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Page Settings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-xl shadow-lg border p-6 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Page Information
            </h3>
            <div className="space-y-3">
              <div>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Page URL: /{page?.slug}
                </span>
              </div>
              <div>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Last Modified: {page?.lastModified ? new Date(page.lastModified).toLocaleDateString() : 'Never'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* SEO Settings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`rounded-xl shadow-lg border p-6 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              SEO Settings
            </h3>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows={3}
                placeholder="Brief description for search engines"
                className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageEditor;