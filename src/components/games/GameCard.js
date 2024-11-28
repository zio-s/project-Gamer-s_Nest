// import Image from 'next/image';
'use client';
import { Image } from '@chakra-ui/react';
import React from 'react';
import Button from '../common/Button';

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

        <div className='flex gap-3'>
          <Button>커뮤니티</Button>
          <Button>스트리밍</Button>
          <Button>즐겨찾기</Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
