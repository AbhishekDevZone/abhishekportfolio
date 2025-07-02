import React from 'react';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services
            </h2>

            {/* Services with spacing */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              <span>Frontend Development</span>
              <span>React Applications</span>
              <span>UI/UX Design</span>
              <span>Website Optimization</span>
              <span>Responsive Design</span>
            </div>

            {/* Download Button */}
            <a
              href="https://example.com/your-resume.pdf" // ← Replace this with your actual PDF link
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
