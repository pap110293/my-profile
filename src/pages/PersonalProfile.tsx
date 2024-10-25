import React, { useState } from 'react'
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

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navigation activeSection={activeSection} onSectionClick={handleScrollToSection} />
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