import React from "react";
import Section from "../components/Section";

const About: React.FC = () => {
  return (
    <Section title="About Me">
      <div className="mx-auto max-w-2xl dark:text-gray-300 font-sans">
        <h2 className="mb-4 text-xl font-bold">Phạm Anh</h2>
        <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
          Highly skilled .NET Developer with over 7 years of hands-on experience
          in the complete software development lifecycle, specializing in
          Microsoft .NET Framework and C#. Proficient in designing, developing,
          and deploying scalable, robust, and secure applications. Adapt at
          identifying and solving challenges for both domestic and international
          clients efficiently.
        </p>
        <h3 className="mb-2 text-lg font-semibold">Summary of Skills</h3>
        <ul className="mb-4 list-inside list-disc text-gray-800 dark:text-gray-300">
          <li>
            Proficient in Microsoft .NET Framework (.NET Core) and C# with over
            9 years of practical experience in software development.
          </li>
          <li>
            Strong expertise in designing and implementing solutions using REST,
            WebSocket, and gRPC protocols, ensuring efficient communication
            between services.
          </li>
          <li>
            Proven ability to work effectively in both team environments and as
            a solo developer when necessary.
          </li>
          <li>
            Skilled in ASP.NET Core and Entity Framework Core, facilitating
            rapid development and access to .NET applications.
          </li>
          <li>
            Experience with cloud services, including Azure Functions and Azure
            Cloud.
          </li>
          <li>
            Committed to continuous learning and staying abreast of the latest
            industry trends and best practices.
          </li>
        </ul>
        <h3 className="mb-2 text-lg font-semibold">Strengths</h3>
        <ul className="mb-4 list-inside list-disc text-gray-800 dark:text-gray-300">
          <li>Attention to detail and precision in requirements.</li>
          <li>Adaptability and quick learning.</li>
          <li>Strong problem-solving skills.</li>
          <li>
            Focus on perfection, consistently dedicating necessary time and
            effort to achieve it.
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default About;
