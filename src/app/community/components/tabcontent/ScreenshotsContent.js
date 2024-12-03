import React from 'react';

const ScreenshotsContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {/* 스크린샷 갤러리 형태의 컨텐츠 */}
      <div className='bg-[#2d2d3a] rounded-lg p-4'>
        <div className='aspect-video bg-[#1a1b1e] rounded-md mb-2'></div>
        <p className='text-gray-200'>유저 스크린샷 제목</p>
      </div>
    </div>
  );
};

export default ScreenshotsContent;
