'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
// import { useColorMode } from '@chakra-ui/react';
import { ThemeToggle } from '../ThemeToggle';
import { useColorMode } from '@chakra-ui/react';

const MainLayout = ({ children, headerType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Games');
  const { colorMode } = useColorMode();
  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=' min-h-screen '>
      <div className=' grid lg:grid-cols-[260px_1fr] grid-cols-1'>
        {/* Sidebar Container */}
        <div className='md:sticky md:top-0 lg:h-screen z-50 sidebar'>
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
          <main className='flex-1 p-4 '>
            <video
              autoPlay
              muted
              loop
              className=' absolute inset-0 w-full h-full object-cover'
              poster='/pattern/video/main-mo.png'
            >
              <source src='/pattern/video/main-video.mp4' type='video/mp4' />
            </video>
            <div
              className='absolute inset-0 bg-black bg-opacity-80 z-5'
              style={{
                backgroundColor: colorMode === 'dark' ? '#1A1A1A' : '#FFFFFF',

                color: colorMode === 'dark' ? '#fff' : '#444',
              }}
            ></div>
            <div className='relative w-full flex flex-col gap-10'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
