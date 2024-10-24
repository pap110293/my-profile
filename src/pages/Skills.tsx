import React from 'react';
import Section from '../components/Section';

const Skills: React.FC = () => {
  const skills = [
    { title: 'C#', description: 'Advanced' },
    { title: '.NET Framework', description: 'Advanced' },
    { title: 'ASP.NET Core', description: 'Advanced' },
    { title: 'REST APIs', description: 'Proficient' },
    { title: 'Microservices', description: 'Proficient' },
  ];

  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded text-center shadow-md">
            <h3 className="mb-2 text-gray-800">{skill.title}</h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
