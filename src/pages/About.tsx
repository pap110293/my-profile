import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section title="About Me">
      <div className="max-w-2xl mx-auto">
        <p className="mb-4 leading-relaxed text-gray-800">
          I am a dedicated .NET developer with over 7 years of experience across the full software development lifecycle. My expertise is centered on designing and delivering robust, scalable applications by leveraging cutting-edge technologies.
        </p>
        <p className="mb-4 leading-relaxed text-gray-800">
          With a strong background in .NET Framework, C#, REST APIs, gRPC, ASP.NET Core, and microservices architecture, I focus on writing clean, maintainable code to address complex business challenges. I thrive on developing solutions that are both efficient and scalable.
        </p>
        <p className="mb-4 leading-relaxed text-gray-800">
          Having worked across multiple industries, I bring a broad perspective to each project, ensuring innovative and tailored approaches. I am committed to continuous learning, staying at the forefront of evolving software development trends and best practices.
        </p>
      </div>
    </Section>
  );
};

export default About;
