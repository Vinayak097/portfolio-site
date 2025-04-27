'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
     
      className="bg-gray-50 dark:bg-gray-900 py-16"
    >
      {/* Filter buttons */}
    

      <motion.div
        className="flex flex-wrap gap-3 mb-12 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          variant={filter === null ? "primary" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className={`px-4 py-2 ${filter === null
            ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-lg shadow-blue-500/20'
            : 'bg-transparent text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'}
            hover:shadow-md transition-all duration-300 rounded-md`}
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
              className={`px-4 py-2 ${filter === tech
                ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-lg shadow-blue-500/20'
                : 'bg-transparent text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'}
                hover:shadow-md transition-all duration-300 rounded-md`}
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
              <Card className="h-full flex flex-col overflow-hidden group bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 rounded-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardImage
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={225}
                      className="transition-transform duration-700 group-hover:scale-105"
                      websiteUrl={project.websiteUrl}
                    />

                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
                        Featured
                      </div>
                    )}
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400 text-xl font-bold">
                    {project.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={filter === tech ? "default" : "outline"}
                        className="cursor-pointer transition-all duration-300 text-xs bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between gap-2 border-t border-blue-100 dark:border-blue-900/50 pt-4 mt-2">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.featured ? 'Featured Project' : 'Personal Project'}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.websiteUrl && project.websiteUrl !== "#" && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        aria-label={`Visit ${project.name} website`}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
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
