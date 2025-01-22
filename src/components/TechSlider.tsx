import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiFigma, SiAdobexd, SiJavascript, SiNodedotjs, SiMysql, SiLaravel, SiExpress } from 'react-icons/si'

const row1 = [
  { icon: SiReact, text: "React", color: "text-blue-400" },
  { icon: SiTailwindcss, text: "Tailwind", color: "text-cyan-400" },
  { icon: SiTypescript, text: "TypeScript", color: "text-blue-500" },
  { icon: SiJavascript, text: "JavaScript", color: "text-yellow-400" },
  { icon: SiNextdotjs, text: "Next.js", color: "text-white" },
  { icon: SiNodedotjs, text: "Node.js", color: "text-green-500" },
]

const row2 = [
  { icon: SiFigma, text: "Figma", color: "text-purple-400" },
  { icon: SiAdobexd, text: "Adobe XD", color: "text-pink-400" },
  { icon: SiMysql, text: "MySQL", color: "text-blue-300" },
  { icon: SiLaravel, text: "Laravel", color: "text-red-500" },
  { icon: SiExpress, text: "Express.js", color: "text-gray-300" },
]

const TechSlider = () => {
  return (
    <div className="overflow-hidden">
      <h3 className="text-white/90 font-medium mb-6 text-lg">Technologies I Work With</h3>
      
      {/* First Row - Left to Right */}
      <div className="mb-4 relative">
        <div className="flex gap-4 animate-slide-left">
          {[...row1, ...row1].map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white/[0.08] px-4 py-2.5 rounded-xl min-w-max"
            >
              <tech.icon className={`w-5 h-5 ${tech.color}`} />
              <span className="text-white/80">{tech.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex gap-4 animate-slide-right">
          {[...row2, ...row2].map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white/[0.08] px-4 py-2.5 rounded-xl min-w-max"
            >
              <tech.icon className={`w-5 h-5 ${tech.color}`} />
              <span className="text-white/80">{tech.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechSlider 