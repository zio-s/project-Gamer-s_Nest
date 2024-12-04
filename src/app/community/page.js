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
        <div className='max-w-7xl mx-auto sticky top-3 z-50 px-4'>
          <h2 className=' text-4xl font-bold z-50'>게임 커뮤니티</h2>
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
