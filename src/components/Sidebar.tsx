import AnimatedLogo from './AnimatedLogo'
import { FiGithub, FiTwitter, FiLinkedin, FiDribbble, FiMail } from 'react-icons/fi'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAboutClick: () => void;
}

const Sidebar = ({ isOpen, onClose, onAboutClick }: SidebarProps) => {
  const handleAboutClick = () => {
    onClose();
    onAboutClick();
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[150] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[280px] transform transition-transform duration-300 ease-in-out md:hidden z-[150] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 blur-xl"></div>
          <div className="bg-black/40 backdrop-blur-md h-full border-l border-white/10 relative">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="p-5 pb-4">
                <div className="scale-75 origin-left">
                  <AnimatedLogo />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 flex flex-col gap-4">
                <button 
                  onClick={handleAboutClick}
                  className="group"
                >
                  <div className="flex items-center gap-3 bg-white/[0.08] px-4 py-3 rounded-xl hover:bg-white/[0.12] transition-all duration-300">
                    <img src="/icons/about.png" alt="About" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/80 group-hover:text-white transition-colors">About</span>
                  </div>
                </button>
                <a href="projects" className="group" onClick={onClose}>
                  <div className="flex items-center gap-3 bg-white/[0.08] px-4 py-3 rounded-xl hover:bg-white/[0.12] transition-all duration-300">
                    <img src="/icons/work.png" alt="Work" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/80 group-hover:text-white transition-colors">Work</span>
                  </div>
                </a>
                <a href="shop" className="group" onClick={onClose}>
                  <div className="flex items-center gap-3 bg-white/[0.08] px-4 py-3 rounded-xl hover:bg-white/[0.12] transition-all duration-300">
                    <img src="/icons/shop.png" alt="Shop" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/80 group-hover:text-white transition-colors">Shop</span>
                  </div>
                </a>
              </nav>

              {/* Contact Button */}
              <div className="mt-8 px-6">
                <a href="#contact" className="group" onClick={onClose}>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:opacity-90 transition-all flex items-center gap-3">
                    <FiMail className="w-5 h-5" />
                    <span>Contact</span>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-auto p-6 border-t border-white/10">
                <div className="flex gap-6 justify-center">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FiDribbble className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FiTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar 