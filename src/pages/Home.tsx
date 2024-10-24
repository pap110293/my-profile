import React from 'react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <Section title="Welcome">
      <div className="text-center">
        <h1 className="text-3xl mb-4 text-gray-800">John Doe</h1>
        <p className="text-xl text-gray-600 mb-8">.NET Developer with 7 Years of Experience</p>
        <a href="/contact" className="inline-block bg-blue-500 text-white py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-700">
          Get in Touch
        </a>
      </div>
    </Section>
  );
};

export default Home;
