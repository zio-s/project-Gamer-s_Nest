'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useColorMode } from '@chakra-ui/react';

const HeaderSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { colorMode } = useColorMode();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/games?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };
  return (
    <div className='flex items-center gap-4'>
      <div className='relative flex items-center'>
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='게임 검색...'
            className={`
              absolute right-0 top-0
              px-4 py-2 !rounded-lg
              transition-all duration-300 ease-in-out
              focus:outline-none  focus:ring-2 
            focus:ring-purple-500  
              ${isSearchOpen ? 'w-[200px] opacity-100' : 'w-0 opacity-0'}
            `}
            style={{
              backgroundColor: colorMode === 'dark' ? '#1f2937' : '#9333EA',
              color: colorMode === 'dark' ? 'white' : 'black',
            }}
          />
        </form>
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='p-2 hover:bg-gray-800 rounded-full z-10'>
          <Search className='w-5 h-5' />
        </button>
      </div>
      <button className='p-2 hover:bg-gray-800 rounded-full'>
        <ShoppingCart className='w-5 h-5' />
      </button>
      <button className='p-2 hover:bg-gray-800 rounded-full'>
        <User className='w-5 h-5' />
      </button>
    </div>
  );
};

export default HeaderSearch;
