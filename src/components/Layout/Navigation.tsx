import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FULL_NAME } from '../../constants/personalInfo'

interface NavigationProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const sections = [
    { id: 'home', path: '/' },
    { id: 'about', path: '/' },
    { id: 'skills', path: '/' },
    { id: 'projects', path: '/' },
    { id: 'contact', path: '/' },
    { id: 'experience', path: '/experience' },
  ]

  const handleClick = (section: { id: string; path: string }) => {
    if (section.path === '/') {
      onSectionClick(section.id)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-400">
          {FULL_NAME}
        </Link>
        <ul className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.path}
                onClick={() => handleClick(section)}
                className={`capitalize transition-colors duration-200 ${
                  (isHomePage && activeSection === section.id) ||
                  (!isHomePage && section.path === location.pathname)
                    ? 'text-teal-400 font-semibold'
                    : 'text-gray-300 hover:text-teal-400'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
