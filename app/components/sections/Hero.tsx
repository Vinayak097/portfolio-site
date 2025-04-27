'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import Button from '../ui/Button';
import { personalData } from '@/app/data/personal';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-16">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 -z-10" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 dark:bg-blue-900 mix-blend-multiply dark:mix-blend-lighten opacity-30"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {personalData.name}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  personalData.title,
                  2000,
                  'Angular & React Developer',
                  2000,
                  'Full Stack Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {personalData.about}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                href="#projects"
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 border-none shadow-lg shadow-blue-500/20"
              >
                <span>View My Work</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Button>
              <Button
                href={personalData.resumeUrl}
                variant="outline"
                size="lg"
                className="flex border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 items-center gap-2 shadow-lg shadow-blue-500/10"
              >
                <HiOutlineDocumentDownload className="text-xl" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10">
              <Image
                src={personalData.avatarUrl}
                alt={personalData.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 dark:border-blue-400 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 dark:border-blue-400 rounded-2xl -z-10" />

            {/* Tech stack badges */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-white dark:bg-blue-900 rounded-full p-2 shadow-lg border border-blue-200 dark:border-blue-700 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
            >
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={30} height={30} alt="React" />
            </motion.div>

            <motion.div
              className="absolute top-10 -right-4 bg-white dark:bg-blue-900 rounded-full p-2 shadow-lg border border-blue-200 dark:border-blue-700 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
            >
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={24} height={24} alt="Node.js" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-4 bg-white dark:bg-blue-900 rounded-full p-2 shadow-lg border border-blue-200 dark:border-blue-700 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: 'spring' }}
            >
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={24} height={24} alt="MongoDB" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
