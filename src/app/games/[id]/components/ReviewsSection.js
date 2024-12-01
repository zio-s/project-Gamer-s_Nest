import { useState } from 'react';

import { MessageCircle, Star, ThumbsUp } from 'lucide-react';
import { translateRating, translateReviewPlatform, translateReviewTitle } from '@/utils/translations';

export function ReviewsSection({ game }) {
  const [expandedReviews, setExpandedReviews] = useState([]);

  const toggleReview = (id) => {
    setExpandedReviews((prev) => (prev.includes(id) ? prev.filter((reviewId) => reviewId !== id) : [...prev, id]));
  };

  // 리뷰 평가에 따른 색상 결정
  const getRatingColor = (rating) => {
    const colorMap = {
      exceptional: 'text-green-400',
      recommended: 'text-blue-400',
      meh: 'text-yellow-400',
      skip: 'text-red-400',
    };
    return colorMap[rating] || 'text-gray-400';
  };

  // 리뷰 작성 시간 포맷
  const formatReviewDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  if (!game?.reviews_count) {
    return (
      <div id='reviews' className='py-8'>
        <h2 className='text-2xl font-bold mb-4'>리뷰</h2>
        <p className='text-gray-400'>아직 리뷰가 없습니다.</p>
      </div>
    );
  }

  return (
    <div id='reviews' className='py-8'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold'>리뷰</h2>
        <div className='flex items-center gap-2'>
          <Star className='w-5 h-5 text-yellow-400 fill-current' />
          <span className='font-medium'>{game.rating}/5</span>
          <span className='text-gray-400'>({game.reviews_count}개의 리뷰)</span>
        </div>
      </div>

      <div className='space-y-6'>
        {game.reviews?.map((review) => (
          <div key={review.id} className='bg-gray-800 rounded-lg p-6'>
            <div className='flex items-start justify-between mb-4'>
              <div className='flex items-start gap-4'>
                {review.user?.avatar ? (
                  <img src={review.user.avatar} alt={review.user.username} className='w-12 h-12 rounded-full' />
                ) : (
                  <div className='w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center'>
                    <span className='text-xl font-bold'>{review.user?.username?.[0]?.toUpperCase()}</span>
                  </div>
                )}
                <div>
                  <h3 className='font-medium'>{review.user?.username}</h3>
                  <p className='text-sm text-gray-400'>{translateReviewPlatform(review.platform?.name)}에서 플레이</p>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className={`text-sm font-medium ${getRatingColor(review.rating)}`}>
                      {translateRating(review.rating)}
                    </span>
                    <span className='text-gray-500'>•</span>
                    <span className='text-sm text-gray-400'>{formatReviewDate(review.created)}</span>
                  </div>
                </div>
              </div>
            </div>

            {review.title && <h4 className='font-medium mb-2'>{translateReviewTitle(review.title)}</h4>}

            <div className={`text-gray-300 ${expandedReviews.includes(review.id) ? '' : 'line-clamp-3'}`}>
              {review.text}
            </div>

            {review.text?.length > 150 && (
              <button
                className='text-blue-400 hover:text-blue-300 text-sm mt-2'
                onClick={() => toggleReview(review.id)}
              >
                {expandedReviews.includes(review.id) ? '접기' : '더 보기'}
              </button>
            )}

            <div className='flex items-center gap-4 mt-4'>
              <button className='flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors'>
                <ThumbsUp className='w-4 h-4' />
                {review.likes_count || 0}
              </button>
              <button className='flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors'>
                <MessageCircle className='w-4 h-4' />
                {review.comments_count || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
