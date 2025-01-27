import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { allProjects } from '../pages/ViewAllPage'

// Featured projects for home page (IDs of projects to show)
const featuredProjectIds = [14, 13, 12, 11]

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
          <h3 className="text-2xl font-bold text-white">
            {project.name}
          </h3>
        </div>

        {/* Project Image */}
        <div className="absolute right-0 bottom-0 w-[90%] h-[75%] overflow-hidden rounded-tl-3xl">
          <div className="w-full h-full group-hover:scale-110 transition-transform duration-500">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover object-left-top"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
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

interface ProjectsProps {
  featured?: boolean;
}

const Projects = ({ featured = false }: ProjectsProps) => {
  const displayProjects = featured 
    ? allProjects.filter(project => featuredProjectIds.includes(project.id))
    : allProjects

  return (
    <section className="container mx-auto px-4 py-20" id="work">
      <div className="flex flex-col">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Indicator */}
        {featured && (
          <motion.div 
            className="mt-16 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-white/60">More ?</span>
            <motion.a
              href="/projects"
              className="group relative w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects 