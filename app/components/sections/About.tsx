'use client';

import React from 'react';
import Image from 'next/image';
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
      className="bg-muted/30"
    >
      {/* Quote */}
      <motion.div
        className="max-w-3xl mx-auto mb-12 text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 left-4" />
        <p className="text-lg italic text-muted-foreground px-8">
          I believe in creating web applications that not only look great but also deliver exceptional user experiences. My goal is to build solutions that make a real difference for users and businesses alike.
        </p>
        <FaQuoteRight className="text-primary/20 text-4xl absolute bottom-4 right-4" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FaMapMarkerAlt size={16} />
            </span>
            Personal Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaCalendar />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Birthday</p>
                <p className="font-medium">{personalData.birthday}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{personalData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{personalData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{personalData.address}</p>
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
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FaBriefcase size={16} />
            </span>
            Experience & Education
          </h3>

          <div className="space-y-8">
            {/* Experience */}
            {experience.map((item, index) => (
              <motion.div
                key={`exp-${index}`}
                className="relative pl-8 border-l border-primary/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 -translate-x-3 flex items-center justify-center">
                  <FaBriefcase className="text-primary" size={12} />
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{item.date}</div>
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="text-muted-foreground">{item.company}</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-muted-foreground">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            {education.map((item, index) => (
              <motion.div
                key={`edu-${index}`}
                className="relative pl-8 border-l border-primary/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + experience.length) }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 -translate-x-3 flex items-center justify-center">
                  <FaGraduationCap className="text-primary" size={12} />
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{item.date}</div>
                <h4 className="text-lg font-medium">{item.degree}</h4>
                <p className="text-muted-foreground">{item.institution}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
