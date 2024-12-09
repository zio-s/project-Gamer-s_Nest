import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#121213]'>
      <style jsx>{``}</style>

      <div className='relative flex flex-col items-center'>
        <div className='loader' />
        <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-medium'>
          Loading...
        </h3>
      </div>
    </div>
  );
};

export default LoadingSpinner;
