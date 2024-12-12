'use client';
import React, { Suspense, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import CommunityContent from './components/CommunityContent';
import { GameCommunityProvider } from '@/contexts/FilterContext';
import CommunityNavigation from './components/tabcontent/CommunityNavigation';
import DrawerMenu from '@/components/navigation/DrawerMenu';
import HeaderSearch from '@/components/common/HeaderSearch';

export default function CommunityPage() {
  const { colorMode } = useColorMode();
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
      <div className={`min-h-screen ${colorMode === 'dark' ? 'bg-[#1a1b1e]' : 'bg-gray-50'}`}>
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-300 
                    ${scrolledForMove ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
        >
          <h2 className={`text-3xl font-bold pt-4 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            게임 커뮤니티
          </h2>
        </div>

        <div
          className={`fixed left-0 right-0 z-50 backdrop-blur-sm 
                    transition-all duration-300 border-b
                    ${colorMode === 'dark' ? 'bg-[#1a1b1e]/95 border-gray-800' : 'bg-white/95 border-gray-200'}
                    ${scrolledForMove ? 'top-0 translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <div className='px-6'>
            <header className='flex items-center justify-between h-16'>
              <DrawerMenu />
              <div className='flex-1 flex items-center justify-between'>
                <h2 className={`text-xl font-bold ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  게임 커뮤니티
                </h2>
                <Suspense fallback={<div>Loading...</div>}>
                  <HeaderSearch />
                </Suspense>
              </div>
            </header>
          </div>
        </div>

        <div id='hero' className={`py-6 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl'>
              <p className={`text-xl mb-8 ${colorMode === 'dark' ? 'text-purple-100' : 'text-purple-600'}`}>
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
