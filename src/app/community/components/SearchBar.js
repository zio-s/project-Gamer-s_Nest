'use client';
import { useGameCommunity } from '@/contexts/FilterContext';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const { updateFilters } = useGameCommunity();

  const handleSearch = (e) => {
    updateFilters('searchQuery', e.target.value);
  };

  return (
    <div className='relative'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
      <input
        type='text'
        placeholder='Search discussions...'
        onChange={handleSearch}
        className='w-full pl-10 pr-4 py-2 bg-[#2d2d3a] border border-gray-600 rounded-lg
                 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500'
      />
    </div>
  );
}
