'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Heading } from '@chakra-ui/react';
import { ArrowRight, ChevronRight, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

const GameSlider = ({ games, title, subtitle }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  // 이미지 에러 처리를 위한 함수
  const handleImageError = (e) => {
    e.currentTarget.src = '/placeholder-game.jpg';
  };
  console.log(games);
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
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          spaceBetween={0}
          slidesPerView='auto'
          className='!overflow-hidden'
        >
          {games.map(({ id, name: title, background_image: image, rating, reviews_count: review }) => (
            <SwiperSlide key={id} className='!w-[280px] '>
              <Link href={`/games/${id}`} className='group bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden'>
                <div className='relative group cursor-pointer flex flex-col px-6'>
                  <div className='relative aspect-[4/5] rounded-lg overflow-hidden mb-3'>
                    <Image
                      src={image || '/placeholder-game.jpg'}
                      alt={title}
                      fill
                      sizes='(max-width: 280px) 100vw, 280px'
                      className='object-cover transition-all duration-300 group-hover:scale-105'
                      loading='lazy'
                      quality={75}
                      onError={handleImageError}
                      blurDataURL='/placeholder-game.jpg'
                      placeholder='blur'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t  from-primary/90 via-primary/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                      <div className='flex items-center justify-center space-x-2 p-4 bg-gradient-to-t from-primary/80 to-primary/40 dark:from-primary-dark/80 dark:to-primary-dark/40 hover:from-primary dark:hover:from-primary-dark '>
                        <span className='text-sm font-medium text-white'>상세보기</span>
                        <ArrowRight className='w-4 h-4 text-white' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='text-sm text-gray-500 mb-1'>{subtitle}</div>
                    <h3 className='font-medium  line-clamp-2'>{title}</h3>
                    <div className='flex gap-4'>
                      <span className='flex gap-1.5 text-sm items-center'>
                        <Star className='text-yellow-300 fill-current w-3' />
                        {rating}
                      </span>
                      <span className='flex gap-1.5'>
                        <MessageCircle className='w-3' />
                        {review}
                      </span>
                    </div>
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

export default GameSlider;
