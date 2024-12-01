import React from 'react';
import MenuButton from './MenuButton';

const Navigation = ({ menuItems }) => {
  return (
    <nav className='flex flex-col bg-gray-600 '>
      {menuItems.map((item, index) => (
        <MenuButton key={index} icon={item.icon} label={item.label} href={item.href} />
      ))}
    </nav>
  );
};

export default Navigation;
