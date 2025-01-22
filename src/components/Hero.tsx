import { FiGithub, FiLinkedin, FiDribbble, FiDownload, FiEye, FiInstagram } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import TechSlider from './TechSlider'
import WavingHand from './WavingHand'

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-28 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
        {/* Left Card - Content */}
        <div className="lg:w-[60%] relative group order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10 relative h-full hover:border-white/20 transition-colors duration-500">
            {/* Greeting Section */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <WavingHand />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Hello, I'm Kallol
                </h1>
              </div>
              <h2 className="text-xl sm:text-2xl text-white/80 font-medium">
                A Website Developer with 4+ years of experience
              </h2>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                Passionate Full Stack Developer specializing in React and Node.js ecosystem. 
                With 4+ years of experience, I've built scalable applications from e-commerce 
                to enterprise solutions, always prioritizing clean code and exceptional user experience.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-10">
              <TechSlider />
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10">
              <a 
                href="/assets/resume.pdf" 
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
                download="Kamrul_Hasan_Resume.pdf"
                rel="noopener noreferrer"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
              <a 
                href="projects" 
                className="bg-white/[0.08] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-white/[0.12] transition-colors border border-white/10 hover:border-white/20 inline-flex items-center justify-center gap-2"
              >
                <FiEye className="w-4 h-4" />
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
              <a href="https://github.com/Kallolx" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#2ea44f] transition-colors">
                <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://dribbble.com/Kal-lol" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ea4c89] transition-colors">
                <FiDribbble className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#1769ff] transition-colors">
                <FaBehance className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kamrul-hasan-dev" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#0a66c2] transition-colors">
                <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#e4405f] transition-colors">
                <FiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Card - Image */}
        <div className="lg:w-[40%] relative group h-full order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <div className="bg-[#1a1a1a] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden relative hover:border-white/20 transition-colors duration-500 h-full">
            {/* Image with hover effects */}
            <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
              <img 
                src="/icons/profile-bg.png" 
                alt="Kallol" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                onError={(e) => {
                  console.error('Profile image failed to load');
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 