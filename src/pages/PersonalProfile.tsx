import React, { useState, useEffect } from 'react'
import Navigation from '../components/Layout/Navigation'
import Footer from '../components/Layout/Footer'
import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Skills from '../components/Sections/Skills'
import Projects from '../components/Sections/Projects'
import Contact from '../components/Sections/Contact'
import { scrollToSection } from '../utils/scrollUtils'

const PersonalProfile: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navigation
        activeSection={activeSection}
        onSectionClick={handleScrollToSection}
      />
      <main className="pt-16">
        <Home onLearnMoreClick={() => handleScrollToSection('about')} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default PersonalProfile
