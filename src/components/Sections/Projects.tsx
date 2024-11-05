import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="E-commerce Platform"
          description="Developed a scalable e-commerce platform using .NET Core microservices architecture, with React frontend and SQL Server database."
          technologies={['.NET Core', 'React', 'SQL Server', 'Docker']}
        />
        <ProjectCard
          title="Real-time Chat Application"
          description="Built a real-time chat application using SignalR, ASP.NET Core backend, and React frontend with TypeScript."
          technologies={['ASP.NET Core', 'SignalR', 'React', 'TypeScript']}
        />
        <ProjectCard
          title="Financial Data Analytics Dashboard"
          description="Created a high-performance financial data analytics dashboard using .NET Core, gRPC for data streaming, and React for the frontend."
          technologies={['.NET Core', 'gRPC', 'React', 'D3.js']}
        />
        <ProjectCard
          title="IoT Device Management System"
          description="Developed an IoT device management system using .NET Core, Azure IoT Hub, and Angular for the admin dashboard."
          technologies={['.NET Core', 'Azure IoT Hub', 'Angular', 'MongoDB']}
        />
      </div>
    </div>
  </section>
)

export default Projects
