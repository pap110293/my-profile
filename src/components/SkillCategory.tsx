import React from 'react'
import { ChevronDown } from 'lucide-react'

interface SkillCategoryProps {
  title: string
  skills: string[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-teal-400">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <ChevronDown className="text-teal-400 mr-2" size={16} />
          <span className="text-gray-300">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default SkillCategory
