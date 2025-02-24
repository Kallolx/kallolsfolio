import { motion } from 'framer-motion'
import { FiX, FiSend, FiChevronDown, FiArrowUpRight } from 'react-icons/fi'
import React, { useEffect } from 'react'
import { allProjects } from '@/pages/ViewAllPage'

// Helper function to map services to categories
const serviceToCategory: Record<string, string> = {
  "Landing Pages": "Business",
  "Web-Based Software": "Business",
  "E-Commerce Solutions": "Business",
  "Custom Development": "Technology"
}

interface ProjectCardProps {
  project: typeof allProjects[0]
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      className="relative group h-[300px] rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Content Container */}
      <div className="relative h-full w-full p-6 flex flex-col">
        {/* Text Content */}
        <div className="relative z-20">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.name}
          </h3>
        </div>

        {/* Project Image */}
        <div className="absolute right-0 bottom-0 w-[90%] h-[75%] overflow-hidden rounded-tl-2xl group-hover:scale-110 group-hover:origin-top-left transition-all duration-500 ease-out">
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

        {/* Action Button */}
        <div className="absolute top-6 right-6 z-30">
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <FiArrowUpRight className="w-4 h-4 text-black" />
          </a>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </motion.div>
  )
}

interface ProjectInquiryModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: React.ElementType
    title: string
    priceOptions: {
      title: string
      price: string
      description: string
    }[]
  }
  formData: {
    name: string
    phone: string
    budget: string
    timeline: string
    description: string
  }
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string
    phone: string
    budget: string
    timeline: string
    description: string
  }>>
  isSubmitting: boolean
  submitSuccess: boolean
  onSubmit: (e: React.FormEvent) => Promise<void>
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  service,
  formData,
  setFormData,
  isSubmitting,
  onSubmit
}) => {
  const Icon = service.icon

  // Filter projects based on service category
  const relatedProjects = allProjects.filter(project => 
    project.category === serviceToCategory[service.title]
  ).slice(0, 2) // Show only 2 projects

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const SelectWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
      {children}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
        <FiChevronDown className="w-4 h-4" />
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto mt-10"
    >
      <div className="fixed inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95 backdrop-blur-[8px]" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-2xl mx-auto my-8"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/[0.08] backdrop-blur-xl">
          <div className="relative p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {/* Service Header */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                  <Icon className="w-7 h-7 text-white/80" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.priceOptions.map((option, index) => {
                  const isSelected = formData.budget === option.price;
                  return (
                    <div
                      key={index}
                      className="relative p-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.12] transition-all duration-200 cursor-pointer group"
                      onClick={() => setFormData({...formData, budget: option.price})}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      <div className="relative">
                        <h4 className="text-lg font-medium text-white">{option.title}</h4>
                        <p className="text-2xl font-bold text-white mb-2">{option.price}</p>
                        <p className="text-sm text-white/60">{option.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Form */}
              <div className="border-t border-white/10 pt-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/60">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/60">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Project Timeline</label>
                    <SelectWrapper>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors appearance-none"
                      >
                        <option value="" className="bg-slate-900">Select timeline</option>
                        <option value="Urgent (ASAP)" className="bg-slate-900">Urgent (ASAP)</option>
                        <option value="Within 1 week" className="bg-slate-900">Within 1 week</option>
                        <option value="Within 2 weeks" className="bg-slate-900">Within 2 weeks</option>
                        <option value="Within 1 month" className="bg-slate-900">Within 1 month</option>
                        <option value="Flexible" className="bg-slate-900">Flexible</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Project Details</label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors min-h-[100px] resize-y"
                      placeholder="Brief description of your project requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-white/[0.12] to-white/[0.08] hover:from-white/[0.16] hover:to-white/[0.12] border border-white/10 text-white py-3 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span className="relative z-10">Send Inquiry</span>
                        <FiSend className="w-4 h-4 relative z-10" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Projects Section at the bottom */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Similar Projects</h4>
                  <p className="text-sm text-white/60">Projects we've worked on</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {relatedProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 