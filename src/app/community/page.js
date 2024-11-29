'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import GameSlider from '@/components/games/GameSlider';
import MainLayout from '@/components/layout/MainLayout';
import { newGames } from '@/data/newGames';

export default function Community() {
  return (
    <>
      <MainLayout>
        <GameSlider title='인기 신규 출시' games={newGames} />
      </MainLayout>
    </>
  );
}
