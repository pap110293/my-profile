import React, { useEffect } from 'react'
import Navigation from '../components/Layout/Navigation'
import Footer from '../components/Layout/Footer'
import ExperienceSection from '../components/Sections/Experience'

const Experience: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navigation activeSection="experience" onSectionClick={() => {}} />
      <main className="pt-16">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

export default Experience
