'use client';
import GameGrid from '@/components/games/GameGrid';
import MainLayout from '@/components/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import IntroSwiper from '@/components/layout/IntroSwiper';
import GameSlider from '@/components/games/GameSlider';
import { fetchGames, fetchGamesByCategory } from '@/utils/rawg';
import { newGames } from '@/data/newGames';
import GameExplorer from '@/components/games/GameExplorer';

const Home = () => {
  // const [games, setGames] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const loadGames = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchGames();
  //       console.log('Received data:', data); // 디버깅용

  //       if (data && data.results) {
  //         setGames(data.results);
  //       }
  //     } catch (err) {
  //       console.error('Failed to load games:', err);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadGames();
  // }, []);
  const [popularGames, setPopularGames] = useState([]);
  const [freeGames, setFreeGames] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        console.log(all);
      } catch (error) {
        console.error('Error loading games:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadGames();
  }, []);
  return (
    <MainLayout headerType=''>
      <IntroSwiper />
      {isLoading ? (
        <div className='flex justify-center items-center min-h-screen'>
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <GameExplorer popularGames={popularGames} trendingGames={trendingGames} />
          <GameGrid games={allGames} title={'이달의 Best'} />
          <GameSlider title='신규 게임' subtitle='New' games={newGames} />
          <GameSlider title='핫한 게임' subtitle='베스트 게임' games={popularGames} />
          <GameGrid games={trendingGames} title={'트렌디 게임'} />
          <GameSlider title='출시 예정' subtitle='Coming Soon' games={upcomingGames} />
          <GameGrid games={freeGames} title={'무료 게임'} />
        </>
      )}
    </MainLayout>
  );
};

export default Home;
