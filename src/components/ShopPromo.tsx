import { motion } from 'framer-motion'
import { FiPackage, FiArrowRight, FiLayout, FiBriefcase, FiMonitor, FiCode } from 'react-icons/fi'

const ShopPromo = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Top Gradient Blend */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-[110%] h-[110%] object-cover object-center scale-110 blur-sm"
          style={{ transform: 'translate(-5%, -5%)' }}
        >
          <source src="/icons/vid2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95 backdrop-blur-[2px]"></div>
      </div>

      {/* Bottom Gradient Blend */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Content */}
          <div className="text-center space-y-6 md:space-y-8">
            {/* Title Section */}
            <div>
              <motion.div 
                className="w-10 h-10 mx-auto mb-4 md:mb-6 bg-white/5 rounded-xl flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <FiPackage className="w-5 h-5 text-white" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                Ready-to-Deploy Solutions
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
                Launch your next project in minutes, not months
              </p>
            </div>

            {/* Template Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
              <motion.div 
                className="group relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-4 md:p-6 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FiLayout className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Landing Pages</h3>
                  <p className="text-white/60 text-sm">Convert visitors into customers with modern, high-converting designs</p>
                </div>
              </motion.div>

              <motion.div 
                className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 md:p-6 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FiBriefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Business Solutions</h3>
                  <p className="text-white/60 text-sm">Scale your operations with powerful management tools</p>
                </div>
              </motion.div>

              <motion.div 
                className="group relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl p-4 md:p-6 hover:from-emerald-500/20 hover:to-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FiMonitor className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Web Applications</h3>
                  <p className="text-white/60 text-sm">Build powerful web apps with full-featured solutions</p>
                </div>
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md">
                  <FiCode className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md">
                  <FiLayout className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md">
                  <FiCode className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Clean Code</span>
              </div>
            </div>

            {/* Action Button */}
            <motion.a
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-medium group hover:opacity-90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Templates</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShopPromo 