'use client';

import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';
import Image from 'next/image';
import { useColorMode } from '@chakra-ui/react';

const ScreenshotsContent = () => {
  const { screenshotCategories, mockScreenshots, filters, handleSearch } = useGameCommunity();
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredScreenshots = mockScreenshots.filter((screenshot) => {
    const matchesSearch = filters.searchQuery
      ? screenshot.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        screenshot.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      : true;
    const matchesCategory = selectedCategory === 'all' || screenshot.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const lightboxImages = filteredScreenshots.map((screenshot) => ({
    src: screenshot.imageUrl,
    alt: screenshot.title,
    width: 1920,
    height: 1080,
  }));

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={`min-h-screen ${colorMode === 'dark' ? 'bg-[#171923]' : 'bg-gray-50'}`}>
      <div className='mb-6'>
        <SearchBar onSearch={handleSearch} />

        <div className='flex gap-2 mt-4 overflow-x-auto pb-2'>
          {screenshotCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
                          ${
                            selectedCategory === category.value
                              ? 'bg-purple-600 text-white'
                              : 'bg-[#2d2d3a] text-gray-300 hover:bg-[#3d3d4a]'
                          }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredScreenshots.map((screenshot, index) => (
          <div key={screenshot.id} className='bg-[#2d2d3a] rounded-lg overflow-hidden'>
            <div className='aspect-video relative cursor-pointer group' onClick={() => handleImageClick(index)}>
              <Image
                src={screenshot.imageUrl || '/pattern/placeholder-game.png'}
                alt={screenshot.title}
                width={400} // 적절한 크기로 조정
                height={300} // 적절한 크기로 조정
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 group-hover:scale-105 transition-opacity duration-300' />
            </div>

            <div className='p-4'>
              <h3 className='text-gray-200 font-semibold mb-2'>{screenshot.title}</h3>
              <p className='text-gray-400 text-sm mb-3'>{screenshot.description}</p>

              <div className='flex items-center justify-between text-gray-400 text-sm'>
                <div className='flex items-center gap-4'>
                  <button className='flex items-center gap-1 hover:text-purple-500'>
                    <Heart className='w-4 h-4' />
                    <span>{screenshot.likes}</span>
                  </button>
                  <button className='flex items-center gap-1 hover:text-purple-500'>
                    <MessageCircle className='w-4 h-4' />
                    <span>댓글</span>
                  </button>
                  <button className='flex items-center gap-1 hover:text-purple-500'>
                    <Share2 className='w-4 h-4' />
                    <span>공유</span>
                  </button>
                </div>
                <span className='text-gray-500'>by {screenshot.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={lightboxImages}
        plugins={[Zoom]}
        animation={{ fade: 300 }}
        carousel={{ finite: filteredScreenshots.length <= 1 }}
      />
    </div>
  );
};

export default ScreenshotsContent;
