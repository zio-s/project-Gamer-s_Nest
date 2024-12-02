'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Heading } from '@chakra-ui/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const GameSlider = ({ games, title, subtitle }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className='relative w-full min-h-[500px] '>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='flex items-center justify-between mb-4 px-6'>
          <Heading className=' font-bold flex gap-5 items-center'>
            {title} <ChevronRight />
          </Heading>
          <div className='flex gap-2'>
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
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          spaceBetween={0}
          slidesPerView='auto'
          className='!overflow-hidden'
        >
          {games.map(({ id, name: title, released, background_image: image, rating, platforms }) => (
            <SwiperSlide key={id} className='!w-[280px] '>
              <Link href={`/games/${id}`} className=' group bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden '>
                <div className='relative group cursor-pointer flex flex-col px-6 '>
                  {/* Game Image */}
                  <div className='relative aspect-[4/5] rounded-lg overflow-hidden mb-3 '>
                    <Image
                      src={image || '/placeholder-game.jpg'}
                      alt={title}
                      fill
                      sizes='100'
                      className='object-cover hover:scale-105 transition-all duration-100'
                    />
                    {/* {game.playBadge && (
                      <div className='absolute bottom-3 left-3'>
                        <Image src={game.playBadge} alt='Play' width={24} height={24} />
                      </div>
                    )} */}
                  </div>

                  {/* Game Info */}
                  <div>
                    <div className='text-sm text-gray-500 mb-1'>{subtitle}</div>
                    <h3 className='font-medium mb-2'>{title}</h3>

                    {/* <div className='flex items-center space-x-2'>
                      {game.discountRate && <span className='text-cyan-500'>-{game.discountRate}%</span>}
                      {game.originalPrice && (
                        <span className='text-gray-500 line-through'>₩{game.originalPrice.toLocaleString()}</span>
                      )}
                      <span className='font-medium'>₩{game.price.toLocaleString()}</span>
                    </div> */}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// 사용 예시:

export default GameSlider;
