import React from 'react';
import { Code2, Music, Bike, Dumbbell, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Developer with a creative eye and a love for sleek, user-friendly designs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Basic Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl p-1">
  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
    <img
      src="https://i.postimg.cc/4dXr065v/1000139487.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <Coffee className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick Facts</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Name:</strong> Abhishek kailash Bhakta </p>
                  <p><strong>Education:</strong> B.Sc Computer Science</p>
                  <p><strong>Location:</strong> Mumbai, Maharashtra</p>
                  <p><strong>Status:</strong> Available for opportunities</p>
                </div>
              </div>
            </div>

            {/* Right Column - Description & Skills */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                   I'm a frontend web developer with a solid foundation in HTML, CSS, JavaScript, and React.
                   My interest in web development grew during my Computer Science studies, and since then, 
                   I’ve been passionate about building responsive and user-friendly websites. Outside of coding, I enjoy exploring design trends, learning new tools, and contributing to open-source projects. 
                   </p>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Things I Love
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, title: 'Coding', desc: 'Transforming ideas into designs' },
                    {
        icon: Music,
        title: 'Music',
        desc: 'Tunes fuel my creativity while coding',
      },
      {
        icon: Bike,
        title: 'Travel',
        desc: 'Exploring places on two wheels keeps me inspired',
      },
      {
        icon: Dumbbell,
        title: 'Sports',
        desc: 'Staying active helps me stay sharp in work too',
      }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <item.icon className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;