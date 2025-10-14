'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const facts = [
    "I love tetris, I can do 40 lines in 39 seconds, of tetris, of course, try beating me :)",
    "I couldn't speak until I was 4 years old, though I learned to read way too soon.",
    "I love cats, a cat always makes my day happier",
    "I reached grandmaster in league of legends, I'm not proud of that.",
    "My favorite game is Minecraft, since 2011",
    "I like italian cuisine, specially pastas."
  ]

  const [currentFact] = useState(() => facts[Math.floor(Math.random() * facts.length)])
  const [isPacManLoader] = useState(() => Math.random() < 0.1) // 1/10 chance

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 3500) // 3.5 second loading screen

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-8"
      >
        {/* Loader Animation */}
        <div className={isPacManLoader ? "loader-pacman" : "loader"}></div>

        {/* Random Fact */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 text-center max-w-md px-6"
        >
          {currentFact}
        </motion.p>
      </motion.div>

      <style>{`
        .loader {
          width: 45px;
          height: 30px;
          animation: l1 2s infinite linear;
        }
        @keyframes l1 {
          0%,
          25% {
            background: linear-gradient(#1DB954 0 0) 50% 0/66% 100% no-repeat;
          }
          25.1%,
          50% {
            background: 
              linear-gradient(#1ed760 0 0) 0 0/100% 50% no-repeat,
              linear-gradient(#1ed760 0 0) 0 0/33% 100% no-repeat;
          }
          50.1%,
          75% {
            background: 
              linear-gradient(#1DB954 0 0) 100% 0/66% 50% no-repeat,
              linear-gradient(#1DB954 0 0) 0 100%/66% 50% no-repeat;
          }
          75.1%,
          100% {
            background: 
              linear-gradient(#16a34a 0 0) 0 100%/100% 50% no-repeat,
              linear-gradient(#16a34a 0 0) 50% 0/33% 50% no-repeat;
          }
        }

        /* Pac-Man Loader */
        .loader-pacman {
          width: 90px;
          height: 24px;
          padding: 2px 0;
          box-sizing: border-box;
          display: flex;
          animation: l5-0 3s infinite steps(6);
          background:
            linear-gradient(#000 0 0) 0 0/0% 100% no-repeat,
            radial-gradient(circle 3px,#eeee89 90%,#0000) 0 0/20% 100%
            #000;
          overflow: hidden;
        }
        .loader-pacman::before {
          content: "";
          width: 20px;
          transform: translate(-100%);
          border-radius: 50%;
          background: #ffff2d;
          animation: 
            l5-1 .25s .153s infinite steps(5) alternate,
            l5-2  3s        infinite linear;
        }
        @keyframes l5-1{ 
            0% {clip-path: polygon(50% 50%,100%   0,100% 0,0 0,0 100%,100% 100%,100% 100%)}
          100% {clip-path: polygon(50% 50%,100% 65%,100% 0,0 0,0 100%,100% 100%,100%  35%)}
        }
        @keyframes l5-2{ 
          100% {transform: translate(90px)}
        }
        @keyframes l5-0{ 
          100% {background-size:120% 100%,20% 100%}
        }
      `}</style>
    </motion.div>
  )
}
