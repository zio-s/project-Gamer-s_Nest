'use client';
import { useGameCommunity } from '@/contexts/FilterContext';
import React from 'react';
import SearchBar from '../SearchBar';
import FilterSection from '../FilterSection';
import QuestionList from '../QuestionList';
import ResetButton from '../ResetButton';

const DiscussionsContent = () => {
  const { resetFilters } = useGameCommunity();

  return (
    <div className='bg-[#1a1b1e] min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <SearchBar />
        <div className='flex gap-6 mt-6'>
          <aside className='w-64 flex-shrink-0'>
            <div className='sticky top-36 bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-bold text-white'>Filters</h2>
                <ResetButton resetFilters={resetFilters} />
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

export default DiscussionsContent;
