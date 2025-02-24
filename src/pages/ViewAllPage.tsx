import { motion } from 'framer-motion'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase, 
  SiMysql,
  SiReact,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiStripe,
  SiVercel
} from 'react-icons/si'
import { useState } from 'react'

// All projects data
export const allProjects = [
  {
    id: 1,
    name: "Educational",
    category: "Education",
    image: "/projects/p1.png",
    description: "An educational platform built with TypeScript for enhanced learning experience.",
    liveLink: "https://study-spot-kappa.vercel.app",
    githubLink: "https://github.com/Kallolx/StudySpot",
    tech: ["TypeScript", "Next.js", "MongoDB"]
  },
  {
    id: 2,
    name: "Driving School",
    category: "Business",
    image: "/projects/grayjays.png",
    description: "Professional driving school platform with course management and scheduling.",
    liveLink: "https://grayjays.vercel.app/",
    githubLink: "https://github.com/Kallolx/grayjays",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    name: "Bright Youth",
    category: "Education",
    image: "/projects/youth.png",
    description: "A beautiful landing page for a youth academy.",
    liveLink: "https://bright-youth-academy.vercel.app/",
    githubLink: "https://github.com/Kallolx/brightyouth",
    tech: ["Next.js", "Tailwind", "Booking API"]
  },
  {
    id: 4,
    name: "GMC Point",
    category: "Business",
    image: "/projects/gmc.png",
    description: "A beautiful landing page for a GMC Point.",
    liveLink: "https://gmcpoint.vercel.app/",
    githubLink: "https://github.com/Kallolx/gmcpoint",
    tech: ["Next.js", "Tailwind", "Booking API"]
  },
  {
    id: 5,
    name: "Qiurin",
    category: "Business",
    image: "/projects/qiurin.png",
    description: "Modern business platform with advanced features and elegant design.",
    liveLink: "https://www.qourin.com",
    githubLink: "https://github.com/Kallolx/qiurin",
    tech: ["Next.js", "React", "Tailwind"]
  },
  {
    id: 6,
    name: "Agro e-commerce",
    category: "Business",
    image: "/projects/p7.png",
    description: "Agriculture business platform with product showcase and ordering system.",
    liveLink: "https://akashiagro.vercel.app",
    githubLink: "https://github.com/Kallolx/akashiagro",
    tech: ["Next.js", "Tailwind", "MongoDB"]
  },
  {
    id: 7,
    name: "Casino",
    category: "Entertainment",
    image: "/projects/p2.png",
    description: "Modern betting platform with real-time updates and secure transactions.",
    liveLink: "https://dhakabet.vercel.app",
    githubLink: "https://github.com/Kallolx/casino",
    tech: ["React", "Node.js", "WebSocket"]
  },
  {
    id: 8,
    name: "E-commerce",
    category: "Business",
    image: "/projects/p3.png",
    description: "Full-featured e-commerce platform with product management and secure checkout.",
    liveLink: "https://ashamart.vercel.app",
    githubLink: "https://github.com/Kallolx/asha-ecom",
    tech: ["Next.js", "MongoDB", "Stripe"]
  },
  {
    id: 9,
    name: "POS",
    category: "Business",
    image: "/projects/p4.png",
    description: "Web-based management software with POS system and inventory tracking.",
    liveLink: "https://ashaenterprice.vercel.app",
    githubLink: "https://github.com/Kallolx/business-pos",
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    id: 10,
    name: "AI Student Tools",
    category: "Education",
    image: "/projects/p5.png",
    description: "Comprehensive student management tool for BUBT students.",
    liveLink: "https://studbuddy.vercel.app",
    githubLink: "https://github.com/Kallolx/bubtStudenttool",
    tech: ["Next.js", "Firebase", "TypeScript"]
  },
  {
    id: 11,
    name: "Business Landing Page",
    category: "Business",
    image: "/projects/p6.png",
    description: "Corporate website with modern design and interactive features.",
    liveLink: "https://msbabuitrads.vercel.app",
    githubLink: "https://github.com/Kallolx/babuitrads",
    tech: ["React", "Tailwind", "Animation"]
  },

  {
    id: 12,
    name: "Webgame Platform",
    category: "Entertainment",
    image: "/projects/p8.png",
    description: "Web-based gaming platform with multiple interactive games.",
    liveLink: "https://playrelax-webgame.vercel.app",
    githubLink: "https://github.com/Kallolx/PlayRelax-webgame",
    tech: ["TypeScript", "React", "Game Dev"]
  },
  {
    id: 13,
    name: "Metro Ticket Management",
    category: "Business",
    image: "/projects/p9.png",
    description: "Comprehensive guide for Dhaka Metro with routes and schedules.",
    liveLink: "https://dhaka-metro.vercel.app",
    githubLink: "https://github.com/Kallolx/dhaka-metro",
    tech: ["React", "Maps API", "Real-time"]
  },
  {
    id: 14,
    name: "AI Tools Platform",
    category: "Technology",
    image: "/projects/aitools.png",
    description: "A comprehensive platform featuring various AI-powered tools and utilities.",
    liveLink: "https://aitools-xi.vercel.app/",
    githubLink: "https://github.com/Kallolx/aitools",
    tech: ["Next.js", "TypeScript", "AI Integration"]
  },
  {
    id: 15,
    name: "Travel Agency",
    category: "Business",
    image: "/projects/travel.png",
    description: "Complete travel agency solution with booking and management features.",
    liveLink: "https://travelagency-peach.vercel.app/",
    githubLink: "https://github.com/Kallolx/travel-agency",
    tech: ["Next.js", "Tailwind", "Booking API"]
  },
    
]

