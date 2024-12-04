'use client';
import { fetchGamesByCategory } from '@/utils/rawg';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import FilterDropdown from '../common/FilterDropdown';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import GameThumbnail from './GameThumbanil';
const PLATFORM_FILTERS = [
  { label: 'PC', value: ['4'] },
  { label: 'macOS', value: ['5'] },
  { label: 'PlayStation', value: ['16', '18', '4', '3'] },
  { label: 'Xbox', value: ['14', '1'] },
  { label: 'Nintendo', value: ['7'] },
  { label: 'Mobile', value: ['21', '3'] },
];
const GENRE_FILTERS = [
  { label: 'Action', value: 'action' },
  { label: 'RPG', value: 'role-playing-games-rpg' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Shooter', value: 'shooter' },
  { label: 'indie', value: 'indie' },
];
const RATING_FILTERS = [
  { label: '높은 평점순', value: '-rating' },
  { label: '많은 리뷰순', value: '-reviews_count' },
  { label: '인기도순', value: '-metacritic' },
];

const GameExplorer = ({ allGames, onTabChange }) => {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState('popular');
  const [games, setGames] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedRating, setSelectedRating] = useState('-rating');
  const [isLoading, setIsLoading] = useState(false);

  // 탭 변경시 새로운 데이터 로드
  const handleTabChange = async (tab) => {
    setIsLoading(true);
    setActiveTab(tab);
    try {
      let newGames;
      if (tab === 'popular') {
        newGames = await fetchGamesByCategory('popular');
      } else {
        newGames = await fetchGamesByCategory('trending');
      }
      setGames(newGames);
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    const initializeGames = async () => {
      setIsLoading(true);
      try {
        const popularGames = await fetchGamesByCategory('popular');
        if (popularGames && popularGames.length > 0) {
          setGames(popularGames);
        }
      } catch (error) {
        console.error('Error initializing games:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeGames();
  }, []);

  // 필터링 로직
  const getFilteredGames = () => {
    let filteredGames = [...games];

    if (selectedPlatform !== 'all') {
      filteredGames = filteredGames.filter((game) =>
        game.parent_platforms?.some((platform) => {
          const platformId = platform.platform.id.toString();
          return selectedPlatform.includes(platformId);
        })
      );
    }

    if (selectedGenre !== 'all') {
      filteredGames = filteredGames.filter((game) => game.genres?.some((genre) => genre.slug === selectedGenre));
    }

    // 정렬 적용
    if (selectedRating !== 'none') {
      filteredGames.sort((a, b) => {
        switch (selectedRating) {
          case '-rating':
            return (b.rating || 0) - (a.rating || 0);
          case '-reviews_count':
            return (b.reviews_count || 0) - (a.reviews_count || 0);
          case '-metacritic':
            return (b.metacritic || 0) - (a.metacritic || 0);
          default:
            return 0;
        }
      });
    }

    return filteredGames;
  };

  const filteredGames = getFilteredGames();

  return (
    <div className='min-h px-6'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => handleTabChange('popular')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'popular' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white '
            }`}
          >
            인기순위
          </button>
          <button
            onClick={() => handleTabChange('trending')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'trending' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white'
            }`}
          >
            베스트
          </button>
        </div>

        {/* 셀렉트 필터 */}
        <div className='flex gap-3  scrollbar-hide'>
          <FilterDropdown
            label='플랫폼'
            options={[{ label: '전체 플랫폼', value: 'all' }, ...PLATFORM_FILTERS]}
            value={selectedPlatform}
            onChange={setSelectedPlatform}
          />

          <FilterDropdown
            label='장르'
            options={[{ label: '전체 장르', value: 'all' }, ...GENRE_FILTERS]}
            value={selectedGenre}
            onChange={setSelectedGenre}
          />

          <FilterDropdown
            label='정렬'
            options={[{ label: '정렬 기준', value: 'none' }, ...RATING_FILTERS]}
            value={selectedRating}
            onChange={setSelectedRating}
          />
        </div>
      </div>

      {isLoading ? (
        <div className='text-center py-8'>잠시만 기다려주세요...</div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {Array.from({ length: 2 }).map((_, gridIndex) => (
              <div
                key={gridIndex}
                className='rounded-lg'
                style={{
                  backgroundColor: colorMode === 'dark' ? '#111827' : '#e5e7eb',
                }}
              >
                <div className='w-full'>
                  {/* 테이블 헤더 */}
                  <div className='grid grid-cols-12 gap-2 sm:gap-4 p-4 border-b border-gray-800 text-sm font-semibold'>
                    <div className='col-span-1'>#</div>
                    <div className='col-span-5 text-left'>Game</div>
                    <div className='col-span-3 text-right'>평점</div>
                    <div className='col-span-3 text-right'>플레이어</div>
                  </div>

                  {/* 테이블 바디 */}
                  <div className='divide-y divide-gray-800'>
                    {filteredGames.slice(gridIndex * 5, (gridIndex + 1) * 5).map((game, index) => (
                      <Link href={`/games/${game.id}`} key={game.id}>
                        <div className='grid grid-cols-12 gap-2 sm:gap-4 p-4 hover:bg-gray-800/50 transition-colors items-center'>
                          <div className='col-span-1 text-sm'>{index + 1 + gridIndex * 5}</div>
                          <div className='col-span-5'>
                            <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                              <GameThumbnail game={game} />
                              <div className='flex items-center gap-1 min-w-0 '>
                                <span className='text-sm font-semibold truncate'>{game.name}</span>
                              </div>
                            </div>
                          </div>
                          <div className='col-span-3 text-right text-sm'>
                            {game.metacritic ? `${game.metacritic}점` : '-'}
                          </div>
                          <div className='col-span-3 text-right text-sm'>{game.added?.toLocaleString()}명</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 결과 없음 메시지 */}
      {filteredGames.length === 0 && <div className='text-center py-8 text-gray-400'>필터링 된 결과가 없습니다</div>}
    </div>
  );
};

export default GameExplorer;
