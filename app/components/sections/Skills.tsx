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
      subtitle="I work with a variety of technologies across the full stack"
    >
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-full transition-all ${activeCategory === null ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${activeCategory === category.name ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
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
          .map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="bg-card rounded-lg shadow-sm border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <div className="ml-auto text-sm text-muted-foreground">
                {category.skills.length} skills
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className={`flex flex-col items-center p-3 rounded-lg ${isSkillHighlighted(skill.name) ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'} hover:bg-muted transition-colors relative`}
                  whileHover={{ y: -5, scale: 1.05 }}
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
                    <div className="absolute -top-1 -right-1 text-yellow-500">
                      <FaStar size={12} />
                    </div>
                  )}
                  <div className="w-12 h-12 mb-2 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
