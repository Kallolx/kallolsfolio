import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiPackage, FiCheck, FiGrid, FiShoppingBag, FiMonitor, FiSmartphone, FiCode, FiClock, FiHeadphones, FiChevronDown, FiInfo, FiCalendar, FiShield, FiRefreshCw, FiMessageSquare, FiX, FiSend, FiPhone } from 'react-icons/fi'
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiReact, SiTailwindcss, SiPostgresql, SiFramer } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'

// Currency conversion rates
const conversionRates = {
  USD: 1,
  BDT: 121,
  EUR: 0.92
}

type Currency = 'USD' | 'BDT' | 'EUR'
type Category = 'E-commerce' | 'Business Software' | 'Landing Page' | 'Custom Web' | 'Mobile App'

interface Package {
  name: string
  price: number
  features: string[]
  isPopular?: boolean
}

interface Product {
  id: number
  name: string
  image: string
  category: Category
  shortDescription: string
  features: string[]
  packages: Package[]
  techStack: string[]
  deliveryTime: string
  supportTime: string
  priceRange: {
    min: number
    max: number
  }
}

const categories: Category[] = ['E-commerce', 'Business Software', 'Landing Page', 'Custom Web', 'Mobile App']

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "Landing Page",
    shortDescription: "Modern, responsive landing page with animations and optimized performance.",
    features: [
      "Responsive Design",
      "Basic Animations",
      "Contact Form",
      "SEO Optimization",
      "1 Revision"
    ],
    packages: [
      {
        name: "Basic",
        price: 99,
        features: [
          "Responsive Design",
          "Basic Animations",
          "Contact Form",
          "SEO Optimization",
          "1 Revision"
        ]
      },
      {
        name: "Premium",
        price: 149,
        isPopular: true,
        features: [
          "Everything in Basic",
          "Custom Animations",
          "Newsletter Integration",
          "Performance Optimization",
          "3 Revisions"
        ]
      }
    ],
    priceRange: { min: 99, max: 149 },
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    deliveryTime: "3-5 days",
    supportTime: "1 month"
  },
  {
    id: 2,
    name: "E-commerce Store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop",
    category: "E-commerce",
    shortDescription: "Full-featured online store with product management and secure payments.",
    features: [
      "Up to 50 Products",
      "Basic Analytics",
      "Payment Integration",
      "Order Management",
      "1 Month Support"
    ],
    packages: [
      {
        name: "Starter",
        price: 199,
        features: [
          "Up to 50 Products",
          "Basic Analytics",
          "Payment Integration",
          "Order Management",
          "1 Month Support"
        ]
      },
      {
        name: "Business",
        price: 299,
        isPopular: true,
        features: [
          "Unlimited Products",
          "Advanced Analytics",
          "Multiple Payment Gateways",
          "Inventory Management",
          "2 Months Support"
        ]
      }
    ],
    priceRange: { min: 199, max: 299 },
    techStack: ["Next.js", "Node.js", "MongoDB"],
    deliveryTime: "7-10 days",
    supportTime: "2 months"
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2371&auto=format&fit=crop",
    category: "Landing Page",
    shortDescription: "Professional portfolio website to showcase your work and skills.",
    features: [
      "3-5 Pages",
      "Responsive Design",
      "Basic Animations",
      "Contact Form",
      "1 Revision"
    ],
    packages: [
      {
        name: "Basic",
        price: 99,
        features: [
          "3-5 Pages",
          "Responsive Design",
          "Basic Animations",
          "Contact Form",
          "1 Revision"
        ]
      },
      {
        name: "Premium",
        price: 149,
        isPopular: true,
        features: [
          "5-7 Pages",
          "Custom Animations",
          "Blog Integration",
          "SEO Optimization",
          "3 Revisions"
        ]
      }
    ],
    priceRange: { min: 99, max: 149 },
    techStack: ["React", "Tailwind", "Framer"],
    deliveryTime: "4-6 days",
    supportTime: "1 month"
  },
  {
    id: 4,
    name: "Business Website",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop",
    category: "Landing Page",
    shortDescription: "Professional business website with modern design and essential features.",
    features: [
      "5 Pages",
      "Responsive Design",
      "Contact Form",
      "Google Maps",
      "1 Month Support"
    ],
    packages: [
      {
        name: "Basic",
        price: 149,
        features: [
          "5 Pages",
          "Responsive Design",
          "Contact Form",
          "Google Maps",
          "1 Month Support"
        ]
      },
      {
        name: "Premium",
        price: 199,
        isPopular: true,
        features: [
          "10 Pages",
          "Custom Features",
          "Blog Section",
          "Newsletter",
          "2 Months Support"
        ]
      }
    ],
    priceRange: { min: 149, max: 199 },
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    deliveryTime: "5-7 days",
    supportTime: "1 month"
  },
  {
    id: 5,
    name: "POS Software",
    image: "https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=2370&auto=format&fit=crop",
    category: "Business Software",
    shortDescription: "Point of Sale system with inventory and sales management.",
    features: [
      "Basic POS Features",
      "Inventory Management",
      "Sales Reports",
      "1 Register",
      "1 Month Support"
    ],
    packages: [
      {
        name: "Basic",
        price: 199,
        features: [
          "Basic POS Features",
          "Inventory Management",
          "Sales Reports",
          "1 Register",
          "1 Month Support"
        ]
      },
      {
        name: "Premium",
        price: 299,
        isPopular: true,
        features: [
          "Advanced POS Features",
          "Multiple Registers",
          "Advanced Analytics",
          "Customer Management",
          "3 Months Support"
        ]
      }
    ],
    priceRange: { min: 199, max: 299 },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "10-14 days",
    supportTime: "3 months"
  },
  {
    id: 6,
    name: "Digital Products Store",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60",
    category: "E-commerce",
    shortDescription: "Platform for selling digital products",
    features: [
      "Digital Downloads",
      "License Management",
      "Subscription Options",
      "Secure Delivery",
      "Analytics",
      "API Access"
    ],
    packages: [
      {
        name: "Basic",
        price: 399,
        features: [
          "Up to 50 Products",
          "Basic License Management",
          "Standard Support",
          "Secure Download System",
          "Basic Analytics",
          "Email Delivery",
          "1 Month Support",
          "Mobile Responsive"
        ]
      },
      {
        name: "Professional",
        price: 699,
        isPopular: true,
        features: [
          "Up to 500 Products",
          "Advanced License System",
          "Priority Support",
          "Secure Download & Streaming",
          "Advanced Analytics",
          "Multiple Delivery Methods",
          "Subscription Management",
          "API Access",
          "3 Months Support",
          "Mobile App"
        ]
      },
      {
        name: "Enterprise",
        price: 1299,
        features: [
          "Unlimited Products",
          "Custom License Types",
          "24/7 Support",
          "Custom Delivery Methods",
          "Custom Analytics",
          "White Label Solution",
          "Advanced DRM",
          "Custom API Integration",
          "6 Months Support",
          "Priority Features"
        ]
      }
    ],
    priceRange: {
      min: 399,
      max: 1299
    },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "4-6 days",
    supportTime: "1-6 months"
  },
  {
    id: 7,
    name: "Business Management System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Business Software",
    shortDescription: "Complete business management solution",
    features: [
      "Inventory Management",
      "Employee Management",
      "Financial Reports",
      "Customer Database",
      "Invoice System",
      "Cloud Backup"
    ],
    packages: [],
    priceRange: {
      min: 499,
      max: 499
    },
    techStack: ["React", "Node.js", "PostgreSQL"],
    deliveryTime: "5-7 days",
    supportTime: "3 months"
  },
  {
    id: 8,
    name: "HR Management System",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    category: "Business Software",
    shortDescription: "Complete HR and employee management",
    features: [
      "Employee Records",
      "Leave Management",
      "Payroll System",
      "Performance Tracking",
      "Document Management",
      "Reporting Tools"
    ],
    packages: [],
    priceRange: {
      min: 449,
      max: 449
    },
    techStack: ["React", "Node.js", "PostgreSQL"],
    deliveryTime: "4-6 days",
    supportTime: "2 months"
  },
  {
    id: 9,
    name: "Inventory Control System",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    category: "Business Software",
    shortDescription: "Advanced inventory and stock management",
    features: [
      "Stock Tracking",
      "Barcode System",
      "Order Management",
      "Supplier Portal",
      "Analytics Dashboard",
      "Mobile App"
    ],
    packages: [],
    priceRange: {
      min: 399,
      max: 399
    },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "4-6 days",
    supportTime: "2 months"
  },
  {
    id: 10,
    name: "Modern Portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60",
    category: "Landing Page",
    shortDescription: "Professional portfolio website",
    features: [
      "Project Showcase",
      "Contact Form",
      "Blog Section",
      "Analytics",
      "SEO Optimized",
      "Social Integration"
    ],
    packages: [],
    priceRange: {
      min: 199,
      max: 199
    },
    techStack: ["Next.js", "Tailwind", "Framer"],
    deliveryTime: "2-3 days",
    supportTime: "1 month"
  },
  {
    id: 11,
    name: "Product Launch Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Landing Page",
    shortDescription: "High-converting product launch page",
    features: [
      "Animation Effects",
      "Newsletter Integration",
      "Countdown Timer",
      "Social Proof",
      "A/B Testing Ready",
      "Analytics"
    ],
    packages: [],
    priceRange: {
      min: 249,
      max: 249
    },
    techStack: ["Next.js", "Tailwind", "Framer"],
    deliveryTime: "2-4 days",
    supportTime: "1 month"
  },
  {
    id: 12,
    name: "Agency Website",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
    category: "Landing Page",
    shortDescription: "Professional agency landing page",
    features: [
      "Service Showcase",
      "Team Profiles",
      "Case Studies",
      "Testimonials",
      "Contact System",
      "Blog Integration"
    ],
    packages: [],
    priceRange: {
      min: 299,
      max: 299
    },
    techStack: ["Next.js", "Tailwind", "Framer"],
    deliveryTime: "3-5 days",
    supportTime: "1 month"
  },
  {
    id: 13,
    name: "Custom CRM System",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    category: "Custom Web",
    shortDescription: "Tailored customer relationship management",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Email Integration",
      "Task Management",
      "Custom Reports",
      "API Integration"
    ],
    packages: [],
    priceRange: {
      min: 799,
      max: 799
    },
    techStack: ["React", "Node.js", "PostgreSQL"],
    deliveryTime: "10-14 days",
    supportTime: "3 months"
  },
  {
    id: 14,
    name: "Learning Management System",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
    category: "Custom Web",
    shortDescription: "Complete e-learning platform",
    features: [
      "Course Management",
      "Student Progress",
      "Video Streaming",
      "Quiz System",
      "Certificate Generation",
      "Discussion Forum"
    ],
    packages: [],
    priceRange: {
      min: 899,
      max: 899
    },
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    deliveryTime: "12-15 days",
    supportTime: "3 months"
  },
  {
    id: 15,
    name: "Real Estate Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    category: "Custom Web",
    shortDescription: "Property listing and management",
    features: [
      "Property Listings",
      "Advanced Search",
      "Virtual Tours",
      "Agent Portal",
      "Booking System",
      "Analytics"
    ],
    packages: [],
    priceRange: {
      min: 699,
      max: 699
    },
    techStack: ["Next.js", "Node.js", "MongoDB"],
    deliveryTime: "8-12 days",
    supportTime: "2 months"
  },
  {
    id: 16,
    name: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=60",
    category: "Mobile App",
    shortDescription: "Restaurant delivery application",
    features: [
      "Real-time Tracking",
      "Payment Gateway",
      "Restaurant Panel",
      "Driver App",
      "Order Management",
      "Reviews & Ratings"
    ],
    packages: [],
    priceRange: {
      min: 999,
      max: 999
    },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "15-20 days",
    supportTime: "3 months"
  },
  {
    id: 17,
    name: "Fitness Tracking App",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60",
    category: "Mobile App",
    shortDescription: "Personal fitness and workout tracker",
    features: [
      "Workout Plans",
      "Progress Tracking",
      "Nutrition Log",
      "Social Features",
      "Health Analytics",
      "Wearable Integration"
    ],
    packages: [],
    priceRange: {
      min: 799,
      max: 799
    },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "12-15 days",
    supportTime: "2 months"
  },
  {
    id: 18,
    name: "Task Management App",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&auto=format&fit=crop&q=60",
    category: "Mobile App",
    shortDescription: "Professional task and project manager",
    features: [
      "Task Organization",
      "Team Collaboration",
      "File Sharing",
      "Calendar Integration",
      "Push Notifications",
      "Offline Mode"
    ],
    packages: [],
    priceRange: {
      min: 699,
      max: 699
    },
    techStack: ["React", "Node.js", "MongoDB"],
    deliveryTime: "10-14 days",
    supportTime: "2 months"
  }
]

