import React from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skill Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full">
              {skillsData.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 w-full"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-center">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex justify-center items-center gap-3"
                        >
                          <Icon className="text-2xl" style={{ color: skill.color }} />
                          <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Also Familiar With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Android studio', 'Figma', 'Photoshop', 'Express.js'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
