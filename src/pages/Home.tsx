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
        <h1 className="mb-4 text-3xl text-gray-800 dark:text-gray-200">
          Hi, I'm {MY_NAME} ({MY_REAL_NAME})
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          .NET Developer with 7 Years of Experience
        </p>
        <a
          href="/contact"
          className="inline-block rounded bg-blue-500 px-6 py-3 text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500"
        >
          Get in Touch
        </a>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Section>
  );
};

export default Home;
