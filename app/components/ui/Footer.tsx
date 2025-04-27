'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalData } from '@/app/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 py-16 border-t border-blue-100 dark:border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              {personalData.name.split(' ')[0]}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              {personalData.about.substring(0, 120)}...
            </p>
            <div className="flex space-x-4">
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:shadow-md"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                {personalData.email}
              </li>
              <li className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaPhone className="w-4 h-4" />
                </div>
                {personalData.phone}
              </li>
              <li className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                {personalData.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-100 dark:border-blue-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 md:mt-0 flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
