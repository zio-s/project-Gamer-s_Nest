'use client';
import { useState, useEffect } from 'react';
import { fetchGames } from '@/utils/rawg';

import { Spinner } from '@chakra-ui/react';
import GameCard from '@/components/games/GameCard';

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function loadGames(pageNum = 1) {
    try {
      setIsLoading(true);
      const data = await fetchGames(pageNum);
      if (pageNum === 1) {
        setGames(data.results);
      } else {
        setGames((prev) => [...prev, ...data.results]);
      }
      setHasMore(data.next !== null);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadGames();
  }, []);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadGames(nextPage);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Popular Games</h1>

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

      {hasMore && !isLoading && (
        <button
          onClick={loadMore}
          className='mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg mx-auto block'
        >
          Load More
        </button>
      )}
    </div>
  );
}
