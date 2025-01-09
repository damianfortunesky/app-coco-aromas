  import React from 'react';

  interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-300 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  