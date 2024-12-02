'use client';
import React, { useState } from 'react';
import { Clock, MessageSquare, Star, TrendingUp } from 'lucide-react';

import CommunityContent from './components/CommunityContent';
import { GameCommunityProvider } from '@/contexts/FilterContext';

export default function CommunityPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('newest');

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
              <h1 className='text-4xl font-bold mb-4'>Game Community</h1>
              <p className='text-xl text-purple-100 mb-8'>
                Join the discussion, share your gaming experience, and learn from fellow gamers
              </p>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#1a1b1e]' />
        </div>

        <nav
          className={`sticky top-16 z-30 border-b border-[#2d2d3a] bg-[#1a1b1e] ${
            scrolled ? 'shadow-lg shadow-black/30' : ''
          }`}
        >
          <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center h-14 -mb-px'>
              {[
                { id: 'newest', label: 'Newest', icon: Clock },
                { id: 'trending', label: 'Trending', icon: TrendingUp },
                { id: 'featured', label: 'Featured', icon: Star },
                { id: 'discussions', label: 'Discussions', icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-4 h-full border-b-2 text-sm font-medium ${
                    activeTab === id
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  <Icon className='w-4 h-4 mr-2' />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <CommunityContent />
      </div>
    </GameCommunityProvider>
  );
}
