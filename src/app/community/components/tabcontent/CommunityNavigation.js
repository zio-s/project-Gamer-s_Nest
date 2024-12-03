'use client';

import React from 'react';
import { MessageSquare, Camera, Users, Clock, TrendingUp } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';

const CommunityNavigation = ({ scrolled }) => {
  const { activeTab, setActiveTab } = useGameCommunity();

  const tabs = [
    { id: 'discussions', label: '토론/공략', icon: MessageSquare },
    { id: 'screenshots', label: '스크린샷', icon: Camera },
    { id: 'team-recruit', label: '팀 모집', icon: Users },
    { id: 'newest', label: '최신글', icon: Clock },
    { id: 'trending', label: '인기글', icon: TrendingUp },
  ];

  return (
    <nav
      className={`sticky top-16 z-30 border-b border-[#2d2d3a] bg-[#1a1b1e] ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center h-14 -mb-px'>
          {tabs.map(({ id, label, icon: Icon }) => (
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
  );
};

export default CommunityNavigation;
