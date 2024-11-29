import GameGrid from '@/components/games/GameGrid';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import IntroSwiper from '@/components/layout/IntroSwiper';
import GameSlider from '@/components/games/GameSlider';
import { games, newGames } from '@/data/newGames';

const Home = () => {
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
