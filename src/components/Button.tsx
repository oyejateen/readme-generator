import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  onClick: () => void;
  icon: IconDefinition;
  color: 'green' | 'blue' | 'yellow' | 'purple';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, color, children }) => {
  const colorClasses = {
    green: 'bg-green-300 hover:bg-green-400',
    blue: 'bg-blue-300 hover:bg-blue-400',
    yellow: 'bg-yellow-300 hover:bg-yellow-400',
    purple: 'bg-purple-300 hover:bg-purple-400',
  };

  return (
    <button
      onClick={onClick}
      className={`${colorClasses[color]} text-gray-900 px-3 py-2 rounded-full font-semibold flex items-center justify-center transition duration-300 w-full sm:w-auto`}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {children}
    </button>
  );
};

export default Button;