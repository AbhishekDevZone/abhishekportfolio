import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Abhi<span className="text-blue-400">Bha</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Thanks for scrolling all the way down! 
                Let's build something cool together. 
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AbhishekDevZone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abhishekdev5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:alex.developer@email.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Frontend Development</li>
                <li>React Applications</li>
                <li>UI/UX Design</li>
                <li>Website Optimization</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

         <div className="border-t border-gray-800 mt-12 pt-8">
  <div className="flex justify-center items-center flex-wrap gap-2 text-gray-300 text-center">
    Made by <span className="text-blue-500 font-semibold">Abhishek Bhakta</span> • © {currentYear} All rights reserved.
  </div>
</div>

        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;