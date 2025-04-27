'use client';

import React from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function cycleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  }

  return (
    <motion.button
      onClick={cycleTheme}
      className="p-2 rounded-full bg-blue-50/50 dark:bg-blue-900/20 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5" />
      ) : theme === 'light' ? (
        <FaMoon className="w-5 h-5" />
      ) : (
        <FaDesktop className="w-5 h-5" />
      )}
    </motion.button>
  );
}
