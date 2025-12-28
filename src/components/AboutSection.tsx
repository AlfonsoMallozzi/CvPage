'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Security Analysis',
      description: 'Passionate about security research, specializing in reverse engineering malware using Binary Ninja to uncover vulnerabilities.'
    },
    {
      icon: Lightbulb,
      title: 'Sandbox Testing',
      description: 'Experienced in using virtual sandboxes for behavioral analysis of suspicious files, leveraging from automated tools'
    },
    {
      icon: Users,
      title: 'Hackathon Veteran',
      description: 'Actively participating in cybersecurity hackathons, collaborating with teams to solve complex security challenges.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Staying ahead of emerging threats and vulnerabilities through hands-on research and practical experimentation.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Fireflies Background */}
      <div className="fireflies-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="firefly" />
        ))}
      </div>

      <style>{`
        .fireflies-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .firefly {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.4vw;
          height: 0.4vw;
          margin: -0.2vw 0 0 9.8vw;
          animation: ease 200s alternate infinite;
          pointer-events: none;
        }

        .firefly::before,
        .firefly::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-origin: -10vw;
        }

        .firefly::before {
          background: #1DB954;
          opacity: 0.3;
          animation: drift ease alternate infinite;
        }

        .firefly::after {
          background: #1DB954;
          opacity: 0;
          box-shadow: 0 0 0vw 0vw #1ed760;
          animation: drift ease alternate infinite, flash ease infinite;
        }

        ${[...Array(15)].map((_, i) => {
          const steps = Math.floor(Math.random() * 12) + 16;
          const rotationSpeed = Math.random() * 10 + 8;
          const flashDuration = Math.random() * 6000 + 5000;
          const flashDelay = Math.random() * 8000 + 500;
          
          let keyframes = `@keyframes move${i} {`;
          for (let step = 0; step <= steps; step++) {
            const percent = (step * (100 / steps)).toFixed(2);
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            const scale = Math.random() * 0.75 + 0.25;
            keyframes += `
              ${percent}% {
                transform: translateX(${x}vw) translateY(${y}vh) scale(${scale});
              }
            `;
          }
          keyframes += '}';

          return `
            .firefly:nth-child(${i + 1}) {
              animation-name: move${i};
            }
            .firefly:nth-child(${i + 1})::before {
              animation-duration: ${rotationSpeed}s;
            }
            .firefly:nth-child(${i + 1})::after {
              animation-duration: ${rotationSpeed}s, ${flashDuration}ms;
              animation-delay: 0ms, ${flashDelay}ms;
            }
            ${keyframes}
          `;
        }).join('\n')}

        @keyframes drift {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes flash {
          0%, 30%, 100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw #1ed760;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw #1ed760;
          }
        }

        .feature-card {
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          background: radial-gradient(circle at 80px 40px, rgba(29, 185, 84, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          box-shadow: 0px 0px 50px rgba(29, 185, 84, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1DB954] to-[#1ed760] mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Transforming ideas into secure, real-world applications
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With 2 years of experience in software development and 1 year in cybersecurity, I've worked 
              on multiple hackathons where I've developed my random ideas into real-world applications. 
              My journey started with low-level programming languages like C and C++, which sparked my 
              curiosity about how software really works beneath the surface.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My passion lies in cybersecurity, particularly malware analysis. I use advanced tools like 
              Binary Ninja for reverse engineering, Cuckoo for automated malware analysis, and any.run 
              for interactive sandbox analysis. I love diving deep into Assembly code to understand how 
              malicious software operates and developing solutions to protect against emerging threats.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Reverse Engineer', 'Great Leader', 'Sprint Lover', 'Detail Oriented'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-sm border border-[#1DB954]/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card p-6 bg-[#171717] border-white/10 hover:border-[#1DB954]/50 transition-all duration-500 h-full">
                  <div className="text-[#1DB954] mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
