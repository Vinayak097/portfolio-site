'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaStar } from 'react-icons/fa';
import Section from '../ui/Section';
import { skillCategories } from '@/app/data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Map icon strings to actual React components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <FaCode className="w-6 h-6" />;
      case 'cloud':
        return <FaServer className="w-6 h-6" />;
      case 'database':
        return <FaDatabase className="w-6 h-6" />;
      case 'tools':
        return <FaTools className="w-6 h-6" />;
      default:
        return <FaCode className="w-6 h-6" />;
    }
  };

  // Function to determine if a skill should be highlighted
  const isSkillHighlighted = (skillName: string): boolean => {
    const highlightedSkills = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js'];
    return highlightedSkills.includes(skillName);
  };

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="My technical expertise across the development stack"
      className="bg-gradient-to-b from-muted/5 to-muted/20 backdrop-blur-sm"
    >
      {/* Category tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className={`px-4 py-2 rounded-full transition-all backdrop-blur-md border ${
            activeCategory === null
              ? 'bg-primary/80 text-white border-primary/30'
              : 'bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-gray-700/40'
          }`}
          onClick={() => setActiveCategory(null)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          All Skills
        </motion.button>
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.name}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-md border ${
              activeCategory === category.name
                ? 'bg-primary/80 text-white border-primary/30'
                : 'bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-gray-700/40'
            }`}
            onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <span className="w-4 h-4">{getCategoryIcon(category.icon)}</span>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories
          .filter(category => activeCategory === null || category.name === activeCategory)
          .map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="bg-card/50 backdrop-blur-md rounded-lg shadow-sm border border-white/20 dark:border-gray-700/30 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary border border-primary/30 shadow-md">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400">{category.name}</h3>
              <div className="ml-auto text-sm text-muted-foreground px-3 py-1 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/10 dark:border-gray-700/20">
                {category.skills.length} skills
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className={`flex flex-col items-center p-3 rounded-lg ${
                    isSkillHighlighted(skill.name)
                      ? 'bg-primary/10 backdrop-blur-md border border-primary/30'
                      : 'bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/10 dark:border-gray-700/20'
                  } transition-all duration-300 relative`}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    borderColor: isSkillHighlighted(skill.name) ? "rgba(var(--primary-rgb), 0.5)" : "rgba(255, 255, 255, 0.3)"
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    delay: 0.05 * skillIndex
                  }}
                >
                  {isSkillHighlighted(skill.name) && (
                    <motion.div
                      className="absolute -top-1 -right-1 text-yellow-500 bg-white/80 dark:bg-gray-900/80 rounded-full p-1 backdrop-blur-sm border border-yellow-300/50"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, repeatType: "loop" }}
                    >
                      <FaStar size={10} />
                    </motion.div>
                  )}
                  <motion.div
                    className="w-12 h-12 mb-2 relative bg-white/30 dark:bg-gray-800/30 rounded-full p-2 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                    whileHover={{ rotate: 10 }}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain drop-shadow-md"
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-center bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
