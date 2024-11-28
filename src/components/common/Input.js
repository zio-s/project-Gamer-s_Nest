import React from 'react';
import { useColorMode } from '@chakra-ui/react';
const Input = ({ className = '', ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <input
      style={{
        backgroundColor: colorMode === 'dark' ? '#1f2937' : '#9333ea',
        borderRight: colorMode === 'dark' ? '1px solid #2D2D2D' : '1px solid #E2E8F0',
        color: colorMode === 'dark' ? 'white' : 'black',
      }}
      className={`w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
