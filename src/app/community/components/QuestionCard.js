'use client';
import { useGameCommunity } from '@/contexts/FilterContext';
import Image from 'next/image';

import { useState, useEffect } from 'react';

const QuestionCard = ({ question }) => {
  const { fetchPostGameDetails } = useGameCommunity();
  const [gameImage, setGameImage] = useState('https://via.placeholder.com/500');
  const defaultImage = 'https://via.placeholder.com/500';

  useEffect(() => {
    const loadGameImage = async () => {
      if (question.gameId) {
        try {
          const gameDetails = await fetchPostGameDetails(question.gameId);
          if (gameDetails?.background_image) {
            setGameImage(gameDetails.background_image);
          }
        } catch (error) {
          console.error('Failed to load game image:', error);
          setGameImage(defaultImage);
        }
      }
    };

    loadGameImage();
  }, [question.gameId]);

  return (
    <div className='bg-[#2d2d3a] rounded-lg shadow-lg p-4'>
      <div className='flex gap-4'>
        <Image
          src={gameImage}
          alt={question.title || 'Game image'}
          width={500}
          height={500}
          sizes='100'
          className='object-cover w-32 h-32 rounded-lg'
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-white'>{question.title || 'Untitled'}</h3>
          <p className='text-gray-300 text-sm mt-2'>{question.preview || 'No description available'}</p>
          <div className='flex flex-wrap gap-2 mt-3'>
            {question.tags?.map((tag) => (
              <span key={tag} className='px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-md'>
                {tag}
              </span>
            ))}
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400'>
                {question.createdAt ? new Date(question.createdAt).toLocaleDateString() : 'Date not available'}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-purple-400'>{question.votes || 0} votes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
