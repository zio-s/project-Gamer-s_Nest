'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useColorMode } from '@chakra-ui/react';
import Footer from './Footer';

const MainLayout = ({ children, headerType, showAside = true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Games');
  const { colorMode } = useColorMode();
  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=' min-h-screen '>
      <div className={`grid  grid-cols-1 ${showAside === true ? 'lg:grid-cols-[260px_1fr]' : ''} `}>
        {/* Sidebar Container */}

        {showAside && (
          <div className='md:sticky md:top-0 lg:h-screen z-50'>
            <Sidebar isOpen={isSidebarOpen} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        )}

        <div className='fixed inset-0 -z-10'>
          <video
            autoPlay
            playsInline
            muted
            loop
            className='w-full h-full object-cover'
            poster='/pattern/video/main-mo.png'
          >
            <source src='/pattern/video/main-video.mp4' type='video/mp4' />
          </video>
          <div
            className='absolute inset-0'
            style={{
              backgroundColor: colorMode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            }}
          />
        </div>

        {/* Main Content */}
        <div className=' flex flex-col '>
          <Header
            type={headerType}
            onMenuClick={handleMenuClick}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <main className={`flex-1 min-h-screen ${showAside ? '' : ''}`}>
            <div className='relative w-full flex flex-col gap-16 z-5'>{children}</div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
