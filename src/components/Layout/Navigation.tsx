import React from "react";
import { FULL_NAME } from "../../constants/personalInfo";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const sections = ["home", "about", "experience", "skills", "projects", "contact"];

  const handleClick = (sectionId: string) => {
    onSectionClick(sectionId)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">{FULL_NAME}</h1>
        <ul className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleClick(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? "text-teal-400 font-semibold"
                    : "text-gray-300 hover:text-teal-400"
                }`}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
