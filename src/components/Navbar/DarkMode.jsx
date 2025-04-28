import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <BsSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <BsMoon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
