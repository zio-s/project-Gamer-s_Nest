import { ChevronRight } from 'lucide-react';
import React from 'react';
import GameGenreList from './GameGenreList';
import { Heading } from '@chakra-ui/react';
const GameGenre = ({ genreGames, title }) => {
  return (
    <section className='w-full min-h-[690px] '>
      <div className='flex items-center mb-6'>
        <Heading>{title}</Heading>
        <ChevronRight className='w-5 h-5 text-white/60 ml-2' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3  gap-4 md:gap-6'>
        {Object.entries(genreGames).map(([genreTitle, games]) => (
          <GameGenreList key={genreTitle} games={games} title={genreTitle} />
        ))}
      </div>
    </section>
  );
};

export default GameGenre;
