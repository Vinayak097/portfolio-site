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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-muted/30"
    >
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button
          variant={filter === null ? "primary" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {allTechnologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter(tech)}
            className="rounded-full"
          >
            {tech}
          </Button>
        ))}
      </div>
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
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              layout
            >
              <Card className="h-full flex flex-col overflow-hidden group">
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
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <FaStar className="text-yellow-300" />
                        Featured
                      </div>
                    )}
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={filter === tech ? "default" : "outline"}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setFilter(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between gap-2 border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                  <div className="text-sm text-muted-foreground">
                    {project.featured ? 'Featured Project' : 'Personal Project'}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
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
