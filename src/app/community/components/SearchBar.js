'use client';
import { useGameCommunity } from '@/contexts/FilterContext';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const { filters, handleSearch, activeTab } = useGameCommunity();

  const placeholderText = activeTab === 'team-recruit' ? '파티 모집 글 검색...' : '게시글 검색...';

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholderText}
        value={filters.searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className='w-full bg-[#2d2d3a] text-gray-200 placeholder-gray-400 rounded-lg 
                   pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
      />
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
    </div>
  );
};

export default SearchBar;
