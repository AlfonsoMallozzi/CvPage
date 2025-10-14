'use client'

import { motion } from 'motion/react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {

  return (
    <section id="home" className="min-h-screen bg-[#111] flex items-center justify-center relative overflow-hidden">
      {/* Animated Lines Background */}
      <div className="lines">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="line"></div>
        ))}
      </div>

      <style>{`
        .lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          margin: auto;
          width: 90vw;
          display: flex;
          justify-content: space-between;
          transform: rotate(15deg);
          transform-origin: center;
        }

        .line {
          position: relative;
          width: 1px;
          height: 100%;
          overflow: hidden;
        }

        .line::after {
          content: '';
          display: block;
          position: absolute;
          height: 15vh;
          width: 100%;
          top: -50%;
          left: 0;
          animation: drop 4s infinite;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }

        .line:nth-child(1)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF4500 75%, #FF4500 100%);
          animation-delay: 0.5s;
        }

        .line:nth-child(2)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #32CD32 75%, #32CD32 100%);
          animation-delay: 1s;
        }

        .line:nth-child(3)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #1E90FF 75%, #1E90FF 100%);
          animation-delay: 1.5s;
        }

        .line:nth-child(4)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFD700 75%, #FFD700 100%);
          animation-delay: 2s;
        }

        .line:nth-child(5)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #8A2BE2 75%, #8A2BE2 100%);
          animation-delay: 2.5s;
        }

        .line:nth-child(6)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #20B2AA 75%, #20B2AA 100%);
          animation-delay: 3s;
        }

        .line:nth-child(7)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #DC143C 75%, #DC143C 100%);
          animation-delay: 3.5s;
        }

        .line:nth-child(8)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #00FA9A 75%, #00FA9A 100%);
          animation-delay: 4s;
        }

        .line:nth-child(9)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF1493 75%, #FF1493 100%);
          animation-delay: 4.5s;
        }

        .line:nth-child(10)::after {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #00BFFF 75%, #00BFFF 100%);
          animation-delay: 5s;
        }

        @keyframes drop {
          0% {
            top: -50%;
          }
          100% {
            top: 110%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#1DB954] text-lg tracking-wider"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white mb-6"
          >
            Alfonso J. Morales
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            CS Student specializing in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Cybersecurity
            </span>
            {' '}&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Software Development
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Specialized in low-level programming with C#, C, C++, and reverse engineering with Assembly. 
            Passionate about cybersecurity, malware analysis, and building secure applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/AlfonsoMallozzi' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ajmm05/' },
                { icon: Mail, href: 'mailto:Alfonsomallozzi@hotmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}