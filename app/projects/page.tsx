'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/cards/ProjectCard';
import CTABanner from '@/components/home/CTABanner';
import { projects } from '@/lib/data';
import { Project } from '@/lib/types';

const categories = ['All', 'Reefer Transport', 'Warehousing', 'Pharma', 'Perishables'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHeader title="Our Projects" />

      <section className="section-padding bg-surface-muted">
        <div className="section-container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-light-gray text-text-dark hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}

          {/* Project Count */}
          <div className="text-center text-gray-600 mt-8">
            <p>Showing {filteredProjects.length} projects</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
