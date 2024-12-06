// import Image from 'next/image';
'use client';
import { Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

const GameCard = ({ id, name: title, released, background_image: image, rating, platforms }) => {
  const { colorMode } = useColorMode();
  const formattedDate = new Date(released).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Link
      href={`/games/${id}`}
      className=' group bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden '
      style={{
        backgroundColor: colorMode === 'dark' ? '' : '#e5e7eb',
      }}
    >
      <div className='relative aspect-video'>
        <Image
          src={image || '/pattern/placeholder-game.png'}
          alt={title}
          className='w-full h-full object-cover transition-transform hover:scale-105'
        />
        {rating && (
          <div className='absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1'>
            {/* <FaStar className='text-yellow-400' /> */}
            <span className='text-white'>{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2 line-clamp-2'>{title}</h2>
        <p
          className='mb-2 text-sm'
          style={{
            color: colorMode === 'dark' ? 'gray' : '#777',
          }}
        >
          {formattedDate}
        </p>

        <div className='flex flex-wrap gap-2'>
          {platforms?.map(({ platform }) => (
            <span key={platform.id} className='text-xs px-2 py-1 rounded-full bg-gray-700 text-white'>
              {platform.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
