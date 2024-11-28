import GameGrid from '@/components/games/GameGrid';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import Community from './community/page';
import IntroSwiper from '@/components/layout/IntroSwiper';

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

  return (
    <MainLayout headerType=''>
      {/* <Community /> */}
      <div className='h-[600px]'>
        <IntroSwiper />
      </div>
      <GameGrid games={games} title={'게임'} />
      <GameGrid games={games} title={'다른게임'} />
    </MainLayout>
  );
};

export default Home;
