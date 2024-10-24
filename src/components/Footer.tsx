import React from "react";
import { MY_NAME } from "../constants/constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 w-full bg-gray-100 py-4 text-center dark:bg-gray-800">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {currentYear} {MY_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
