'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Button from '../common/Button';
import { fetchGamesByCategory } from '@/utils/rawg';

const IntroSwiper = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // 인기 게임들을 가져옵니다
        const popularGames = await fetchGamesByCategory('popular');
        // 필요한 데이터만 추출하여 가공
        const processedGames = popularGames.slice(0, 5).map((game) => ({
          id: game.id,
          title: game.name,
          subtitle: game.released ? new Date(game.released).getFullYear() : '',
          category: game.parent_platforms?.map((p) => p.platform.name).join(' ') || '',
          description: game.description_raw || '',
          rating: Math.round(game.rating || 0),
          image: game.background_image,
          metacritic: game.metacritic,
          genres: game.genres?.map((g) => g.name).join(', '),
        }));
        setGames(processedGames);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return <div className='h-[650px] flex items-center justify-center'>Loading...</div>;
  }

  return (
    <div className='h-[650px] md:h-[500] px-6'>
      <div className='absolute pr-6'>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={'auto'}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
            renderBullet: (index, className) => {
              return `<div class="${className} pagination-bullet">
          <div class="bullet-content">
            <svg viewBox="0 0 70 70">
              <circle class="progress-ring" cx="35" cy="35" r="32" />
              <circle class="progress-ring-fill" cx="35" cy="35" r="32" />
            </svg>
            <span>${index + 1}</span>
          </div>
        </div>`;
            },
          }}
          className='!w-full h-[650px] md:h-[500px] backdrop-filter-none'
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-5'>
                <div className='flex flex-col justify-center space-y-6'>
                  <div className='flex items-center gap-4'>
                    <div className='flex gap-1'>
                      {[...Array(5)].map((_, i) => (
                        <span
                          aria-hidden='true'
                          key={i}
                          className={i < game.rating ? 'text-yellow-400' : 'text-gray-400'}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    {game.metacritic && (
                      <span className='bg-green-600 px-2 py-1 rounded text-sm'>{game.metacritic}</span>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <h1 className='text-4xl font-bold'>{game.title}</h1>
                    <p className='text-base lg:text-xl'>{game.subtitle}</p>
                    <p className='text-base lg:text-xl'>
                      <span className='text-purple-500'>{game.category}</span>
                    </p>
                    <p className='text-sm text-gray-400'>{game.genres}</p>
                  </div>

                  {/* 설명 */}
                  <p className='text-gray-400 max-w-lg line-clamp-3'>{game.description}</p>

                  {/* 버튼 */}
                  <div className='flex gap-4 lg:flex-row'>
                    <Button href={`/games/${game.id}`}>자세히보기</Button>
                    <Button>스트리머</Button>
                  </div>
                </div>

                <div className='relative flex aspect-auto object-top'>
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={1400}
                    height={700}
                    className='rounded-lg object-cover'
                    priority={true}
                    quality={90}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IntroSwiper;
