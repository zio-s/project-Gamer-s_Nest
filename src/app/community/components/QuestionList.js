'use client';

import { useGameCommunity } from '@/contexts/FilterContext';
import QuestionCard from './QuestionCard';

const QuestionList = () => {
  const { posts, loading } = useGameCommunity();
  return (
    <main className='flex-1'>
      <div className='space-y-4'>
        {posts.map((post) => (
          <QuestionCard key={post.id} question={post} />
        ))}
        {loading && (
          <div className='text-center py-4'>
            <div className='w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuestionList;
