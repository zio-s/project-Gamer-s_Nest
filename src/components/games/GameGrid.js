'use client';
import React from 'react';
import GameCard from './GameCard';
import { Heading } from '@chakra-ui/react';

const GameGrid = ({ games, title }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Heading>{title}</Heading>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-6'>
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
