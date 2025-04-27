'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaEnvelope, FaMapMarkerAlt, FaPhone, FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Section from '../ui/Section';
import { personalData, education, experience } from '@/app/data/personal';

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Learn more about my background, education, and experience"
      className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30"
    >
      {/* Quote */}
      <motion.div
        className="max-w-3xl mx-auto mb-12 text-center p-8 rounded-xl shadow-lg bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-100 dark:border-blue-900/30 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FaQuoteLeft className="text-blue-400/40 dark:text-blue-500/40 text-4xl absolute top-4 left-4" />
        <p className="text-lg italic text-gray-700 dark:text-gray-300 px-8 leading-relaxed">
          I believe in creating web applications that not only look great but also deliver exceptional user experiences. My goal is to build solutions that make a real difference for users and businesses alike.
        </p>
        <FaQuoteRight className="text-blue-400/40 dark:text-blue-500/40 text-4xl absolute bottom-4 right-4" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-blue-100 dark:border-blue-900/30 pb-2 text-blue-700 dark:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FaMapMarkerAlt size={16} />
            </span>
            Personal Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
                <FaCalendar />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Birthday</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{personalData.birthday}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{personalData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{personalData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{personalData.address}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-blue-100 dark:border-blue-900/30 pb-2 text-blue-700 dark:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FaBriefcase size={16} />
            </span>
            Experience & Education
          </h3>

          <div className="space-y-8">
            {/* Experience */}
            {experience.map((item, index) => (
              <motion.div
                key={`exp-${index}`}
                className="relative pl-8 border-l-2 border-blue-400/30 dark:border-blue-500/30 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 -translate-x-4 flex items-center justify-center shadow-md">
                  <FaBriefcase className="text-blue-600 dark:text-blue-400" size={14} />
                </div>
                <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 inline-block px-3 py-1 rounded-full">{item.date}</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-2">{item.title}</h4>
                <p className="text-blue-700 dark:text-blue-400 font-medium">{item.company}</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            {education.map((item, index) => (
              <motion.div
                key={`edu-${index}`}
                className="relative pl-8 border-l-2 border-blue-400/30 dark:border-blue-500/30 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + experience.length) }}
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 -translate-x-4 flex items-center justify-center shadow-md">
                  <FaGraduationCap className="text-blue-600 dark:text-blue-400" size={14} />
                </div>
                <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 inline-block px-3 py-1 rounded-full">{item.date}</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-2">{item.degree}</h4>
                <p className="text-blue-700 dark:text-blue-400 font-medium">{item.institution}</p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
