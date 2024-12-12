import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GameGenreList = ({ games = [], title }) => {
  const formatReleaseDate = (date) => {
    if (!date) return '미정';
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <div className=' rounded-lg h-full hover:bg-gray-700/30 transition-colors'>
      <div className='p-4 border-b border-gray-700/50 flex items-center justify-between'>
        <h3 className='text-lg font-bold '>{title}</h3>
        <Link href={'/games'}>
          <span className='px-3 py-1 bg-purple-500/20 text-xs font-medium rounded-full'>더보기</span>
        </Link>
      </div>
      <div className='p-3'>
        <div className='divide-y divide-gray-700/30'>
          {games?.slice(0, 6).map(({ id, background_image: image, name: title, released }) => (
            <Link key={id} href={`/games/${id}`} className='block hover:bg-gray-700/30 rounded-lg transition-colors'>
              <div className='flex items-center p-2'>
                <div className='relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden'>
                  <Image
                    src={image || '/placeholder-game.png'}
                    alt={title}
                    fill
                    quality={85}
                    className='object-cover hover:scale-105 transition-transform duration-300'
                    sizes='(max-width: 768px) 56px, 64px'
                  />
                </div>
                <div className='ml-3 flex-1 min-w-0'>
                  <h4 className='text-sm font-medium  truncate'>{title}</h4>
                  <p className='text-xs opacity-70 mt-1'>출시일: {formatReleaseDate(released)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameGenreList;
