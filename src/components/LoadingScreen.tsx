import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedCircularProgressBar } from './magicui/animated-circular-progress-bar'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simple loading animation that takes 1.5 seconds
    const startTime = Date.now()
    const duration = 1500 // 1.5 seconds
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(Math.round((elapsed / duration) * 100), 100)
      setProgress(newProgress)
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress)
      } else {
        // Loading complete
        setIsComplete(true)
        setTimeout(onLoadingComplete, 500) // Small delay for animation
      }
    }
    
    requestAnimationFrame(updateProgress)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="text-center space-y-8">
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={progress}
              gaugePrimaryColor="#3b82f6"
              gaugeSecondaryColor="#1e293b"
              className="mx-auto"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Hello</h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}