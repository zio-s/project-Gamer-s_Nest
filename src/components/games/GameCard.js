// import Image from 'next/image';
'use client';
import { Image } from '@chakra-ui/react';
import React from 'react';

const GameCard = ({ title, price, imageUrl }) => {
  return (
    <div className='bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden'>
      <Image
        src={imageUrl || 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/whatsnew/update-21@2x.jpg'}
        alt={title}
        width={400}
        height={225}
        className='w-full object-cover'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
        <p className='text-gray-400 mb-4'>${price}</p>
        <button className='w-full py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
