'use client';
import React, { useState } from 'react';

import CommunityContent from './components/CommunityContent';
import { GameCommunityProvider } from '@/contexts/FilterContext';
import CommunityNavigation from './components/tabcontent/CommunityNavigation';
import DrawerMenu from '@/components/navigation/DrawerMenu';
import HeaderSearch from '@/components/common/HeaderSearch';

export default function CommunityPage() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledForMove, setScrolledForMove] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 60);
      setScrolledForMove(window.scrollY > heroHeight - 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <GameCommunityProvider>
      <div className='bg-[#1a1b1e]  min-h-screen'>
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-300 
    ${scrolledForMove ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
        >
          <h2 className='text-3xl font-bold pt-4'>게임 커뮤니티</h2>
        </div>

        <div
          className={`fixed left-0 right-0 z-50 bg-[#1a1b1e]/95 backdrop-blur-sm 
    transition-all duration-300 border-b border-gray-800
    ${scrolledForMove ? 'top-0 translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <div className=' px-4'>
            <div className='py-4 flex items-center'>
              <DrawerMenu />
              <div className='flex-1 flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-white'>게임 커뮤니티</h2>
                <HeaderSearch />
              </div>
            </div>
          </div>
        </div>
        <div id='hero' className='  text-white py-6'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl'>
              <p className='text-xl text-purple-100 mb-8'>
                토론에 참여하고, 게임 경험을 공유하며, 다른 게이머들과 함께 배우세요!
              </p>
            </div>
          </div>
        </div>
        <CommunityNavigation scrolled={scrolled} />
        <CommunityContent />
      </div>
    </GameCommunityProvider>
  );
}
