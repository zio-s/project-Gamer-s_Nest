// app/game/[id]/page.js
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchGameDetails } from '@/utils/rawg';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { Star } from 'lucide-react';
import GameDetailContent from './components/GameDetailContent';
import { OverviewSection } from './components/OverviewSection';
import { MediaSection } from './components/MediaSection';
import { EditionsSection } from './components/EditionsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SystemRequirements } from './components/SystemRequirements';
import DetailNav from './components/DetailNav';

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
    <Box minH='100vh'>
      {/* 히어로 섹션 */}
      <Box position='relative' h='calc(70vh - 4rem)'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url(${game?.background_image})`,
            marginTop: '-4rem',
            height: 'calc(100% + 4rem)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50' />
        </div>
        {/* 게임 정보 */}
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl text-white font-bold mb-4'>{game?.name}</h1>
            <div className='flex items-center gap-4 text-sm text-gray-300'>
              <div className='flex items-center'>
                <Star className='w-4 h-4 text-yellow-400 fill-current mr-1' />
                {game?.rating}
              </div>
              <span>|</span>
              <div>{game?.released}</div>
              <span>|</span>
              {game?.developers?.map((developer) => developer.name).join(', ')}
            </div>
          </div>
        </div>
      </Box>

      <DetailNav />

      {/* 메인 콘텐츠 */}

      <div className='max-w-7xl mx-auto px-4 pt-20  flex flex-col gap-20 pb-20'>
        <div>
          <OverviewSection game={game} />
        </div>
        <div>
          <MediaSection game={game} />
        </div>
        <div>
          <ReviewsSection game={game} />
        </div>
        <div>
          <EditionsSection game={game} />
        </div>
        <div>
          <SystemRequirements game={game} />
        </div>
      </div>
    </Box>
  );
}
