'use client';
import React, { useState } from 'react';

import CommunityContent from './components/CommunityContent';
import { GameCommunityProvider } from '@/contexts/FilterContext';
import CommunityNavigation from './components/tabcontent/CommunityNavigation';

export default function CommunityPage() {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <GameCommunityProvider>
      <div className='bg-[#1a1b1e] min-h-screen'>
        <div id='hero' className='relative bg-[#7e3af2] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl'>
              <h1 className='text-4xl font-bold mb-4'>게임 커뮤니티</h1>
              <p className='text-xl text-purple-100 mb-8'>
                토론에 참여하고, 게임 경험을 공유하며, 다른 게이머들과 함께 배우세요!
              </p>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#1a1b1e]' />
        </div>

        <CommunityNavigation scrolled={scrolled} />

        <CommunityContent />
      </div>
    </GameCommunityProvider>
  );
}
