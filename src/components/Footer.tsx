import React from 'react';
import { MY_NAME } from '../constants/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 text-center bottom-0 w-full">
      <p className="text-gray-600 text-sm">&copy; {currentYear} {MY_NAME}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
