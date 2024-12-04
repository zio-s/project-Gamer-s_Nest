import React, { useState, memo } from 'react';
import Image from 'next/image';
import { Card } from '@chakra-ui/react';

const GameThumbnail = memo(({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className='relative flex-shrink-0'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-12 h-12 relative flex-shrink-0'>
        <Image
          src={imageError ? '/placeholder.png' : game.background_image}
          alt={game.name}
          fill
          className='rounded-lg object-cover'
          sizes='48px'
          loading='eager'
          onError={() => setImageError(true)}
          quality={75}
          blurDataURL='/placeholder.png'
          placeholder='blur'
        />
      </div>

      {isHovered && game.short_screenshots && game.short_screenshots.length > 0 && (
        <Card className='absolute z-10 left-0 top-14 p-2 w-64 bg-white shadow-lg'>
          <div className='space-y-2'>
            <div className='grid grid-cols-2 gap-2'>
              {game.short_screenshots.slice(0, 4).map((screenshot, index) => (
                <div key={screenshot.id || index} className='relative w-full pt-[66.67%]'>
                  <Image
                    src={screenshot.image}
                    alt={`${game.name} screenshot ${index + 1}`}
                    fill
                    className='rounded absolute top-0 left-0 w-full h-full object-cover'
                    sizes='150px'
                    loading='lazy'
                    quality={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
});

GameThumbnail.displayName = 'GameThumbnail';

export default GameThumbnail;
