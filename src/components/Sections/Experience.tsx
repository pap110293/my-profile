import { FC } from 'react'

type ExperienceItem = {
  company: string
  period: string
  position: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
}

const experienceData: ExperienceItem[] = [
  {
    company: 'Dynamite Games',
    period: '09/2022 - Present',
    position: 'Backend Developer',
    responsibilities: [
      'Develop and maintain server-side logic for gameplay mechanics, player progression, and in-game events',
      'Monitored server performance and resolved issues',
      'Conducted troubleshooting and performance testing',
      'Build and maintain a collection of nine engaging games',
      'Develop and maintain the support website',
    ],
    technologies: [
      '.NET',
      'ReactJS',
      'MariaDB',
      'MongoDB',
      'Microservices',
      'NATS Jetstream',
      'EventStore',
      'Akka.NET',
      'gRPC',
    ],
    achievements: [
      'Gained valuable experience in the game industry',
      'Developed expertise in building highly scalable services',
      'Explored and implemented innovative software architectures',
    ],
  },
  {
    company: 'NFQ',
    period: '11/2021 - 08/2022',
    position: 'Software Engineer',
    responsibilities: [
      'Develop, review, and maintain software programs in strict adherence to design specifications',
      'Thoroughly perform comprehensive code reviews and code refactoring',
      'Conducted meetings with German clients to discuss and clarify software requirements',
    ],
    technologies: ['.NET', 'Azure Cloud', 'MySQL', 'CosmosDB'],
    achievements: [
      'Gained experience working with Azure Function and Azure Cloud',
      'Successfully collaborated with German clients and colleagues for new features',
    ],
  },
  {
    company: 'ASWhite Global',
    period: '06/2020 - 11/2021',
    position: 'Senior Software Engineer',
    responsibilities: [
      'Designing, developing, developer testing, and delivering custom software solutions',
      'Member of code review subteam, ensuring adherence to coding standards',
      'Conducted technical sharing sessions on Unit tests',
      'Generated regular reports and presented findings to stakeholders',
    ],
    technologies: [
      '.NET',
      'JavaScript',
      'KendoUI',
      'MS SQL Server',
      'Microservices',
    ],
    achievements: [
      'Actively participated in the code review sub-team',
      'Increased code coverage through Unit tests and code reviews',
      'Successfully conducted technical sharing sessions on Unit tests',
    ],
  },
  {
    company: 'Amaris',
    period: '04/2019 - 03/2020',
    position: '.NET Developer (Consultant)',
    responsibilities: [
      'Build and maintain web app for one of the biggest insurance companies in Vietnam',
      'Developed and maintained multiple web applications using Sitecore CMS tool',
      'Analyzed and implemented client requirements, delivering tailored solutions',
    ],
    technologies: [
      '.NET',
      'JavaScript',
      'AngularJS',
      'MS SQL Server',
      'Sitecore',
    ],
    achievements: [
      'Learned AngularJS framework',
      'Release 3 websites in a month with the team',
    ],
  },
  {
    company: 'Sutrix Solutions',
    period: '03/2017 - 03/2019',
    position: '.NET Developer (Sitecore Developer)',
    responsibilities: [
      'Take the role of a key member of the team',
      'Develop multiple web applications with the Sitecore CMS tool',
      'Implement the Solr search engine and build an indexing feature',
      'Extend API for mobile app',
    ],
    technologies: ['.NET', 'Sitecore', 'Solr'],
    achievements: ['Working as a Key member', 'Learned Sitecore CMS'],
  },
]

const Experience: FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">
          Professional Experience
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="max-w-3xl mx-auto bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center text-center gap-2 mb-4">
                <h3 className="text-2xl font-semibold text-teal-400">
                  {experience.company}
                </h3>
                <span className="text-gray-400">{experience.period}</span>
                <span className="font-medium text-teal-300">
                  {experience.position}
                </span>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-medium mb-2 text-teal-400">
                    Main Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-teal-400">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-600 text-teal-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-teal-400">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
