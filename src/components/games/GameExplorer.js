'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';

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
  const [activeTab, setActiveTab] = useState('best');
  const displayedGames = activeTab === 'best' ? popularGames : trendingGames;

  return (
    <div className='min-h   p-6'>
      {/* 필터 영역 */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setActiveTab('best')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'best' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
          >
            BEST
          </button>
          <button
            onClick={() => setActiveTab('top')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'top' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
          >
            TOP
          </button>
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

      {/* 게임 목록 */}
      <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
        {Array.from({ length: 2 }).map((_, gridIndex) => (
          <div key={gridIndex} className='bg-gray-900 rounded-lg max-w-[2569px]'>
            <div className='w-full'>
              {/* 테이블 헤더 */}
              <div className='grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-sm font-semibold'>
                <div className='col-span-1'>#</div>
                <div className='col-span-7 text-left'>콜렉션</div>
                <div className='col-span-2 text-right'>최저가</div>
                <div className='col-span-2 text-right'>거래량</div>
              </div>

              {/* 테이블 바디 */}
              <div className='divide-y divide-gray-800'>
                {displayedGames.slice(gridIndex * 5, (gridIndex + 1) * 5).map((game, index) => (
                  <div
                    key={game.id}
                    className='grid grid-cols-12 gap-4 p-4 hover:bg-gray-800/50 transition-colors items-center'
                  >
                    <div className='col-span-1 text-sm'>{index + 1 + gridIndex * 5}</div>
                    <div className='col-span-7'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={game.background_image}
                          alt={game.name}
                          className='w-12 h-12 rounded-lg object-cover flex-shrink-0'
                        />
                        <div className='flex items-center gap-1 min-w-0'>
                          <span className='text-sm font-semibold truncate'>{game.name}</span>
                          <Check className='w-4 h-4 text-blue-500 flex-shrink-0' />
                        </div>
                      </div>
                    </div>
                    <div className='col-span-2 text-right text-sm'>
                      {game.price ? `${game.price.toLocaleString()} ETH` : 'Free'}
                    </div>
                    <div className='col-span-2 text-right text-sm'>
                      {(game.ratings_count || 0).toLocaleString()} ETH
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameExplorer;
