import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentProject, setCurrentProject] = useState<number>(0);

  const categories = ['All', 'Web App', 'E-commerce', 'Landing Page', 'Mobile App'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const ProjectCard: React.FC<{ project: Project; isMain?: boolean }> = ({ project, isMain = false }) => (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${isMain ? 'transform hover:scale-105' : ''}`}>
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.liveUrl}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Here's a showcase of my recent work, demonstrating various skills and technologies
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentProject(0);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length > 0 && (
            <>
              {/* Main Project Showcase */}
              <div className="mb-12">
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Featured Project
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevProject}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextProject}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={filteredProjects[currentProject].image} 
                        alt={filteredProjects[currentProject].title}
                        className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full">
                          {filteredProjects[currentProject].category}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
                          {filteredProjects[currentProject].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {filteredProjects[currentProject].longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Challenges:</h4>
                        <ul className="space-y-2">
                          {filteredProjects[currentProject].challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {filteredProjects[currentProject].technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={filteredProjects[currentProject].liveUrl}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                          View Live
                        </a>
                        <a 
                          href={filteredProjects[currentProject].githubUrl}
                          className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Projects Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  All Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;