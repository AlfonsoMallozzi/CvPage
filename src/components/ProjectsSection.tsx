'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

export function ProjectsSection() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const projects = [
    {
      title: 'Fintech Business analysis AI Tool (Y&M)',
      description: 'Builded a web application that utilizes OpenAI to analyze and generate insights from financial data for business decision-making and investment strategies.',
      image: 'https://files.catbox.moe/r1dopa.png',
      technologies: ['React', 'MongoDB','OPENAI'],
      github: 'https://github.com/AlfonsoMallozzi/Finsight',
      featured: true
    },
    {
      title: 'SIEM Wazuh Local Lab',
      description: 'Deployed a local Wazuh SIEM lab using Docker to monitor and analyze security events from multiple endpoints, enhancing threat detection and response capabilities.',
      image: 'https://files.catbox.moe/rby4t4.png',
      technologies: ['Wazuh'],
      featured: true
    },
    {
      title: 'Decentralized Crowdfunding Webpage',
      description: 'Leveraged MetaMask API to enable Ethereum transactions in a decentralized crowdfunding platform.',
      image: 'https://files.catbox.moe/ls139r.jpeg',
      technologies: ['React', 'Web3.js', 'MetaMask', 'Ethereum'],
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark theme, and optimized performance built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind', 'Motion'],
      live: '#',
      featured: false,
      isEasterEgg: true
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.isEasterEgg) {
      setShowEasterEgg(true)
    }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1DB954] to-[#1ed760] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in cybersecurity and software development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-[#111] border-white/10 overflow-hidden hover:border-[#1DB954]/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  {project.github && (
                    <div className="absolute top-4 right-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#1DB954] transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-[#1DB954] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-sm border border-[#1DB954]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  {project.isEasterEgg && project.live && (
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#1DB954] transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-[#1DB954] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Easter Egg Dialog */}
      <Dialog open={showEasterEgg} onOpenChange={setShowEasterEgg}>
        <DialogContent className="bg-gray-900 border-[#1DB954]">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl">You are already here lmao 😂</DialogTitle>
            <DialogDescription className="text-gray-400 text-lg mt-4">
              This is the portfolio website you're currently viewing! Nice try though.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowEasterEgg(false)}
            className="mt-4 bg-[#1DB954] hover:bg-[#1ed760] text-black"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
