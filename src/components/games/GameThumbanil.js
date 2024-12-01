import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@chakra-ui/react';

const GameThumbnail = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={game.background_image}
        alt={game.name}
        width={500}
        height={500}
        className='w-12 h-12 rounded-lg object-cover flex-shrink-0'
      />

      {isHovered && game.short_screenshots && game.short_screenshots.length > 0 && (
        <Card className='absolute z-10 left-0 top-14 p-2 w-64 bg-white shadow-lg'>
          <div className='space-y-2'>
            <div className='grid grid-cols-2 gap-2'>
              {game.short_screenshots?.slice(0, 4).map((screenshot, index) => (
                <Image
                  key={screenshot.id || index}
                  src={screenshot.image}
                  alt={`${game.name} screenshot ${index + 1}`}
                  width={300}
                  height={200}
                  className='rounded w-full h-24 object-cover'
                />
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default GameThumbnail;
