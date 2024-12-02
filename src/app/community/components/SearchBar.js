'use client';
import { useFilter } from '@/contexts/FilterContext';
import { Search } from 'lucide-react';
import debounce from 'lodash/debounce';

const SearchBar = () => {
  const { filters, updateFilters } = useFilter();

  const handleSearch = debounce((value) => {
    updateFilters('search', value);
  }, 300);

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search questions...'
        defaultValue={filters.search}
        onChange={(e) => handleSearch(e.target.value)}
        className='w-full px-4 py-2 pl-10 rounded-lg bg-[#2d2d3a] text-gray-300'
      />
      <Search className='absolute left-3 top-2.5 w-5 h-5 text-gray-500' />
    </div>
  );
};

export default SearchBar;
