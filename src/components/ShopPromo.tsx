import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiPackage, 
  FiArrowRight, 
  FiLayout, 
  FiDatabase,
  FiShoppingBag,
  FiShield,
  FiCode,
} from 'react-icons/fi'
import { GlareCard } from './ui/GlareCard'
import { ProjectInquiryModal } from './ui/ProjectInquiryModal'

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    link: string;
    priceOptions: {
      title: string;
      price: string;
      description: string;
    }[];
  };
  index: number;
}

const services = [
  {
    icon: FiLayout,
    title: "Landing Pages",
    description: "Convert visitors into customers with modern, high-converting landing pages designed for maximum impact.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    link: "/services/landing-pages",
    priceOptions: [
      {
        title: "Single Page",
        price: "৳5,000",
        description: "One page landing site with essential sections"
      },
      {
        title: "Standard",
        price: "৳20,000",
        description: "Up to 10 pages with custom design"
      },
      {
        title: "Premium",
        price: "৳30,000",
        description: "Up to 15+ pages with advanced features"
      }
    ]
  },
  {
    icon: FiDatabase,
    title: "Web-Based Software",
    description: "Custom web applications tailored to streamline your business processes and boost productivity.",
    features: ["Scalable Architecture", "Real-time Updates", "Cloud Hosting"],
    link: "/services/web-software",
    priceOptions: [
      {
        title: "Basic",
        price: "৳30,000",
        description: "Essential features and basic functionality"
      },
      {
        title: "Advanced",
        price: "৳50,000",
        description: "Complex features with database integration"
      },
      {
        title: "Enterprise",
        price: "৳100,000+",
        description: "Full-scale custom solution with advanced features"
      }
    ]
  },
  {
    icon: FiShoppingBag,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Secure Checkout", "Inventory Management", "Analytics"],
    link: "/services/ecommerce",
    priceOptions: [
      {
        title: "Starter Store",
        price: "৳25,000",
        description: "Basic online store with essential features"
      },
      {
        title: "Business",
        price: "৳40,000",
        description: "Advanced store with marketing tools"
      },
      {
        title: "Enterprise",
        price: "৳100,000+",
        description: "Custom marketplace solution"
      }
    ]
  },
  {
    icon: FiCode,
    title: "Custom Development",
    description: "Tailored software solutions built to address your unique business challenges and requirements.",
    features: ["Custom Architecture", "Scalable Solutions", "Modern Tech Stack"],
    link: "/services/custom",
    priceOptions: [
      {
        title: "Basic Solution",
        price: "৳10,000",
        description: "Small-scale custom development"
      },
      {
        title: "Advanced Solution",
        price: "৳20,000",
        description: "Medium-scale with complex features"
      },
      {
        title: "Enterprise Solution",
        price: "৳30,000+",
        description: "Large-scale custom platform"
      }
    ]
  }
]

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    timeline: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Send email notification (you'll need to implement this on your backend)
      const emailData = {
        service: service.title,
        ...formData
      }
      console.log('Form submitted:', emailData)
      
      setSubmitSuccess(true)
      setTimeout(() => {
        setIsModalOpen(false)
        setSubmitSuccess(false)
        setFormData({
          name: '',
          phone: '',
          budget: '',
          timeline: '',
          description: ''
        })
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <GlareCard onClick={() => setIsModalOpen(true)}>
          <div className="h-full flex flex-col p-8 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <service.icon className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" />
            </div>
            
            <div className="mt-8 flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">{service.title}</h3>
              <p className="text-white/60 text-base leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
            </div>
            
            <div className="space-y-3 mt-8">
              {service.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center text-white/50 text-sm group-hover:text-white/60 transition-colors">
                  <FiShield className="w-5 h-5 mr-3 text-white/30 group-hover:text-white/40 transition-colors" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-end mt-8 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
              <div className="inline-flex items-center gap-2 text-white/80 text-base group-hover:text-white transition-colors">
                View Pricing
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </GlareCard>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectInquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            service={service}
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </>
  )
}

const ShopPromo = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center space-y-6 mb-20">
            <div className="w-16 h-16 mx-auto mb-8 bg-white/5 rounded-2xl flex items-center justify-center">
              <FiPackage className="w-8 h-8 text-white/80" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Professional Solutions
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Transform your digital presence with our comprehensive suite of professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <motion.div
                className="inline-flex items-center gap-4 px-10 py-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-white font-medium text-lg">Get Started Today</span>
                <FiArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShopPromo 