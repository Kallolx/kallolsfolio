import { useState, useEffect } from 'react'

const skills = [
  { text: "Full Stack Developer", color: "text-emerald-400" },
  { text: "UI/UX Designer", color: "text-purple-400" },
  { text: "React Developer", color: "text-blue-400" },
  { text: "MERN Stack Expert", color: "text-green-400" }
]

const AnimatedLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
        Kamrul Hasan
      </h1>
      <span className={`text-sm font-medium ${skills[currentIndex].color} transition-colors duration-500`}>
        {skills[currentIndex].text}
      </span>
    </div>
  )
}

export default AnimatedLogo 