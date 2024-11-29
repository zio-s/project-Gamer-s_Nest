// import Image from 'next/image';
'use client';
import { Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

const GameCard = ({ title, price, image }) => {
  const { colorMode } = useColorMode();
  return (
    <Link
      href={''}
      className=' bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden'
      style={{
        backgroundColor: colorMode === 'dark' ? '' : '#e5e7eb',
      }}
    >
      <Image
        src={image || 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/whatsnew/update-21@2x.jpg'}
        alt={title}
        width={360}
        height={480}
        className='w-auto object-cover h-auto'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2 line-clamp-2'>{title}</h2>
        <p
          className=' mb-4'
          style={{
            color: colorMode === 'dark' ? 'gray' : '#777',
          }}
        >
          ₩{price}
        </p>

        <div className='flex gap-3'></div>
      </div>
    </Link>
  );
};

export default GameCard;
