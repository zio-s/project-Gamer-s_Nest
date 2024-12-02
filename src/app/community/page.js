'use client';
import React, { useState } from 'react';
import FilterSection from './components/FilterSection';

import QuestionList from './components/QuestionList';
import { Clock, MessageSquare, Search, Star, TrendingUp } from 'lucide-react';
import { FilterProvider, useFilter } from '@/contexts/FilterContext';
import SearchBar from './components/SearchBar';
const CommunityContent = () => {
  const { updateFilters } = useFilter(); // useFilter 훅을 통해 updateFilters 가져오기

  return (
    <div className='bg-[#1a1b1e] min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <SearchBar />
        <div className='flex gap-6 mt-6'>
          <aside className='w-64 flex-shrink-0'>
            <div className='sticky top-20 bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-bold text-white'>Filters</h2>
                <button
                  onClick={() => updateFilters('reset')}
                  className='text-sm text-purple-400 hover:text-purple-300'
                >
                  Reset
                </button>
              </div>
              <FilterSection />
            </div>
          </aside>
          <QuestionList />
        </div>
      </div>
    </div>
  );
};
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
        className={`sticky top-0 z-30 border-b border-[#2d2d3a] bg-[#1a1b1e] ${
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

      <FilterProvider>
        {/* <div className='bg-[#1a1b1e] min-h-screen'>
          <div className='max-w-7xl mx-auto px-4 py-6'>
            <SearchBar />
            <div className='flex gap-6 mt-6'>
              <aside className='w-64 flex-shrink-0'>
                <div className='sticky top-20 bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <h2 className='font-bold text-white'>Filters</h2>
                    <button
                      onClick={() => updateFilters('reset')}
                      className='text-sm text-purple-400 hover:text-purple-300'
                    >
                      Reset
                    </button>
                  </div>
                  <FilterSection />
                </div>
              </aside>
              <QuestionList />
            </div>
          </div>
        </div> */}
        <CommunityContent />
      </FilterProvider>
    </div>
  );
}
