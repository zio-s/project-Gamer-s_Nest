import { Star, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
// 이미지 에러 처리를 위한 함수
const handleImageError = (e) => {
  e.currentTarget.src = '/pattern/placeholder-game.png';
};
const GameList = ({ title, image, rating, review, type = 'default', tags }) => {
  if (type === 'featured') {
    return (
      <div className='aspect-[7/9]'>
        <div className='relative w-full h-full'>
          <Image
            src={image || '/pattern/placeholder-game.png'}
            alt={title}
            fill
            className='object-cover brightness-90 transition-transform group-hover:scale-105'
            loading='lazy'
            quality={85}
            onError={handleImageError}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent'>
            <div className='space-y-3'>
              {review >= 3600 && (
                <span className='inline-block px-2.5 py-1 bg-purple-500 text-white text-xs font-medium rounded-md'>
                  BEST PICK
                </span>
              )}
              <h3 className='text-lg font-bold text-white line-clamp-2'>{title}</h3>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                  <span className='text-white font-medium'>{rating}</span>
                </div>
                <span className='text-lg flex items-center gap-1 text-white/80'>
                  <Users className='w-4 h-4' />
                  <span className='text-sm'>{review}k</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'new') {
    return (
      <div className='aspect-[7/8]'>
        <div className='relative w-full h-full'>
          <Image
            src={image || '/pattern/placeholder-game.png'}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover transition-transform group-hover:scale-105 '
            loading='lazy'
            quality={85}
            onError={handleImageError}
          />
          <div className='absolute inset-0 flex flex-col justify-between p-4 '>
            <div className='self-end'>
              <span className='px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full'>Upcoming</span>
            </div>
            <div className='space-y-2'>
              <h3 className='text-base font-semibold text-white line-clamp-2'>{title}</h3>
              {tags && (
                <div className='flex gap-1 flex-wrap'>
                  {tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className='text-[11px] px-2 py-0.5 bg-white/20 text-white rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'popular') {
    return (
      <div className='aspect-[7/9]'>
        <div className='relative w-full h-full'>
          <Image
            src={image || '/pattern/placeholder-game.png'}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover brightness-90 transition-transform group-hover:scale-105'
            loading='lazy'
            quality={85}
            onError={handleImageError}
          />
          <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent'>
            <div className='space-y-3'>
              {review >= 3600 && (
                <span className='inline-block px-2.5 py-1 bg-purple-500 text-white text-xs font-medium rounded-md'>
                  BEST PICK
                </span>
              )}
              <h3 className='text-lg font-bold text-white line-clamp-2'>{title}</h3>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                  <span className='text-white font-medium'>{rating}</span>
                </div>
                <span className='text-lg flex items-center gap-1 text-white/80'>
                  <Users className='w-4 h-4' />
                  <span className='text-sm'>{review}k</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'free') {
    return (
      <div className='aspect-[7/9]'>
        <div className='relative w-full h-full'>
          <Image
            src={image || '/pattern/placeholder-game.png'}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover brightness-90 transition-transform group-hover:scale-105'
            loading='lazy'
            quality={85}
            onError={handleImageError}
          />
          <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent'>
            <div className='space-y-3'>
              {review >= 3600 && (
                <span className='inline-block px-2.5 py-1 bg-purple-500 text-white text-xs font-medium rounded-md'>
                  BEST PICK
                </span>
              )}
              <h3 className='text-lg font-bold text-white line-clamp-2'>{title}</h3>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <span className='text-white font-medium bg-purple-500 rounded-lg px-2'>무료</span>
                </div>
                <span className='text-lg flex items-center gap-1 text-white/80'>
                  <Users className='w-4 h-4' />
                  <span className='text-sm'>{review}k</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='aspect-[7/9]'>
      <div className='relative w-full h-full'>
        <Image
          src={image || '/pattern/placeholder-game.png'}
          alt={title}
          fill
          className='object-cover brightness-90 transition-transform group-hover:scale-105'
          loading='lazy'
          quality={85}
          onError={handleImageError}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent'>
          <div className='space-y-3'>
            {review >= 3600 && (
              <span className='inline-block px-2.5 py-1 bg-purple-500 text-white text-xs font-medium rounded-md'>
                BEST PICK
              </span>
            )}
            <h3 className='text-lg font-bold text-white line-clamp-2'>{title}</h3>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                <span className='text-white font-medium'>{rating}</span>
              </div>
              <span className='text-lg flex items-center gap-1 text-white/80'>
                <Users className='w-4 h-4' />
                <span className='text-sm'>{review}k</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
