import React from "react";
import Section from "../components/Section";

const Skills: React.FC = () => {
  const skills = [
    { title: "C#", description: "Advanced" },
    { title: ".NET Framework", description: "Advanced" },
    { title: "ASP.NET Core", description: "Advanced" },
    { title: "REST APIs", description: "Proficient" },
    { title: "Microservices", description: "Proficient" },
  ];

  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 font-sans">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded bg-gray-100 p-4 text-center shadow-md dark:bg-gray-800"
          >
            <h3 className="mb-2 text-gray-800 dark:text-gray-200">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
