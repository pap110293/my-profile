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
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">{FULL_NAME}</h1>
        <ul className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => onSectionClick(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-teal-400 font-semibold"
                    : "text-gray-300 hover:text-teal-400"
                }`}
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
