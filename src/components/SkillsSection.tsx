'use client'

import { motion } from 'motion/react'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Assembly', level: 5, label: 'Main Language', color: 'from-lime-400 to-lime-600' },
        { name: 'C', level: 4, label: 'Proficient', color: 'from-teal-400 to-teal-600' },
        { name: 'C#', level: 3, label: 'Proficient', color: 'from-emerald-400 to-emerald-600' },
        { name: 'C++', level: 2, label: 'Intermediate', color: 'from-green-400 to-green-600' }
      ]
    },
    {
      title: 'Cybersecurity',
      skills: [
        { name: 'Binary Ninja', level: 5, label: 'Main Tool', color: 'from-green-500 to-green-700' },
        { name: 'Any.run', level: 5, label: 'Main Tool', color: 'from-emerald-500 to-emerald-700' },
        { name: 'x64dbg', level: 3, label: 'Proficient', color: 'from-teal-500 to-teal-700' },
        { name: 'Wireshark', level: 2, label: 'Familiar', color: 'from-lime-500 to-lime-700' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Skills
            </span>
            {' '}&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1DB954] to-[#1ed760] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 bg-[#111] p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl text-white mb-8 text-center">{category.title}</h3>
              
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-[#1DB954] text-sm">{skill.label}</span>
                  </div>
                  
                  {/* Segmented Bar */}
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, segmentIndex) => (
                      <motion.div
                        key={segmentIndex}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (index * 0.1) + (segmentIndex * 0.05),
                          duration: 0.4 
                        }}
                        viewport={{ once: true }}
                        className={`h-3 flex-1 rounded-sm ${
                          segmentIndex < skill.level
                            ? `bg-gradient-to-r ${skill.color}`
                            : 'bg-gray-700'
                        }`}
                        style={{ transformOrigin: 'left' }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'C#', 'C++', 'C', 'Assembly', 'Binary Ninja', 'Any.run', 
              'x64dbg', 'Wireshark', 'Git', 'Malware Analysis', 'Reverse Engineering',
              'React.js', 'Tailwind', 'Python', 'Rust', 'n8n', 'MySQL', 'Supabase'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-[#1DB954]/20 text-[#1DB954] rounded-lg border border-[#1DB954]/30 text-sm hover:bg-[#1DB954]/30 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
