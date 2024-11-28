'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import GameSlider from '@/components/games/GameSlider';
import MainLayout from '@/components/layout/MainLayout';

export default function Community() {
  const games = [
    {
      id: 1,
      title: 'EA SPORTS FC™ 25 Standard Edition',
      imageUrl: '/pattern/main/swiper-1.jpg',
      playBadge: '/path-to-play-badge.png',
      price: 80000,
      originalPrice: null,
      discountRate: null,
    },
    {
      id: 2,
      title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
      imageUrl: '/pattern/main/swiper-2.jpg',
      playBadge: null,
      price: 64900,
      originalPrice: null,
      discountRate: null,
    },
    {
      id: 3,
      title: 'God of War Ragnarök',
      imageUrl: '/pattern/main/swiper-1.jpg',
      playBadge: null,
      price: 62800,
      originalPrice: null,
      discountRate: null,
    },
    {
      id: 4,
      title: 'God of War Ragnarök',
      imageUrl: '/pattern/main/swiper-2.jpg',
      playBadge: null,
      price: 62800,
      originalPrice: null,
      discountRate: null,
    },
    {
      id: 5,
      title: 'God of War Ragnarök',
      imageUrl: '/pattern/main/swiper-1.jpg',
      playBadge: null,
      price: 62800,
      originalPrice: null,
      discountRate: null,
    },
    // ... 더 많은 게임 데이터
  ];
  return (
    <>
      <MainLayout>
        <GameSlider title='인기 신규 출시' games={games} />
      </MainLayout>
    </>
  );
}
