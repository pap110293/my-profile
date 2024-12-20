import React from 'react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="bg-gray-100 text-blue-900 text-sm px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default ProjectCard
