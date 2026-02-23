'use client';

import { motion } from 'framer-motion';
import Starfield from '@/components/Starfield';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Starfield />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-purple-400"
            >
              AE
            </motion.h1>
            <div className="flex gap-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">Alberto</span>{' '}
              <span className="text-purple-500">Escobar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Software Engineer
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Building innovative solutions with modern web technologies.
              BS in Software Engineering graduate from UT Dallas.
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <a
                href="mailto:aesco0817@gmail.com"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/2025 Resume Regular.pdf"
                download
                className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
            <div className="flex gap-6 justify-center text-gray-400">
              <a
                href="https://github.com/aesco1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:aesco0817@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto w-full">
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">Experience</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Fellows Consulting Group
                    </h3>
                    <p className="text-purple-400 font-medium">Capstone Project Developer</p>
                  </div>
                  <span className="text-gray-500 text-sm">January 2025 - May 2025</span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-purple-500 mt-1">▹</span>
                    <span>
                      Developed full-stack ontology generation application using Ollama DeepSeek R1,
                      Python REST API, and WordPress to automate requirements engineering for domain modeling.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-500 mt-1">▹</span>
                    <span>
                      Built interactive Mermaid visualization with AJAX integration and JSON caching,
                      reducing response time by 97% (from 30-45s to &lt;1s).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-500 mt-1">▹</span>
                    <span>
                      Implemented graph connectivity validation algorithm ensuring 100% entity
                      relationship consistency across generated ontologies.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">Featured</span>{' '}
              <span className="text-purple-500">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Admin Panel Dashboard */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Admin Panel Dashboard</h3>
                  <p className="text-gray-400 mb-4">
                    Responsive admin dashboard UI featuring project cards, announcements section,
                    and trending sidebar with modern layout.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">June 2025</p>
                </div>
              </div>

              {/* Library Management */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Library Management System</h3>
                  <p className="text-gray-400 mb-4">
                    Full-stack CRUD application managing 500+ book records with real-time search
                    and filter functionality using normalized relational database.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['PHP', 'MySQL', 'HTML/CSS', 'Apache'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">October 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get In</span>{' '}
              <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:aesco0817@gmail.com"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-lg"
              >
                aesco0817@gmail.com
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="tel:915-330-2212"
                className="px-8 py-4 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition-colors text-lg"
              >
                915-330-2212
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© 2025 Alberto Escobar. Built with Next.js & Three.js</p>
        </div>
      </footer>
    </main>
  );
}
