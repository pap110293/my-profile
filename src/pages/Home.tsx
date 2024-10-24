import React from "react";
import Section from "../components/Section";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { MY_NAME, MY_REAL_NAME } from "../constants/constants";

const Home: React.FC = () => {
  return (
    <Section title="Welcome">
      <div className="text-center dark:text-gray-300">
        <div className="mb-6 flex justify-center">
          <img
            src="https://via.placeholder.com/256"
            alt={`${MY_NAME}'s avatar`}
            className="h-32 w-32 rounded-full object-cover shadow-lg sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
          />
        </div>
        <h1 className="mb-4 text-3xl text-gray-800 dark:text-gray-200">
          Hi, I'm {MY_NAME} ({MY_REAL_NAME})
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          .NET Developer
        </p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Section>
  );
};

export default Home;
