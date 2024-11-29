// app/game/[id]/page.js
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchGameDetails } from '@/utils/rawg';
import { Image, Spinner } from '@chakra-ui/react';

export default function GameDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadGameDetails() {
      try {
        const data = await fetchGameDetails(id);
        setGame(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadGameDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  }

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Image src={game.background_image} alt={game.name} className='w-full h-[400px] object-cover rounded-lg mb-8' />

        <h1 className='text-4xl font-bold mb-4'>{game.name}</h1>

        <div className='mb-6'>
          <p className='text-lg mb-4'>{game.description_raw}</p>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold mb-2'>Release Date:</h3>
              <p>{new Date(game.released).toLocaleDateString('ko-KR')}</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Rating:</h3>
              <p>
                {game.rating}/5 ({game.ratings_count} reviews)
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Genres:</h3>
              <p>{game.genres.map((g) => g.name).join(', ')}</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Platforms:</h3>
              <p>{game.platforms.map((p) => p.platform.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
