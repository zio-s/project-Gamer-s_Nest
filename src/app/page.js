'use client';
import GameGrid from '@/components/games/GameGrid';
import MainLayout from '@/components/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import IntroSwiper from '@/components/layout/IntroSwiper';
import GameSlider from '@/components/games/GameSlider';
import { fetchGamesByCategory } from '@/utils/rawg';
import GameExplorer from '@/components/games/GameExplorer';

const Home = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [freeGames, setFreeGames] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGames() {
      try {
        setIsLoading(true);
        const [all, newG, upcoming, popular, free, trending] = await Promise.all([
          fetchGamesByCategory('all'),
          fetchGamesByCategory('new'),
          fetchGamesByCategory('upcoming'),
          fetchGamesByCategory('popular'),
          fetchGamesByCategory('free'),
          fetchGamesByCategory('trending'),
        ]);
        setAllGames(all || []);
        setPopularGames(popular || []);
        setFreeGames(free || []);
        setTrendingGames(trending || []);
        setNewGames(newG || []);
        setUpcomingGames(upcoming || []);
      } catch (error) {
        console.error('Error loading games:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadGames();
  }, []);
  // 추가 데이터 로드
  const handleLoadMore = async (newSize) => {
    try {
      const additionalGames = await fetchGamesByCategory('all', newSize);
      setAllGames((prev) => {
        const combinedGames = [...prev, ...additionalGames];
        // 중복 제거
        return Array.from(new Set(combinedGames.map((game) => game.id))).map((id) =>
          combinedGames.find((game) => game.id === id)
        );
      });
    } catch (error) {
      console.error('Error loading more games:', error);
    }
  };
  return (
    <MainLayout headerType=''>
      <IntroSwiper />
      {isLoading ? (
        <div className='flex justify-center items-center min-h-screen'>
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <GameExplorer
            popularGames={popularGames}
            trendingGames={trendingGames}
            allGames={allGames}
            onLoadMore={handleLoadMore}
          />
          <GameSlider games={allGames} title={'이달의 Best'} />
          <GameSlider title='신규 게임' subtitle='New' games={newGames} />
          <GameSlider title='핫한 게임' subtitle='베스트 게임' games={popularGames} />
          <GameSlider games={trendingGames} title={'트렌디 게임'} />
          <GameSlider title='출시 예정' subtitle='Coming Soon' games={upcomingGames} />
          <GameSlider games={freeGames} title={'무료 게임'} />
        </>
      )}
    </MainLayout>
  );
};

export default Home;
