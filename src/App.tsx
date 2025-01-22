import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import ViewAllPage from './pages/ViewAllPage'
import ShopPage from './pages/ShopPage'
import SplineScene from './components/SplineScene'
import Contact from './components/Contact'

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <div className="min-h-screen bg-black">
              <Navbar onAboutClick={() => setIsAboutVisible(true)} />
              <Hero />
              <SplineScene />
              <Projects featured={true} />
              <Contact />
              {isAboutVisible && <About onClose={() => setIsAboutVisible(false)} />}
            </div>
          } 
        />

        {/* View All Projects Page */}
        <Route path="/projects" element={<ViewAllPage />} />

        {/* Shop Page */}
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  )
}

export default App 