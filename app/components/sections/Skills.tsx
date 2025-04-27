'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
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
    const highlightedSkills = ['Angular', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Google Gemini'];
    return highlightedSkills.includes(skillName);
  };

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
     
      className="bg-white dark:bg-gray-800 py-16"
    >
      {/* Decorative line */}
    

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          className={`px-4 py-2 transition-all rounded-md shadow-md ${
            activeCategory === null
              ? 'bg-blue-600 text-white dark:bg-blue-500 shadow-blue-500/20'
              : 'bg-transparent text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30'
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All Skills
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 transition-all flex items-center gap-2 rounded-md shadow-md ${
              activeCategory === category.name
                ? 'bg-blue-600 text-white dark:bg-blue-500 shadow-blue-500/20'
                : 'bg-transparent text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30'
            }`}
            onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
          >
            <span className="w-4 h-4">{getCategoryIcon(category.icon)}</span>
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories
          .filter(category => activeCategory === null || category.name === activeCategory)
          .map((category) => (
          <div
            key={category.name}
            className="bg-white dark:bg-gray-800   dark:border-blue-900/30 p-6 rounded-lg shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6  dark:border-blue-900/30 pb-3">
              <div className="w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">{category.name}</h3>
              <div className="ml-auto text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                {category.skills.length} skills
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center p-3 rounded-lg ${
                    isSkillHighlighted(skill.name)
                      ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 shadow-md shadow-blue-500/10'
                      : 'bg-white dark:bg-gray-800 border border-blue-50 dark:border-blue-900/10 hover:border-blue-200 dark:hover:border-blue-800'
                  } transition-all duration-300 relative hover:shadow-md hover:-translate-y-1`}
                >
                  {isSkillHighlighted(skill.name) && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  )}
                  <div className="w-12 h-12 mb-2 relative bg-white dark:bg-gray-900 p-2 rounded-full">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-center text-blue-700 dark:text-blue-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
