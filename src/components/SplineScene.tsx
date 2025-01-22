/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        className: string;
        'loading-anim': boolean;
        'loading-style': string;
      }
    }
  }
}

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Wrapper component to avoid TypeScript errors
const SplineViewer = (props: any) => {
  const Element = 'spline-viewer' as any
  return <Element {...props} />
}

const SplineScene = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js'
    document.head.appendChild(script)

    // Clean up
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] bg-black" ref={containerRef}>
      {/* Background Title */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-0 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-center leading-tight tracking-wider font-audiowide">
          <span className="bg-gradient-to-r from-[#b0f3f1] via-[#ffcfdf] to-[#ffcfdf] text-transparent bg-clip-text drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
            NEXT REALITY
          </span>
        </h1>
      </motion.div>

      {/* 3D Model Layer */}
      <div className="absolute inset-0 z-10">
        <SplineViewer 
          url="https://prod.spline.design/lvugNxTOq7n76lKi/scene.splinecode"
          className="w-full h-full"
          loading-anim={true}
          loading-style="dark"
        />
      </div>
    </div>
  )
}

export default SplineScene 