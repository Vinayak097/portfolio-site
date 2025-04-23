'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaLaptopCode } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import Button from '../ui/Button';
import { personalData } from '@/app/data/personal';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 mix-blend-multiply backdrop-blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
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

      {/* Code symbols floating in background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-primary/5 text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 2 === 0 ? <FaCode /> : <FaLaptopCode />}
          </motion.div>
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
            <motion.div
              className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {personalData.name}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  personalData.title,
                  2000,
                  'React & Node.js Expert',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.h3
              className="text-xl md:text-2xl font-medium text-primary mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {personalData.tagline}
            </motion.h3>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
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
              <Button href="#projects" size="lg" className="group">
                <span>View My Work</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
              <Button
                href={personalData.resumeUrl}
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <HiOutlineDocumentDownload className="text-xl" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
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
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl rounded-full"></div>
              <Image
                src={personalData.avatarUrl}
                alt={personalData.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full -z-10 animate-pulse" />

            {/* Tech stack badges */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
            >
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={30} height={30} alt="React" />
            </motion.div>

            <motion.div
              className="absolute top-10 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
            >
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={24} height={24} alt="Node.js" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 z-10"
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
