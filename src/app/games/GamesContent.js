'use client';

import { useState, useEffect } from 'react';
import { searchGames } from '@/utils/rawg';
import { Spinner } from '@chakra-ui/react';
import GameCard from '@/components/games/GameCard';
import { useSearchParams } from 'next/navigation';

export default function GamesContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [games, setGames] = useState([]); // 빈 배열로 초기화
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  async function loadGames(pageNum = 1) {
    try {
      setIsLoading(true);
      setError(null);
      const data = await searchGames({
        page: pageNum,
        pageSize: 20,
        searchTerm: search || '',
      });

      if (pageNum === 1) {
        setGames(data.results || []); // 결과가 없을 경우 빈 배열
      } else {
        setGames((prev) => [...prev, ...(data.results || [])]);
      }
      setHasMore(data.next !== null);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to load games');
      setGames([]); // 에러 시 빈 배열로 초기화
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setPage(1);
    loadGames(1);
  }, [search]);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadGames(nextPage);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>{search ? `Search Results: ${search}` : 'Popular Games'}</h1>

      {error && <div className='text-red-500 text-center mb-4'>{error}</div>}

      {isLoading && games.length === 0 ? (
        <div className='flex justify-center my-8'>
          <Spinner size='xl' />
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {games.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                background_image={game.background_image}
                rating={game.rating}
                platforms={game.platforms}
              />
            ))}
          </div>

          {isLoading && (
            <div className='flex justify-center my-8'>
              <Spinner size='xl' />
            </div>
          )}

          {games.length === 0 && !isLoading && <div className='text-center my-8'>No games found</div>}

          {hasMore && !isLoading && games.length > 0 && (
            <button
              onClick={loadMore}
              className='mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg mx-auto block'
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
}
