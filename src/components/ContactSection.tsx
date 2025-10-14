'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Alfonsomallozzi@hotmail.com',
      href: 'mailto:Alfonsomallozzi@hotmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+52 834 251 8160',
      href: 'tel:+528342518160'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AlfonsoMallozzi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ajmm05/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/alfonsomalloz/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:Alfonsomallozzi@hotmail.com', label: 'Email' }
  ]

  // Generate random star positions
  const generateStars = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000
    }));
  }

  const smallStars = generateStars(700);
  const mediumStars = generateStars(200);
  const bigStars = generateStars(100);

  return (
    <section id="contact" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Stars Background */}
      <motion.div 
        className="stars-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </motion.div>

      <style>{`
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(100% - 100px);
          overflow: hidden;
          pointer-events: none;
        }

        #stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${smallStars.map(s => `${s.x}px ${s.y}px #1DB954`).join(', ')};
          animation: animStar 50s linear infinite;
        }

        #stars::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${smallStars.map(s => `${s.x}px ${s.y}px #1DB954`).join(', ')};
        }

        #stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${mediumStars.map(s => `${s.x}px ${s.y}px #1ed760`).join(', ')};
          animation: animStar 100s linear infinite;
        }

        #stars2::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${mediumStars.map(s => `${s.x}px ${s.y}px #1ed760`).join(', ')};
        }

        #stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${bigStars.map(s => `${s.x}px ${s.y}px #22c55e`).join(', ')};
          animation: animStar 150s linear infinite;
        }

        #stars3::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${bigStars.map(s => `${s.x}px ${s.y}px #22c55e`).join(', ')};
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
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
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1DB954] to-[#1ed760] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Interested in cybersecurity projects, software development opportunities, or hackathon collaborations? 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-[#171717]/80 border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#1DB954]"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#1DB954]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#1DB954]"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#1DB954]"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#1DB954] resize-none"
                  />
                </div>
                
                <Button className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for cybersecurity projects, software development work, and hackathon participation. 
                Whether you have a security challenge or want to collaborate on something interesting, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-[#171717]/80 rounded-lg border border-white/10 hover:border-[#1DB954]/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-[#1DB954]/20 rounded-lg flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954]/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#1DB954] hover:text-black transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center bg-[#121212] relative z-10 space-y-3"
        >
          <p className="text-gray-400">
            © 2025 Alfonso J. Morales. Designed & Built with passion for Cybersecurity.
          </p>
          <p className="text-gray-500 text-sm">
            Don't be scared of the Delta,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-400">
              embrace it
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
