import React from 'react'

const About: React.FC = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-gray-300 text-left">
          Highly skilled .NET Developer with over 7 years of hands-on experience
          in the complete software development lifecycle, specializing in
          Microsoft .NET Framework and C#. Proficient in designing, developing,
          and deploying scalable, robust, and secure applications. Adept at
          identifying and solving challenges for both domestic and international
          clients efficiently.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-teal-400 text-left">
          Summary of Skills
        </h3>
        <ul className="list-disc list-inside text-lg mb-6 text-gray-300 text-left">
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
        <h3 className="text-2xl font-semibold mb-4 text-teal-400 text-left">
          Strengths
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-300 text-left">
          <li>Attention to detail and precision in requirements.</li>
          <li>Adaptability and quick learning.</li>
          <li>Strong problem-solving skills.</li>
          <li>
            Focus on perfection, consistently dedicating necessary time and
            effort to achieve it.
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default About
