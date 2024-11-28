'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, headerType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Games');
  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=' min-h-screen bg-gray-900 text-white'>
      <div className='grid lg:grid-cols-[260px_1fr] grid-cols-1'>
        {/* Sidebar Container */}
        <div className='md:sticky md:top-0 lg:h-screen z-50'>
          <Sidebar
            isOpen={isSidebarOpen}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Main Content */}
        <div className=' flex flex-col'>
          <Header type={headerType} onMenuClick={handleMenuClick} />
          <main className='flex-1 p-4'>
            <div className='relative w-full'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
