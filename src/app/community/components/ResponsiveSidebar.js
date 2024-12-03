'use client';
import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import FilterSection from './FilterSection';

const ResponsiveSidebar = ({ resetFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 모바일 필터 토글 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className='fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg md:hidden z-50'
      >
        <Filter className='w-5 h-5' />
      </button>

      {/* 모바일 오버레이 */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* 사이드바 */}
      <aside
        className={`fixed md:sticky md:top-36 md:w-64 h-[calc(100vh-2rem)] md:h-auto
                    bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20
                    transition-transform duration-300 z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:flex-shrink-0
                    right-0 top-0 w-80 p-4`}
      >
        <div className='flex items-center justify-between mb-4'>
          <h2 className='font-bold text-white'>필터</h2>
          <div className='flex items-center gap-2'>
            <button onClick={() => resetFilters()} className='text-gray-400 hover:text-white text-sm'>
              초기화
            </button>
            <button onClick={() => setIsOpen(false)} className='text-gray-400 hover:text-white md:hidden'>
              <X className='w-5 h-5' />
            </button>
          </div>
        </div>

        <div className='overflow-y-auto h-full md:h-auto'>
          <FilterSection />
        </div>
      </aside>
    </>
  );
};

export default ResponsiveSidebar;
