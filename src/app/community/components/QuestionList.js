'use client';
import { useEffect, useRef, useCallback } from 'react';
import { useFilter } from '@/contexts/FilterContext';
import QuestionCard from './QuestionCard';

const QuestionList = () => {
  const { questions, loading, hasMore, loadMore } = useFilter();
  const observer = useRef();

  const lastQuestionRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // 스크롤 위치 저장
          const currentScroll = window.scrollY;

          loadMore();

          // 스크롤 위치 복원
          requestAnimationFrame(() => {
            window.scrollTo(0, currentScroll);
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <main className='flex-1'>
      <div className='space-y-4'>
        {questions.map((question, index) => (
          <div key={question.id} ref={index === questions.length - 1 ? lastQuestionRef : null}>
            <QuestionCard question={question} />
          </div>
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
