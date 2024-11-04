import React from 'react'
import SkillCategory from '../SkillCategory'

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory 
          title="Backend Development" 
          skills={[
            '.NET Core / .NET Framework',
            'C#',
            'Entity Framework Core',
            'MS SQL Server',
            'MySQL / MariaDB',
            'MongoDB',
            'Microservices',
            'gRPC',
            'Azure Functions',
            'Azure Cloud Services'
          ]} 
        />
        <SkillCategory 
          title="Frontend Development" 
          skills={[
            'ReactJS',
            'JavaScript',
            'TypeScript',
            'AngularJS',
            'HTML5',
            'CSS3',
            'KendoUI',
            'Sitecore CMS'
          ]} 
        />
        <SkillCategory 
          title="Tools & Technologies" 
          skills={[
            'Git',
            'Docker',
            'CI/CD',
            'NATS Jetstream',
            'EventStore',
            'Akka.NET',
            'Solr Search',
            'Agile Methodologies'
          ]} 
        />
      </div>
    </div>
  </section>
)

export default Skills
