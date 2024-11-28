import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
