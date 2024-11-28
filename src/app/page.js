import GameGrid from '@/components/games/GameGrid';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import Community from './community/page';
import IntroSwiper from '@/components/layout/IntroSwiper';
import GameSlider from '@/components/games/GameSlider';

const Home = () => {
  const games = [
    { id: 1, title: 'Game 1', price: 59.99, image: '/api/placeholder/400/225' },
    { id: 2, title: 'Game 2', price: 49.99, image: '/api/placeholder/400/225' },
    { id: 3, title: 'Game 3', price: 39.99, image: '/api/placeholder/400/225' },
    { id: 4, title: 'Game 4', price: 29.99, image: '/api/placeholder/400/225' },
    { id: 5, title: 'Game 5', price: 39.99, image: '/api/placeholder/400/225' },
    { id: 6, title: 'Game 6', price: 19.99, image: '/api/placeholder/400/225' },
    { id: 7, title: 'Game 7', price: 29.99, image: '/api/placeholder/400/225' },
    { id: 8, title: 'Game 8', price: 39.99, image: '/api/placeholder/400/225' },
    { id: 9, title: 'Game 9', price: 19.99, image: '/api/placeholder/400/225' },
  ];
  const newGames = [
    {
      id: 1,
      title: 'EA SPORTS FC™ 25 Standard Edition',
      imageUrl: '/pattern/main/swiper-1.jpg',
      // playBadge: '/path-to-play-badge.png',
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
    <MainLayout headerType=''>
      <IntroSwiper />
      {/* <Community /> */}
      <GameGrid games={games} title={'게임'} />
      <GameSlider title='인기 신규 출시' games={newGames} />
    </MainLayout>
  );
};

export default Home;
