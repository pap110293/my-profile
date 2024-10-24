import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16 px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl mb-8 text-gray-800 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
