'use client';
import { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../common/Button';
import { fetchGamesByCategory } from '@/utils/rawg';
import Link from 'next/link';

const IntroSwiper = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const popularGames = await fetchGamesByCategory('popular');
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
          clip: game.clip?.clip || null, // 클립 URL 추가
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
    <div className='relative w-full -top-[85px] h-[750px] lg:h-[800px]'>
      <div className='w-full h-full absolute inset-0 '>
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
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className='!w-full !max-w-full h-full !overflow-hidden'
        >
          {games.map((game, index) => (
            <SwiperSlide key={game.id} className='!w-full'>
              <div className='relative w-full h-full'>
                <div className='flex h-full gap-5 items-center w-full px-4 lg:px-8 xl:px-10'>
                  <div className='absolute inset-0 -z-10'>
                    {game.clip ? (
                      <video
                        key={game.id}
                        autoPlay
                        playsInline
                        muted
                        loop
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute left-0 top-0 ${
                          index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <source src={game.clip} type='video/mp4' />
                      </video>
                    ) : (
                      <div
                        className={`w-full h-full bg-cover bg-center absolute inset-0 transition-opacity duration-500 ${
                          index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${game.image})` }}
                      />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/50 via-[#1e1e1e]/20 to-[#1e1e1e]/90' />
                    {/* 아래에서 위로 가는 그라데이션 */}
                    <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 via-transparent to-[#1e1e1e]/30' />
                    {/* 전체적인 어두운 오버레이 */}
                    <div className='absolute inset-0 bg-[#1e1e1e]/20' />
                  </div>

                  <div className='relative h-full px-4 lg:px-8 xl:px-10 flex items-center'>
                    <div className='flex flex-col justify-center gap-6 z-10 w-full max-w-3xl'>
                      <div className='slide-content slide-content-delay-1'>
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
                      </div>

                      <div className='space-y-2 slide-content slide-content-delay-2 text-white'>
                        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-white'>{game.title}</h1>
                        <p className='text-base lg:text-lg xl:text-xl text-white'>{game.subtitle}</p>
                        <p className='text-base lg:text-lg xl:text-xl text-white'>
                          <span className='text-purple-500'>{game.category}</span>
                        </p>
                        <p className='text-sm lg:text-base'>{game.genres}</p>
                      </div>

                      <div className='slide-content slide-content-delay-2'>
                        <p className='max-w-lg line-clamp-3 text-sm lg:text-base'>{game.description}</p>
                      </div>

                      <div className='flex gap-4 lg:flex-row slide-content slide-content-delay-3'>
                        <Link href={`/games/${game.id}`}>
                          <Button>자세히보기</Button>
                        </Link>
                        <Button>스트리머</Button>
                      </div>
                    </div>
                  </div>
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
