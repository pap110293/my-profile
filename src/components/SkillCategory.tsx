import React from 'react'
import { ChevronDown } from 'lucide-react'

interface SkillCategoryProps {
  title: string
  skills: string[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <ChevronDown className="text-blue-900 mr-2" size={16} />
          <span className="text-gray-600">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default SkillCategory
