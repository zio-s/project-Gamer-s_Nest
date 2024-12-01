// app/game/[id]/page.js
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchGameDetails } from '@/utils/rawg';
import { Image, Spinner } from '@chakra-ui/react';
import { Star } from 'lucide-react';

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
    <div className='min-h-screen'>
      {/* 히어로 섹션 */}
      <div className='relative h-[70vh]'>
        {/* 배경 이미지 */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url(${game?.background_image})`,
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50' />
        </div>

        {/* 게임 정보 */}
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold mb-4'>{game?.name}</h1>
            <div className='flex items-center gap-4 text-sm text-gray-300'>
              <div className='flex items-center'>
                <Star className='w-4 h-4 text-yellow-400 fill-current mr-1' />
                {game?.rating}
              </div>
              <span>|</span>
              <div>{game?.released}</div>
              <span>|</span>
              <div>{game?.developers?.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 내비게이션 */}
      <nav className='bg-gray-800 sticky top-16 z-40'>
        <div className='max-w-7xl mx-auto px-4'>
          <ul className='flex gap-8 text-sm'>
            <li className='py-4'>
              <a href='#overview' className='hover:text-blue-400'>
                개요
              </a>
            </li>
            <li className='py-4'>
              <a href='#media' className='hover:text-blue-400'>
                미디어
              </a>
            </li>
            <li className='py-4'>
              <a href='#editions' className='hover:text-blue-400'>
                에디션
              </a>
            </li>
            <li className='py-4'>
              <a href='#reviews' className='hover:text-blue-400'>
                리뷰
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* 여기에 각 섹션 컴포넌트들이 들어갈 예정 */}
        <div id='overview' className='mb-12'>
          <h2 className='text-2xl font-bold mb-4'>게임 개요</h2>
          <p className='text-gray-300'>{game?.description}</p>
        </div>
      </div>
    </div>
  );
}
