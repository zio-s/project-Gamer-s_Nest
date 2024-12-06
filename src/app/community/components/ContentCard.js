'use client';
import Image from 'next/image';

const ContentCard = ({
  image,
  title,
  preview,
  tags,
  createdAt,
  votes,
  defaultImage = 'https://via.placeholder.com/500',
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  imageSize = 'medium', // 'small' | 'medium' | 'large'
  children,
}) => {
  const imageSizes = {
    small: 'w-24 h-24 md:w-28 md:h-28',
    medium: 'w-32 h-32 md:w-36 md:h-36',
    large: 'w-40 h-40 md:w-44 md:h-44',
  };

  return (
    <div className='bg-[#2d2d3a] rounded-lg shadow-lg p-4 transition-all hover:shadow-xl'>
      <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-col sm:flex-row'} gap-4`}>
        <div className={`relative shrink-0 ${imageSizes[imageSize]} mx-auto sm:mx-0`}>
          <Image
            src={image || defaultImage}
            alt={title || 'Content image'}
            fill
            sizes='200px'
            className='object-cover rounded-lg'
            onError={(e) => {
              e.currentTarget.src = defaultImage;
            }}
          />
        </div>

        <div className='flex-1 space-y-3'>
          <h3 className='text-lg font-semibold text-white line-clamp-2'>{title || 'Untitled'}</h3>

          {preview && <p className='text-gray-300 text-sm line-clamp-2'>{preview}</p>}

          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <span key={tag} className='px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-md'>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className='flex items-center justify-between pt-2'>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400 text-sm'>
                {createdAt ? new Date(createdAt).toLocaleDateString() : 'Date not available'}
              </span>
            </div>
            {votes !== undefined && (
              <div className='flex items-center gap-2'>
                <span className='text-purple-400 text-sm'>{votes} votes</span>
              </div>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
