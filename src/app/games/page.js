'use client';

import { Suspense } from 'react';
import GamesContent from './GamesContent';

export default function GamesPage() {
  return (
    <Suspense
      fallback={
        <div className='container mx-auto px-4 py-8 flex justify-center'>
          <div className='text-center'>Loading...</div>
        </div>
      }
    >
      <GamesContent />
    </Suspense>
  );
}
