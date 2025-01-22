import { useEffect, useRef, ReactNode } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

interface LocomotiveScrollProviderProps {
  children: ReactNode;
}

const LocomotiveScrollProvider = ({ children }: LocomotiveScrollProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smoothMobile: true,
      multiplier: 0.8, // Adjust scroll speed
      lerp: 0.1, // Linear interpolation (0 = instant, 1 = smooth)
      class: 'is-revealed',
      initPosition: { x: 0, y: 0 }
    })

    // Cleanup
    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      data-scroll-container
      className="min-h-screen bg-black"
    >
      {children}
    </div>
  )
}

export default LocomotiveScrollProvider 