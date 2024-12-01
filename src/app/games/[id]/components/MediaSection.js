import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export function MediaSection({ game }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!game?.screenshots?.length) {
    return (
      <div id='media' className='mb-16'>
        <h2 className='text-2xl font-bold mb-4'>미디어</h2>
        <p className='text-gray-400'>사용 가능한 스크린샷이 없습니다.</p>
      </div>
    );
  }

  const slides = game.screenshots.map((screenshot) => ({
    src: screenshot.image,
    width: screenshot.width || 1920,
    height: screenshot.height || 1080,
  }));

  return (
    <div id='media' className=''>
      <h2 className='text-2xl font-bold mb-4'>미디어</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {game.screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className='relative h-48 group cursor-pointer overflow-hidden'
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              src={screenshot.image}
              alt='게임 스크린샷'
              fill
              className='object-cover rounded-lg transition-transform duration-300 group-hover:scale-105'
            />
            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center'>
              <div className='flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Maximize2 className='w-5 h-5 text-gray-700' />
                <span className='text-gray-700 font-medium'>크게 보기</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Gallery */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        animation={{ fade: 300 }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          padding: 4,
          border: 2,
          borderRadius: 4,
        }}
        carousel={{
          finite: game.screenshots.length <= 1,
          preload: 1,
        }}
        render={{
          iconZoomIn: () => (
            <div className='flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 rounded-lg'>
              <ZoomIn className='w-5 h-5' />
              <span className='text-sm'>확대</span>
            </div>
          ),
          iconZoomOut: () => (
            <div className='flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 rounded-lg'>
              <ZoomOut className='w-5 h-5' />
              <span className='text-sm'>축소</span>
            </div>
          ),
          iconPrev: () => (
            <div className='flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 rounded-lg'>
              <ChevronLeft className='w-5 h-5' />
              <span className='text-sm'>이전</span>
            </div>
          ),
          iconNext: () => (
            <div className='flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 rounded-lg'>
              <ChevronRight className='w-5 h-5' />
              <span className='text-sm'>다음</span>
            </div>
          ),
          iconClose: () => (
            <div className='flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 rounded-lg'>
              <X className='w-5 h-5' />
              <span className='text-sm'>닫기</span>
            </div>
          ),
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
        }}
      />
    </div>
  );
}