const getTechIcon = (tech: string) => {
  switch (tech) {
    case 'Next.js': return <SiNextdotjs className="w-4 h-4" />
    case 'Node.js': return <SiNodedotjs className="w-4 h-4" />
    case 'MongoDB': return <SiMongodb className="w-4 h-4" />
    case 'React': return <SiReact className="w-4 h-4" />
    case 'Tailwind': return <SiTailwindcss className="w-4 h-4" />
    case 'PostgreSQL': return <SiPostgresql className="w-4 h-4" />
    case 'Framer': return <SiFramer className="w-4 h-4" />
    default: return null
  }
}

// Add a function to group products by category
const groupProductsByCategory = (products: Product[]) => {
  const grouped: { [key in Category]: Product[] } = {
    'E-commerce': [],
    'Business Software': [],
    'Landing Page': [],
    'Custom Web': [],
    'Mobile App': []
  }
  
  products.forEach(product => {
    grouped[product.category].push(product)
  })
  
  return grouped
}

// Move formatPrice function before PriceTag component
const formatPrice = (price: number, currency: Currency) => {
  const converted = price * conversionRates[currency]
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(converted)
}

// Update the price range display component
const PriceTag = ({ min, max, currency }: { min: number, max: number, currency: Currency }) => {
  const isSinglePrice = min === max

  return (
    <div className="absolute top-4 right-4 z-10">
      <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 group-hover:bg-black/70 transition-colors">
        <img 
          src={`/icons/${currency.toLowerCase()}.png`} 
          alt={currency}
          className="w-4 h-4"
        />
        <div className="text-white font-medium">
          {isSinglePrice ? (
            <span>{formatPrice(min, currency)}</span>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-white/60">From</span>
              <span>{formatPrice(min, currency)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const ShopPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [message, setMessage] = useState('')


  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'E-commerce': return <FiShoppingBag />
      case 'Business Software': return <FiGrid />
      case 'Landing Page': return <FiMonitor />
      case 'Custom Web': return <FiCode />
      case 'Mobile App': return <FiSmartphone />
    }
  }


  // Remove duplicate formatPrice function

  return (
    <div className="min-h-screen bg-[#111111] relative">
      {/* Back Button */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
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

      {/* Currency Selector */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <button 
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className="group relative bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-2 px-4 py-2 transition-colors border border-white/10 hover:border-white/20"
          >
            <img 
              src={`/icons/${selectedCurrency.toLowerCase()}.png`} 
              alt={selectedCurrency}
              className="w-5 h-5"
            />
            <span className="text-white/80 group-hover:text-white transition-colors font-medium">
              {selectedCurrency}
            </span>
            <FiChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </button>

          {/* Currency Dropdown */}
          {showCurrencyDropdown && (
            <motion.div 
              className="absolute right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {(['USD', 'BDT', 'EUR'] as Currency[]).map((currency) => (
                <button
                  key={currency}
                  onClick={() => {
                    setSelectedCurrency(currency)
                    setShowCurrencyDropdown(false)
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 hover:bg-white/5 transition-colors ${
                    selectedCurrency === currency ? 'bg-white/5' : ''
                  }`}
                >
                  <img 
                    src={`/icons/${currency.toLowerCase()}.png`} 
                    alt={currency}
                    className="w-5 h-5"
                  />
                  <span className="text-white/80">{currency}</span>
                  {selectedCurrency === currency && (
                    <div className="ml-auto">
                      <FiCheck className="w-4 h-4 text-purple-500" />
                    </div>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready-to-Deploy Solutions
          </motion.h1>
          <motion.p 
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional websites and software solutions, customized to your needs and ready for launch within days
          </motion.p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-2xl flex items-center gap-3 transition-all ${
                selectedCategory === null 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGrid />
              <span className="text-sm font-medium">All</span>
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl flex items-center gap-3 transition-all ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                <span className="text-sm font-medium">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {selectedCategory ? (
            // Show products for selected category
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === selectedCategory).map((product) => (
                <motion.div
                  key={product.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Price Tag */}
                  <PriceTag min={product.priceRange.min} max={product.priceRange.max} currency={selectedCurrency} />

                  {/* Product Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        {/* Category Tag */}
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(product.category)}
                          <span className="text-xs font-medium text-white/80">{product.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 mb-4">{product.shortDescription}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.techStack.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/5 px-2 py-1 rounded-full"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/60">
                          <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-white/40">
                        <div className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          <span>Delivery: {product.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiHeadphones className="w-4 h-4" />
                          <span>Support: {product.supportTime}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button 
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                        onClick={() => {
                          setSelectedProduct(product)
                          setSelectedPackage(null)
                        }}
                      >
                        <FiPackage className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">View Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Show all products grouped by category
            Object.entries(groupProductsByCategory(products)).map(([category, categoryProducts]) => (
              <div key={category}>
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {getCategoryIcon(category as Category)}
                  <h2 className="text-2xl font-bold text-white">{category}</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Price Tag */}
                      <PriceTag min={product.priceRange.min} max={product.priceRange.max} currency={selectedCurrency} />

                      {/* Product Image */}
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            {/* Category Tag */}
                            <div className="flex items-center gap-2 mb-2">
                              {getCategoryIcon(product.category)}
                              <span className="text-xs font-medium text-white/80">{product.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{product.name}</h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-white/60 mb-4">{product.shortDescription}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.techStack.map((tech, index) => (
                            <div 
                              key={index}
                              className="flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/5 px-2 py-1 rounded-full"
                            >
                              {getTechIcon(tech)}
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>

                        {/* Features Preview */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-white/60">
                              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between text-xs text-white/40">
                            <div className="flex items-center gap-1">
                              <FiClock className="w-4 h-4" />
                              <span>Delivery: {product.deliveryTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FiHeadphones className="w-4 h-4" />
                              <span>Support: {product.supportTime}</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <button 
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                            onClick={() => {
                              setSelectedProduct(product)
                              setSelectedPackage(null)
                            }}
                          >
                            <FiPackage className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            <span className="font-medium">View Details</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-white/10 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(selectedProduct.category)}
                    <span className="text-sm font-medium text-white/80">{selectedProduct.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                </div>
                <button 
                  onClick={() => {
                    setSelectedProduct(null)
                    setSelectedPackage(null)
                  }}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Product Image */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiInfo className="w-5 h-5 text-purple-500" />
                  Overview
                </h3>
                <p className="text-white/60 mb-4">{selectedProduct.shortDescription}</p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                      <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiCode className="w-5 h-5 text-purple-500" />
                  Technology Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProduct.techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                    >
                      {getTechIcon(tech)}
                      <span className="text-white">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-purple-500" />
                  Project Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <FiCalendar className="w-5 h-5" />
                      <span className="font-medium">Delivery Time</span>
                    </div>
                    <p className="text-white/60">{selectedProduct.deliveryTime}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <FiHeadphones className="w-5 h-5" />
                      <span className="font-medium">Support Period</span>
                    </div>
                    <p className="text-white/60">{selectedProduct.supportTime}</p>
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiPackage className="w-5 h-5 text-purple-500" />
                  Available Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedProduct.packages.map((pkg, index) => (
                    <div 
                      key={index}
                      className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border transition-all cursor-pointer ${
                        selectedPackage === pkg 
                          ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      {pkg.isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Popular Choice
                        </div>
                      )}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="flex items-center justify-center gap-1">
                          <img 
                            src={`/icons/${selectedCurrency.toLowerCase()}.png`} 
                            alt={selectedCurrency}
                            className="w-4 h-4"
                          />
                          <span className="text-2xl font-bold text-white">
                            {formatPrice(pkg.price, selectedCurrency)}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-white/60">
                            <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Section */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiShield className="w-5 h-5 text-purple-500" />
                    <span className="text-white">100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiRefreshCw className="w-5 h-5 text-purple-500" />
                    <span className="text-white">Free Updates</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all ${
                    selectedPackage 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90' 
                      : 'bg-white/10 cursor-not-allowed'
                  }`}
                  disabled={!selectedPackage}
                >
                  <FiPackage className="w-5 h-5" />
                  <span>
                    {selectedPackage 
                      ? `Purchase ${selectedPackage.name} Package` 
                      : 'Select a Package to Continue'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Support Button and Chat */}
      <AnimatePresence>
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {!isSupportOpen ? (
            <motion.button
              onClick={() => setIsSupportOpen(true)}
              className="group relative bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMessageSquare className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.button>
          ) : (
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl w-96 shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-medium">Live Support</span>
                  </div>
                  <button 
                    onClick={() => setIsSupportOpen(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/60 text-sm">Get instant help through any channel</p>
              </div>

              {/* Quick Contact Options */}
              <div className="p-4 space-y-3">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/8801831624571" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-0.5">Chat on WhatsApp</h3>
                    <p className="text-white/60 text-sm">Usually replies within minutes</p>
                  </div>
                  <FiArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white ml-auto transition-colors rotate-180" />
                </a>

                {/* Call */}
                <a 
                  href="tel:+8801831624571" 
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <FiPhone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-0.5">Call Support</h3>
                    <p className="text-white/60 text-sm">Available 24/7</p>
                  </div>
                  <FiArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white ml-auto transition-colors rotate-180" />
                </a>
              </div>

              {/* Chat Messages */}
              <div className="h-64 p-4 overflow-y-auto border-t border-white/10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FiHeadphones className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-white/80 text-sm">
                    Hi there! 👋 How can I help you today? Choose from the quick options below or ask your own question.
                  </div>
                </div>

                {/* Quick Questions */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  <button 
                    className="text-left bg-white/5 hover:bg-white/10 text-white/80 text-sm p-3 rounded-xl transition-colors"
                    onClick={() => setMessage("What's included in the packages?")}
                  >
                    What's included in the packages? 📦
                  </button>
                  <button 
                    className="text-left bg-white/5 hover:bg-white/10 text-white/80 text-sm p-3 rounded-xl transition-colors"
                    onClick={() => setMessage("How long does delivery take?")}
                  >
                    How long does delivery take? ⏱️
                  </button>
                  <button 
                    className="text-left bg-white/5 hover:bg-white/10 text-white/80 text-sm p-3 rounded-xl transition-colors"
                    onClick={() => setMessage("Do you offer customization?")}
                  >
                    Do you offer customization? 🛠️
                  </button>
                  <button 
                    className="text-left bg-white/5 hover:bg-white/10 text-white/80 text-sm p-3 rounded-xl transition-colors"
                    onClick={() => setMessage("What payment methods do you accept?")}
                  >
                    What payment methods do you accept? 💳
                  </button>
                </div>

                {/* Common Questions & Answers */}
                <div className="space-y-4 border-t border-white/10 pt-4">
                  <div className="text-white/40 text-xs uppercase">Frequently Asked Questions</div>
                  
                  <div className="space-y-2">
                    <div className="bg-white/5 p-3 rounded-xl">
                      <h4 className="text-white font-medium text-sm mb-1">How does the support work? 🤝</h4>
                      <p className="text-white/60 text-sm">We provide dedicated support during the development and after delivery. Each package includes a support period.</p>
                    </div>
                    
                    <div className="bg-white/5 p-3 rounded-xl">
                      <h4 className="text-white font-medium text-sm mb-1">Do you provide source code? 📄</h4>
                      <p className="text-white/60 text-sm">Yes, you'll receive full source code access with documentation for your project.</p>
                    </div>
                    
                    <div className="bg-white/5 p-3 rounded-xl">
                      <h4 className="text-white font-medium text-sm mb-1">Can I request changes? 🔄</h4>
                      <p className="text-white/60 text-sm">Yes, we offer revision rounds based on your package. Additional revisions can be arranged.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/10">
                <div className="relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message or choose from above..."
                    className="w-full bg-white/5 text-white placeholder-white/40 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
                  >
                    <FiSend className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ShopPage 