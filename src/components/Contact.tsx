import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">abhishekbhakta18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 8097319664</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Mumbai Maharashtra</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/AbhishekDevZone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abhishekdev5/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? 'cursor-not-allowed' : 'transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      ✗ Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;