'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Heading } from '@chakra-ui/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import GameList from './GameList';

const GameSlider = ({ games, title, subtitle }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // 이미지 프리로딩
  useEffect(() => {
    if (!games) return;

    const loadImages = async () => {
      try {
        const promises = games.map((game) => {
          return new Promise((resolve, reject) => {
            if (!game.background_image) {
              resolve();
              return;
            }
            const img = new Image();
            img.src = game.background_image;
            img.onload = resolve;
            img.onerror = resolve; // 에러가 나도 계속 진행
          });
        });

        await Promise.all(promises);
        setImagesLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Image loading error:', error);
        setImagesLoaded(true); // 에러가 나도 계속 진행
        setIsLoading(false);
      }
    };

    loadImages();
  }, [games]);

  // Swiper 업데이트
  useEffect(() => {
    if (swiper && imagesLoaded) {
      swiper.update();
    }
  }, [swiper, imagesLoaded]);

  const getCardType = useCallback((subtitleValue) => {
    if (subtitleValue === 'best') return 'featured';
    if (subtitleValue === 'pick') return 'popular';
    if (subtitleValue === 'free') return 'free';
    if (subtitleValue === 'new') return 'new';
    return 'default';
  }, []);

  return (
    <div ref={ref} className='relative w-full min-h-[450px]'>
      {inView && (
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='flex items-center justify-between mb-4'>
            <Heading size={{ base: 'xl', md: 'lg' }} className='font-bold flex gap-5 items-center'>
              {title} <ChevronRight />
            </Heading>
            <div className='hidden md:flex gap-2'>
              <button
                ref={navigationPrevRef}
                className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                aria-label='Previous slide'
              >
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' className='rotate-180'>
                  <path
                    d='M9 6L15 12L9 18'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button
                ref={navigationNextRef}
                className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                aria-label='Next slide'
              >
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M9 6L15 12L9 18'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Virtual]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={setSwiper}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            virtual={{
              enabled: true,
              addSlidesAfter: 1,
              addSlidesBefore: 1,
            }}
            observer={true}
            observeParents={true}
            watchSlidesProgress={true}
            breakpoints={{
              340: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5.2,
                spaceBetween: 30,
              },
            }}
            speed={500}
            className='!overflow-hidden'
          >
            {games.map(({ id, name: title, background_image: image, rating, reviews_count: review, genres }, index) => (
              <SwiperSlide key={id} virtualIndex={index} className=''>
                <Link href={`/games/${id}`} className='block h-full group'>
                  <div className='relative rounded-xl overflow-hidden bg-gray-900 shadow-lg h-full'>
                    <div className={`transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
                      <GameList
                        id={id}
                        title={title}
                        image={image}
                        rating={rating}
                        review={review}
                        subtitle={subtitle}
                        type={getCardType(subtitle)}
                        tags={genres?.map((genre) => genre.name)}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default React.memo(GameSlider);
