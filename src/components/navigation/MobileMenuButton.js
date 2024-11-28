import { Menu, X } from 'lucide-react';
import React from 'react';

const MobilMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='md:hidden fixed top-4 left-4 z-50 p-2 text-white hover:bg-gray-700 rounded-lg'
      aria-label='Toggle Menu'
    >
      {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
    </button>
  );
};

export default MobilMenuButton;
