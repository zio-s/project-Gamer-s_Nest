'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Heading } from '@chakra-ui/react';
import { ChevronRight, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';
import GameList from './GameList';

const GameSlider = ({ games, title, subtitle }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className='relative w-full min-h-[450px] '>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='flex items-center justify-between mb-4'>
          <Heading size={{ base: 'xl', md: 'lg' }} className=' font-bold flex gap-5 items-center '>
            {title} <ChevronRight />
          </Heading>
          <div className='hidden md:flex gap-2'>
            <button
              ref={navigationPrevRef}
              className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' className='rotate-180'>
                <path d='M9 6L15 12L9 18' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
            <button
              ref={navigationNextRef}
              className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                <path d='M9 6L15 12L9 18' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          spaceBetween={30}
          slidesPerView='auto'
          className='!overflow-hidden'
        >
          {games.map(({ id, name: title, background_image: image, rating, reviews_count: review, genres }) => {
            const getCardType = () => {
              // 평점과 리뷰 수를 조합
              if (subtitle === 'best') return 'featured';
              if (subtitle === 'pick') return 'popular';
              if (subtitle === 'free') return 'free';
              if (subtitle === 'new') return 'new';
              return 'default';
            };

            return (
              <SwiperSlide key={id} className='!w-[280px]'>
                <Link href={`/games/${id}`} className='block h-full group '>
                  <div className='relative rounded-xl overflow-hidden bg-gray-900 shadow-lg h-full'>
                    <GameList
                      id={id}
                      title={title}
                      image={image}
                      rating={rating}
                      review={review}
                      subtitle={subtitle}
                      type={getCardType()}
                      tags={genres?.map((genre) => genre.name)}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default GameSlider;
