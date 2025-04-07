import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import ViewAllPage from './pages/ViewAllPage'
import ShopPage from './pages/ShopPage'
import Contact from './components/Contact'
import ShopPromo from './components/ShopPromo'
import LocomotiveScrollProvider from './components/LocomotiveScroll'
import {LoadingScreen} from './components/LoadingScreen'

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <div className="relative">
                <Navbar onAboutClick={() => setIsAboutVisible(true)} />
                <LocomotiveScrollProvider>
                  <div className="min-h-screen bg-black" data-scroll-section>
                    <div data-scroll data-scroll-speed="-1">
                      <Hero />
                    </div>
                    <div data-scroll data-scroll-speed="0.1">
                      <Projects featured={true} />
                    </div>
                    <div data-scroll data-scroll-speed="0.2">
                      <ShopPromo />
                    </div>
                    <div data-scroll data-scroll-speed="0.1">
                      <Contact />
                    </div>
                  </div>
                </LocomotiveScrollProvider>
                {isAboutVisible && <About onClose={() => setIsAboutVisible(false)} />}
              </div>
            } 
          />

          {/* View All Projects Page */}
          <Route path="/projects" element={<ViewAllPage />} />

          {/* Shop Page */}
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      )}
    </Router>
  )
}

export default App 