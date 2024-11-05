import React from 'react'
import { FULL_NAME } from '../../constants/personalInfo'

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 py-8">
    <div className="container mx-auto px-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
