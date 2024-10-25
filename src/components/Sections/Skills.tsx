import React from 'react'
import SkillCategory from '../SkillCategory'

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Backend" skills={['.NET Core', 'C#', 'Entity Framework Core', 'MS SQL Server', 'MySQL']} />
        <SkillCategory title="Frontend" skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS']} />
        <SkillCategory title="Other" skills={['Git', 'Docker', 'CI/CD', 'Agile Methodologies', 'Microservices']} />
      </div>
    </div>
  </section>
)

export default Skills
