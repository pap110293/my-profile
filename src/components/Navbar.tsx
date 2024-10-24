import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MY_NAME, MY_REAL_NAME } from '../constants/constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center p-4 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
          Hi, I'm {MY_NAME} ({MY_REAL_NAME})
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-500' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500 ${location.pathname === '/about' ? 'text-blue-500' : ''}`}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500 ${location.pathname === '/skills' ? 'text-blue-500' : ''}`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500 ${location.pathname === '/projects' ? 'text-blue-500' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500 ${location.pathname === '/contact' ? 'text-blue-500' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
