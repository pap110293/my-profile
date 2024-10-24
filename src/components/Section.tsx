import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mx-auto max-w-5xl px-8 py-16 dark:bg-gray-900 font-roboto">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200 font-playfair">
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
