'use client';
import { useGameCommunity } from '@/contexts/FilterContext';
import { useColorMode } from '@chakra-ui/react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const { filters, handleSearch, activeTab } = useGameCommunity();
  const { colorMode } = useColorMode();
  const placeholderText = activeTab === 'team-recruit' ? '파티 모집 글 검색...' : '게시글 검색...';

  return (
    <div className='relative'>
      <form>
        <label htmlFor='search' className='blind'>
          검색
        </label>
        <input
          id='search'
          name='search'
          type='text'
          placeholder={placeholderText}
          value={filters.searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className={`w-full rounded-lg pl-10 pr-4 py-2 transition-colors
            ${
              colorMode === 'dark'
                ? 'bg-[#1e1f24] text-gray-200 placeholder-gray-400'
                : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200'
            }
            focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
      </form>
    </div>
  );
};

export default SearchBar;
