import React from 'react'
import Navigation from '../components/Layout/Navigation'
import Footer from '../components/Layout/Footer'
import ExperienceSection from '../components/Sections/Experience'

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navigation activeSection="experience" onSectionClick={() => {}} />
      <main className="pt-16">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

export default Experience 