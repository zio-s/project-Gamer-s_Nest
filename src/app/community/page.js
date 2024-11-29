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
import GameExplorer from '@/components/games/GameExplorer';

export default function Community() {
  return (
    <>
      <MainLayout>{/* <GameExplorer /> */}</MainLayout>
    </>
  );
}
