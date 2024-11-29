// components/games/GameExplorer.jsx
'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TIME_FILTERS = [
  { label: '1시간', value: '1h' },
  { label: '6시간', value: '6h' },
  { label: '24시간', value: '24h' },
  { label: '7일', value: '7d' },
  { label: 'All time', value: 'all' },
];

const GameExplorer = ({ popularGames, trendingGames }) => {
  const [timeFilter, setTimeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [activeTab, setActiveTab] = useState('best'); // 'best' or 'top'

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      {/* 필터 영역 */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <div className='flex items-center gap-4'>
          <button className='px-4 py-2 bg-gray-800 rounded-lg'>BEST</button>
          <button className='px-4 py-2 hover:bg-gray-800 rounded-lg'>TOP</button>
        </div>

        <div className='flex gap-2 overflow-x-auto'>
          {TIME_FILTERS.map((filter) => (
            <button key={filter.value} className='px-4 py-2 rounded-lg whitespace-nowrap hover:bg-gray-800'>
              {filter.label}
            </button>
          ))}
          <button className='px-4 py-2 rounded-lg whitespace-nowrap hover:bg-gray-800'>All chains</button>
        </div>
      </div>

      {/* 컬렉션 그리드 */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {Array.from({ length: 2 }).map((_, gridIndex) => (
          <div key={gridIndex} className='bg-gray-900 rounded-lg overflow-hidden'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-gray-800'>
                  <th className='text-left p-4'>#</th>
                  <th className='text-left p-4'>콜렉션</th>
                  <th className='text-right p-4'>최저가</th>
                  <th className='text-right p-4'>거래량</th>
                </tr>
              </thead>
              <tbody>
                {popularGames.slice(gridIndex * 5, (gridIndex + 1) * 5).map((popularGames, index) => (
                  <tr key={popularGames.id} className='hover:bg-gray-800/50 transition-colors border-b border-gray-800'>
                    <td className='p-4'>{index + 1 + gridIndex * 5}</td>
                    <td className='p-4'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={popularGames.background_image}
                          alt={popularGames.name}
                          className='w-12 h-12 rounded-lg object-cover'
                        />
                        <div className='flex items-center gap-1'>
                          <span className='font-semibold'>{popularGames.name}</span>
                          <Check className='w-4 h-4 text-blue-500' />
                        </div>
                      </div>
                    </td>
                    <td className='text-right p-4'>
                      <span className='font-medium'>{popularGames.price}</span>
                    </td>
                    <td className='text-right p-4'>
                      <span className='font-medium'>{popularGames.volume}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameExplorer;
