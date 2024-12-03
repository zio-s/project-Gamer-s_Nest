import React from 'react';
import FilterSection from '../FilterSection';
import ResetButton from '../ResetButton';
import SearchBar from '../SearchBar';
import { useGameCommunity } from '@/contexts/FilterContext';

const NewestContent = () => {
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
          <div className='space-y-4 p-4'>
            <div className='bg-[#2d2d3a] rounded-lg p-4'>
              <p className='text-gray-200'>최신 게시물 목록</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestContent;
