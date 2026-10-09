import { useEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function RouteEffects() {
  const location = useLocation()
  const firstVisit = useRef(true)

  useEffect(() => {
    const isAbout = location.pathname === '/about'
    document.title = isAbout
      ? 'About Us | ByteBridge'
      : 'ByteBridge | Digital Skills for Everyone'
    document.querySelector('meta[name="description"]')?.setAttribute('content', isAbout
      ? 'Discover the purpose, principles, and student-led team behind ByteBridge, a nonprofit concept for digital inclusion.'
      : 'Bridging the digital divide, one skill at a time. Explore ByteBridge’s student-created vision for digital literacy, online safety, and technology opportunities.')

    const shouldFocus = !firstVisit.current || Boolean(location.hash)
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (target) {
        target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
      if (shouldFocus) (target ?? document.getElementById('main-content'))?.focus({ preventScroll: true })
      firstVisit.current = false
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash, location.key])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
