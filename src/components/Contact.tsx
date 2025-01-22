import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiDribbble, FiMail, FiArrowRight } from 'react-icons/fi'
import { FaBehance, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { 
    icon: FiGithub, 
    href: "https://github.com/Kallox", 
    label: "GitHub",
    color: "hover:text-[#2ea44f]"
  },
  { 
    icon: FiDribbble, 
    href: "https://dribbble.com/Kal-lol", 
    label: "Dribbble",
    color: "hover:text-[#ea4c89]"
  },
  { 
    icon: FaBehance, 
    href: "https://www.behance.net/kamrulhasankallol", 
    label: "Behance",
    color: "hover:text-[#1769ff]"
  },
  { 
    icon: FiLinkedin, 
    href: "https://www.linkedin.com/in/kamrul-hasan-dev", 
    label: "LinkedIn",
    color: "hover:text-[#0a66c2]"
  },
  { 
    icon: FiInstagram, 
    href: "https://www.instagram.com/kamrul_hasan_kallol", 
    label: "Instagram",
    color: "hover:text-[#e4405f]"
  }
]

const contactOptions = [
  {
    icon: FiMail,
    label: "Email Me",
    description: "Get in touch via email",
    href: "mailto:kallol.business.ds@gmail.com",
    color: "from-purple-500 to-blue-500",
    hoverColor: "from-purple-600 to-blue-600"
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    description: "Chat on WhatsApp",
    href: "https://wa.me/8801831624571",
    color: "from-green-500 to-emerald-500",
    hoverColor: "from-green-600 to-emerald-600"
  }
]

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-[#0a0a0a]" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Options */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-white/[0.08] to-white/[0.01] rounded-xl flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <FiArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-1">{option.label}</h3>
                  <p className="text-white/60 text-sm">{option.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-medium mb-6">Or Connect on Social Media</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${link.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 