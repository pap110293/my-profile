import React from 'react';
import Section from '../components/Section';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a scalable e-commerce platform using .NET Core and microservices architecture.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'CRM System',
      description: 'Developed a custom CRM system with ASP.NET MVC and SQL Server.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'IoT Data Processing',
      description: 'Created a real-time IoT data processing system using .NET and Azure services.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