interface ProjectCardProps {
  project: typeof allProjects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      className="relative group h-[400px] rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Content Container */}
      <div className="relative h-full w-full p-8 flex flex-col">
        {/* Text Content - Always visible */}
        <div className="relative z-20">
          <h3 className="text-2xl font-bold text-white mb-4">
            {project.name}
          </h3>
        </div>

        {/* Project Image */}
        <div className="absolute right-0 bottom-0 w-[90%] h-[75%] overflow-hidden rounded-tl-3xl group-hover:scale-110 group-hover:origin-top-left transition-all duration-500 ease-out">
          <div className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover object-left-top transition-transform duration-700"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>

        {/* Action Button - Only visible on hover */}
        <div className="absolute top-8 right-8 z-30">
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <FiArrowUpRight className="w-5 h-5 text-black" />
          </a>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </motion.div>
  )
}

const ViewAllPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...new Set(allProjects.map(project => project.category))];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const techStack = {
    primary: [
      { 
        icon: SiJavascript, 
        name: "JavaScript", 
        level: 80, 
        color: "text-yellow-400 group-hover:text-yellow-300",
        gradient: "from-yellow-400/80 to-yellow-400/20"
      },
      { 
        icon: SiTypescript, 
        name: "TypeScript", 
        level: 90, 
        color: "text-blue-500 group-hover:text-blue-400",
        gradient: "from-blue-500/80 to-blue-500/20"
      },
      { 
        icon: SiNextdotjs, 
        name: "Next.js", 
        level: 90, 
        color: "text-white group-hover:text-white",
        gradient: "from-white/80 to-white/20"
      },
      { 
        icon: SiNodedotjs, 
        name: "Node.js", 
        level: 88, 
        color: "text-green-500 group-hover:text-green-400",
        gradient: "from-green-500/80 to-green-500/20"
      },
      { 
        icon: SiMongodb, 
        name: "MongoDB", 
        level: 85, 
        color: "text-green-400 group-hover:text-green-300",
        gradient: "from-green-400/80 to-green-400/20"
      }
    ],
    secondary: [
      { icon: SiReact, name: "React", color: "text-blue-400 group-hover:text-blue-300" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400 group-hover:text-cyan-300" },
      { icon: SiFirebase, name: "Firebase", color: "text-yellow-500 group-hover:text-yellow-400" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-300 group-hover:text-blue-200" },
      { icon: SiPrisma, name: "Prisma", color: "text-white group-hover:text-white" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400 group-hover:text-blue-300" },
      { icon: SiRedux, name: "Redux", color: "text-purple-500 group-hover:text-purple-400" },
      { icon: SiHtml5, name: "HTML5", color: "text-orange-500 group-hover:text-orange-400" },
      { icon: SiCss3, name: "CSS3", color: "text-blue-500 group-hover:text-blue-400" },
      { icon: SiGit, name: "Git", color: "text-orange-600 group-hover:text-orange-500" },
      { icon: SiStripe, name: "Stripe", color: "text-purple-400 group-hover:text-purple-300" },
      { icon: SiVercel, name: "Vercel", color: "text-white group-hover:text-white" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <motion.div 
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="/"
          className="group relative w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/10 hover:border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
        </motion.a>
      </motion.div>

      {/* Tech Stack Header */}
      <div className="w-full border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Primary Technologies */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {techStack.primary.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <tech.icon className={`w-8 h-8 ${tech.color} transition-colors duration-300`} />
                    <div>
                      <div className="text-sm font-medium text-white/80">{tech.name}</div>
                      <div className="h-1 w-24 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full bg-gradient-to-r ${tech.gradient}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Secondary Technologies */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {techStack.secondary.map((tech, index) => (
                <div key={index} className="group flex items-center gap-2">
                  <tech.icon className={`w-5 h-5 ${tech.color} transition-colors duration-300`} />
                  <span className="text-xs font-medium text-white/60">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 pt-20">
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === category 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-transparent border-white/10 hover:border-white/20'
              } transition-all duration-300`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-sm font-medium text-white/80">{category}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewAllPage 