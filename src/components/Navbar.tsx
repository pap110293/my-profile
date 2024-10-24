import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
          Hi, I'm Alex (Anh Phạm)
        </Link>
        <div className="flex gap-4">
          <Link
            to="/about"
            className="text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 no-underline font-medium transition-colors duration-300 hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
