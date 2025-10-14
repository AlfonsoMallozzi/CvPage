import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="dark min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <main>
              <HeroSection />
              <SkillsSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}