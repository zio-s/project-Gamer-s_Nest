'use client';

import MainLayout from '@/components/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import IntroSwiper from '@/components/layout/IntroSwiper';
import GameSlider from '@/components/games/GameSlider';
import { fetchGamesByCategory } from '@/utils/rawg';
import GameExplorer from '@/components/games/GameExplorer';
import GameGenre from '@/components/games/GameGenre';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const Home = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [freeGames, setFreeGames] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [rpgGames, setRpgGames] = useState([]);
  const [actionGames, setActionGames] = useState([]);
  const [indieGames, setIndieGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [introGames, setIntroGames] = useState([]);

  const processGamesForIntro = (games) => {
    return games.slice(0, 5).map((game) => ({
      id: game.id,
      title: game.name,
      subtitle: game.released ? new Date(game.released).getFullYear() : '',
      category: game.parent_platforms?.map((p) => p.platform.name).join(' ') || '',
      description: game.description_raw || '',
      rating: Math.round(game.rating || 0),
      image: game.background_image,
      metacritic: game.metacritic,
      genres: game.genres?.map((g) => g.name).join(', '),
      clip: game.clip?.clip || null,
    }));
  };
  useEffect(() => {
    async function loadGames() {
      try {
        setIsLoading(true);
        const [all, newG, upcoming, popular, free, trending, rpg, action, indie] = await Promise.all([
          fetchGamesByCategory('all'),
          fetchGamesByCategory('new'),
          fetchGamesByCategory('upcoming'),
          fetchGamesByCategory('popular'),
          fetchGamesByCategory('free'),
          fetchGamesByCategory('trending'),
          fetchGamesByCategory('rpg'),
          fetchGamesByCategory('action'),
          fetchGamesByCategory('indie'),
        ]);
        const processedIntroGames = processGamesForIntro(popular);
        setIntroGames(processedIntroGames);
        setAllGames(all || []);
        setPopularGames(popular || []);
        setFreeGames(free || []);
        setTrendingGames(trending || []);
        setNewGames(newG || []);
        setUpcomingGames(upcoming || []);
        setRpgGames(rpg || []);
        setActionGames(action || []);
        setIndieGames(indie || []);
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
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <MainLayout headerType='' showAside={true}>
      <IntroSwiper games={introGames} />
      <div className='px-4 md:px-6 lg:px-10 '>
        {isLoading ? (
          <div className='flex justify-center items-center min-h-screen'>
            <div>Loading...</div>
          </div>
        ) : (
          <div className=' flex flex-col gap-16'>
            <GameExplorer
              popularGames={popularGames}
              trendingGames={trendingGames}
              allGames={allGames}
              onLoadMore={handleLoadMore}
            />
            <GameSlider games={allGames} title={'플레이 많이 되고 있는'} subtitle={'best'} />
            <GameSlider games={popularGames} title='추천 게임' subtitle='pick' />
            {/* <GameSlider games={rpgGames} title={'장르별 게임'} subtitle={'genre'} /> */}
            <GameGenre
              genreGames={{
                '액션 게임': actionGames,
                '인디 게임': indieGames,
                'RPG 게임': rpgGames,
              }}
              title='장르별 게임'
            />
            <GameSlider games={upcomingGames} title='출시 예정' subtitle='new' />
            <GameSlider games={freeGames} title={'무료 게임'} subtitle={'free'} />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
