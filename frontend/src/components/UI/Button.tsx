import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:ring-2 focus:ring-pink-400 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
