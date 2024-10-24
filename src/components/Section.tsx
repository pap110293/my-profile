import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mx-auto max-w-5xl px-8 py-16 dark:bg-gray-900">
      <h2 className="mb-8 text-center text-2xl text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
