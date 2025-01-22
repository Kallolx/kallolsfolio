import { FiGithub, FiDribbble, FiInstagram, FiLinkedin, FiMail, FiX } from 'react-icons/fi'
import { SiBehance, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMui, SiRedux, 
         SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase, SiGit, SiDocker, 
         SiFigma, SiAdobexd, SiAdobephotoshop } from 'react-icons/si'
import { FaMapMarkerAlt, FaBriefcase, FaUserClock, FaGraduationCap } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

interface AboutProps {
  onClose: () => void;
}

const About = ({ onClose }: AboutProps) => {
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: "https://github.com/Kallolx", 
      label: "GitHub",
      color: "text-[#2ea44f] bg-[#2ea44f]/10 hover:bg-[#2ea44f]/20 md:bg-white/5"
    },
    { 
      icon: FiDribbble, 
      href: "https://dribbble.com/Kal-lol", 
      label: "Dribbble",
      color: "text-[#ea4c89] bg-[#ea4c89]/10 hover:bg-[#ea4c89]/20 md:bg-white/5"
    },
    { 
      icon: SiBehance, 
      href: "https://behance.net", 
      label: "Behance",
      color: "text-[#1769ff] bg-[#1769ff]/10 hover:bg-[#1769ff]/20 md:bg-white/5"
    },
    { 
      icon: FiLinkedin, 
      href: "https://www.linkedin.com/in/kamrul-hasan-dev", 
      label: "LinkedIn",
      color: "text-[#0a66c2] bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 md:bg-white/5"
    },
    { 
      icon: FiInstagram, 
      href: "https://instagram.com", 
      label: "Instagram",
      color: "text-[#e4405f] bg-[#e4405f]/10 hover:bg-[#e4405f]/20 md:bg-white/5"
    },
    { icon: FiMail, href: "mailto:kallol.business.ds@gmail.com", label: "Email" }
  ]

  const frontendSkills = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Redux", icon: SiRedux }
  ]

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "REST API", icon: SiNodedotjs }
  ]

  const toolsSkills = [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Figma", icon: SiFigma },
    { name: "Adobe XD", icon: SiAdobexd },
    { name: "Photoshop", icon: SiAdobephotoshop }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-black/95 z-[100] overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiX className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>

      {/* Banner Section */}
      <div className="relative h-[200px] md:h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/icons/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 md:-mt-20 relative z-10">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center md:text-left mb-12 md:mb-20 flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
          <motion.div 
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
            <img 
              src="/icons/profile-bg.png" 
              alt="Kallol" 
              className="w-full h-full object-cover rounded-full relative z-10 border-2 border-white/10"
            />
          </motion.div>
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-3 md:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Kamrul Hasan
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/60 mb-6 md:mb-8">
              Full Stack Developer & UI/UX Designer
            </motion.p>
            <motion.div className="flex justify-center md:justify-start gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Status Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
              <h3 className="text-sm md:text-base text-white/80 font-medium">Location</h3>
            </div>
            <p className="text-sm md:text-base text-white/60">Dhaka, Bangladesh</p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <FaBriefcase className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <h3 className="text-sm md:text-base text-white/80 font-medium">Experience</h3>
            </div>
            <p className="text-sm md:text-base text-white/60">3+ Years</p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <FaUserClock className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              <h3 className="text-sm md:text-base text-white/80 font-medium">Availability</h3>
            </div>
            <p className="text-sm md:text-base text-white/60">Open for Projects</p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <BsStarFill className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
              <h3 className="text-sm md:text-base text-white/80 font-medium">Projects</h3>
            </div>
            <p className="text-sm md:text-base text-white/60">20+ Delivered</p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-12">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                  <FaGraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                Education
              </h2>
              <motion.div 
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src="/images/university-logo.png" 
                    alt="BUBT" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white mb-2">BSc in Computer Science & Engineering</h3>
                <p className="text-sm md:text-base text-white/60 mb-2">Bangladesh University of Business and Technology</p>
                <p className="text-sm md:text-base text-white/40">2019 - 2023</p>
                <div className="mt-4 text-sm md:text-base text-white/60">
                  <p>• Major in Software Engineering</p>
                  <p>• Research on Machine Learning</p>
                </div>
              </motion.div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                  <FaBriefcase className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                Experience
              </h2>
              <motion.div 
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">Full Stack Developer</h3>
                    <p className="text-sm md:text-base text-white/60">Freelance</p>
                  </div>
                  <span className="text-sm md:text-base text-white/40">2021 - Present</span>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-base md:text-lg text-white/80 font-medium mb-2 md:mb-3">Key Achievements</h4>
                    <ul className="list-disc list-inside text-sm md:text-base text-white/60 space-y-1 md:space-y-2">
                      <li>Successfully delivered 20+ projects to satisfied clients</li>
                      <li>Maintained 100% client satisfaction rate</li>
                      <li>Specialized in React and Next.js based solutions</li>
                      <li>Implemented complex backend architectures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg text-white/80 font-medium mb-2 md:mb-3">Project Highlights</h4>
                    <ul className="list-disc list-inside text-sm md:text-base text-white/60 space-y-1 md:space-y-2">
                      <li>E-commerce platforms with payment integration</li>
                      <li>Real-time chat applications</li>
                      <li>Content management systems</li>
                      <li>Portfolio and business websites</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </div>

          {/* Right Column */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-base md:text-lg">
                🚀
              </span>
              Skills
            </h2>
            <div className="space-y-4 md:space-y-6">
              <motion.div 
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {frontendSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">Backend Development</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {backendSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {toolsSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Download CV Button */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 md:mt-20 text-center"
        >
          <motion.a 
            href="/assets/resume.pdf" 
            download="Kamrul_Hasan_Resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About 