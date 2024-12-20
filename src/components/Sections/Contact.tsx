import React from 'react'
import { Mail, GitBranch, Linkedin, Phone } from 'lucide-react'
import {
  EMAIL,
  PHONE,
  GITHUB_URL,
  LINKEDIN_URL,
} from '../../constants/personalInfo'

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
        Contact Me
      </h2>
      <div className="max-w-md mx-auto">
        <p className="text-center mb-8 text-gray-600">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <Mail size={24} className="text-blue-900" />
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-900 hover:text-blue-950"
              aria-label="Email"
              tabIndex={0}
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Phone size={24} className="text-blue-900" />
            <a
              href={`tel:${PHONE}`}
              className="text-blue-900 hover:text-blue-950"
              aria-label="Phone"
              tabIndex={0}
            >
              {PHONE}
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-950"
              aria-label="GitHub"
              tabIndex={0}
            >
              <GitBranch size={24} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-950"
              aria-label="LinkedIn"
              tabIndex={0}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
