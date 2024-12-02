'use client';

import { useGameCommunity } from '@/contexts/FilterContext';

export default function ResetButton() {
  const { resetFilters } = useGameCommunity();

  return (
    <button onClick={resetFilters} className='text-sm text-purple-400 hover:text-purple-300 transition-colors'>
      필터 초기화
    </button>
  );
}
