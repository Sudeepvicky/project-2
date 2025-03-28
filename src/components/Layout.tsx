import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tab } from '../types';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);


  return (
    <div className={`p-2 ${isDarkMode ? 'dark bg-black' : 'bg-gray-100'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-8xl mx-auto bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
      >


        {/* Dark mode toggle button */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-white-200"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Layout structure */}
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-3rem)]">
          {/* Left Section (Fixed, No Scroll) */}
          <div className="w-full md:w-3/7 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
            <LeftSection 
              selectedProjectId={selectedProjectId}
              selectedBlogId={selectedBlogId}  // Pass blog ID
            />
          </div>

          {/* Right Section (Scrollable Content) */}
          <div className="w-full md:w-4/7 flex-1 overflow-y-auto h-[calc(100vh-3rem)]">
            <RightSection
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedProjectId={selectedProjectId}
              setSelectedProjectId={setSelectedProjectId}
              selectedBlogId={selectedBlogId}  // Pass blog ID
              setSelectedBlogId={setSelectedBlogId}  // Function to update blog ID
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
