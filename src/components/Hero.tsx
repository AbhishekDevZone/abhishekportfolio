import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [copied, setCopied] = useState(false); // ✅ Added state for copy message
  const fullText = 'Frontend Web Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/kXbwcB8M/picofme-1.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abhishek</span>
          </h1>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-2 h-12">
            <span className="font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            UI/UX Enthusiast | HTML,CSS & JavaScript
          </p>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Turning ideas into interactive user-friendly websites
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a href="https://drive.google.com/uc?export=download&id=1DhkpWkzz2ZK1ff3r9gducSsFINzYoYGg">
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/AbhishekDevZone"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekdev5/"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>

            {/* ✅ Updated Mail Icon with Clipboard Copy + Message */}
            <div className="relative inline-block w-12 h-12 overflow-visible">
  <a
    href="mailto:abhiram.dev@gmail.com"
    onClick={(e) => {
      navigator.clipboard.writeText('abhiram.dev@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }}
    className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
  >
    <Mail size={24} />
  </a>
  {copied && (
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
      Email Copied!
    </span>
  )}
</div>

          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
