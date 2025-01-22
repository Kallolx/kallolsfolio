import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCopy, FiGithub, FiLinkedin, FiInstagram, FiDribbble,FiMail } from 'react-icons/fi'
import { FaBehance, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/Kallol7", label: "GitHub" },
  { icon: FiDribbble, href: "https://dribbble.com", label: "Dribbble" },
  { icon: FaBehance, href: "https://behance.net", label: "Behance" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
]

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kallol.business.ds@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Card - Contact Info */}
          <motion.div 
            className="relative h-[300px] rounded-2xl overflow-hidden bg-[#0c1c3d]/40 backdrop-blur-sm border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c1c3d]/50 to-transparent"></div>
            <div className="p-8 h-full flex flex-col justify-between relative">
              <div>
                <motion.h2 
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Let's Connect
                </motion.h2>
                <motion.p 
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Have a project in mind? Let's discuss!
                </motion.p>
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div 
                    onClick={handleCopyEmail}
                    className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm border border-white/5"
                  >
                    <div className="flex items-center space-x-3">
                      <FiMail className="w-5 h-5 text-[#b0f3f1]" />
                      <span className="text-white/90">kallol.business.ds@gmail.com</span>
                    </div>
                    <FiCopy className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
                  </div>
                  {copied && (
                    <motion.div 
                      className="absolute -top-10 right-0 bg-[#b0f3f1] text-[#0c1c3d] text-sm px-4 py-2 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Copied!
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <motion.a
                href="https://wa.me/8801831624571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all backdrop-blur-sm border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-[#b0f3f1]" />
                  <span className="text-white/90">WhatsApp</span>
                </div>
                <div className="text-[#b0f3f1]/80 text-sm">Online</div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card - Social Links */}
          <motion.div 
            className="relative h-[300px] rounded-2xl overflow-hidden bg-[#0c1c3d]/40 backdrop-blur-sm border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-[#0c1c3d]/50 to-transparent"></div>
            <div className="h-full flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-6 p-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all group-hover:scale-110 duration-300">
                      <link.icon className="w-6 h-6 text-[#b0f3f1]" />
                    </div>
                    <span className="mt-2 text-sm text-white/50 group-hover:text-white/90 transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 