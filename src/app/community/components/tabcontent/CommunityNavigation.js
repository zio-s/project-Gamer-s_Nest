'use client';

import React from 'react';
import { MessageSquare, Camera, Users, Clock, TrendingUp } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';
import { useColorMode } from '@chakra-ui/react';

const CommunityNavigation = ({ scrolled }) => {
  const { activeTab, setActiveTab } = useGameCommunity();
  const { colorMode } = useColorMode();

  const tabs = [
    { id: 'discussions', label: '토론/공략', icon: MessageSquare },
    { id: 'screenshots', label: '스크린샷', icon: Camera },
    { id: 'team-recruit', label: '팀 모집', icon: Users },
    { id: 'newest', label: '최신글', icon: Clock },
    { id: 'trending', label: '인기글', icon: TrendingUp },
  ];

  return (
    <nav
      className={`sticky top-16 z-30 border-b ${
        colorMode === 'dark' ? 'border-[#2d2d3a] bg-[#1a1b1e]' : 'border-gray-200 bg-white'
      } ${scrolled ? `shadow-sm ${colorMode === 'dark' ? 'shadow-black/30' : 'shadow-gray-200/50'}` : ''}`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center h-14 -mb-px overflow-x-scroll md:overflow-hidden'>
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center flex-shrink-0 px-4 h-full border-b-2 text-sm font-medium 
                ${
                  activeTab === id
                    ? 'border-purple-500 text-purple-500'
                    : `border-transparent ${
                        colorMode === 'dark'
                          ? 'text-gray-400 hover:text-gray-200 hover:border-gray-600'
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                }`}
            >
              <Icon className='w-4 h-4 mr-2' />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CommunityNavigation;
