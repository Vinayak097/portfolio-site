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
      className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
