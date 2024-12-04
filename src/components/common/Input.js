'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useColorMode } from '@chakra-ui/react';

const SearchInput = ({ className = '', ...props }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/games?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className='w-full'>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='게임 검색...'
        style={{
          backgroundColor: colorMode === 'dark' ? '#1f2937' : '#9333ea',
          color: colorMode === 'dark' ? 'white' : 'black',
        }}
        className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
        {...props}
      />
    </form>
  );
};

export default SearchInput;
