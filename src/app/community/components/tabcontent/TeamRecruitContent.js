import React from 'react';

const TeamRecruitContent = () => {
  return (
    <div className='space-y-4 p-4'>
      <div className='bg-[#2d2d3a] rounded-lg p-4'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-purple-400 font-semibold'>레이드 파티 모집</h3>
          <span className='text-green-400 text-sm'>모집중</span>
        </div>
        <p className='text-gray-200 text-sm mb-2'>필요 역할: 탱커 1, 힐러 1</p>
        <div className='flex gap-2'>
          <span className='px-2 py-1 bg-[#1a1b1e] rounded text-xs text-gray-300'>레벨 60+</span>
          <span className='px-2 py-1 bg-[#1a1b1e] rounded text-xs text-gray-300'>음성채팅 필수</span>
        </div>
      </div>
    </div>
  );
};

export default TeamRecruitContent;
