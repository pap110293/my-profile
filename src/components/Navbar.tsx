import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MY_NAME, MY_REAL_NAME } from "../constants/constants";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the dark class on the html element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const activeLinkClass = "text-blue-500 dark:text-blue-300";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-100 p-2 shadow-md dark:bg-gray-800 font-roboto">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold text-gray-800 no-underline dark:text-white font-playfair"
        >
          Hi, I'm {MY_NAME} ({MY_REAL_NAME})
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 md:flex">
            <Link
              to="/"
              className={`font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/" ? activeLinkClass : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/about" ? activeLinkClass : ""}`}
            >
              About
            </Link>
            <Link
              to="/skills"
              className={`font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/skills" ? activeLinkClass : ""}`}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className={`font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/projects" ? activeLinkClass : ""}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/contact" ? activeLinkClass : ""}`}
            >
              Contact
            </Link>
          </div>
          <button
            className="text-gray-800 focus:outline-none dark:text-white md:hidden"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggleTheme}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <svg
              className="pointer-events-none absolute left-1 top-1 h-4 w-4 text-yellow-500 dark:text-transparent"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="pointer-events-none absolute right-1 top-1 h-4 w-4 text-transparent dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </label>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-gray-100 shadow-md dark:bg-gray-800 md:hidden">
          <Link
            to="/"
            className={`block p-4 font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/" ? activeLinkClass : ""}`}
            onClick={handleToggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block p-4 font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/about" ? activeLinkClass : ""}`}
            onClick={handleToggleMenu}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`block p-4 font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/skills" ? activeLinkClass : ""}`}
            onClick={handleToggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`block p-4 font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/projects" ? activeLinkClass : ""}`}
            onClick={handleToggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`block p-4 font-medium text-gray-800 no-underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 ${location.pathname === "/contact" ? activeLinkClass : ""}`}
            onClick={handleToggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
