import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;  // Permite personalizar clases adicionales
};

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#03ff94] text-black font-semibold px-4 py-2 rounded-lg transition duration-300 transform hover:bg-white hover:text-black hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
