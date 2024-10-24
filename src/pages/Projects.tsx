import React from "react";
import Section from "../components/Section";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a scalable e-commerce platform using .NET Core and microservices architecture.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "CRM System",
      description:
        "Developed a custom CRM system with ASP.NET MVC and SQL Server.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "IoT Data Processing",
      description:
        "Created a real-time IoT data processing system using .NET and Azure services.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-sans">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-full flex-col overflow-hidden rounded bg-gray-100 shadow-md dark:bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-grow flex-col p-4">
              <h3 className="mb-2 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-auto inline-block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500"
                aria-label={`View ${project.title} project`}
                tabIndex={0}
              >
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
