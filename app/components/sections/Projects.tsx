'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import Section from '../ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projects } from '@/app/data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Show featured projects first, then the rest
  const sortedProjects = [...projects]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .filter(project => {
      if (!filter) return true;
      return project.technologies.includes(filter);
    });

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Explore my portfolio of web applications and development projects"
      className="bg-gradient-to-b from-muted/10 to-muted/30 backdrop-blur-sm"
    >
      {/* Filter buttons */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          variant={filter === null ? "primary" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300"
        >
          All Projects
        </Button>
        {allTechnologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <Button
              variant={filter === tech ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilter(tech)}
              className="rounded-full backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300"
            >
              {tech}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              layout
            >
              <Card className="h-full flex flex-col overflow-hidden group backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardImage
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={225}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                        <FaStar className="text-yellow-300" />
                        Featured
                      </div>
                    )}
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    {project.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={filter === tech ? "default" : "outline"}
                        className="cursor-pointer transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:scale-105"

                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-700 dark:text-gray-300">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between gap-2 border-t border-white/10 dark:border-gray-700/30 pt-4 mt-2">
                  <div className="text-sm text-muted-foreground">
                    {project.featured ? 'Featured Project' : 'Personal Project'}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:bg-primary/80 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={`View ${project.name} source code on GitHub`}
                      whileHover={{ y: -3 }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    {project.websiteUrl && (
                      <motion.a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:bg-primary/80 hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label={`Visit ${project.name} website`}
                        whileHover={{ y: -3 }}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </Section>
  );
}
