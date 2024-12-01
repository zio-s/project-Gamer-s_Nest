import { Star } from 'lucide-react';

export const ReviewsSection = ({ game }) => {
  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-4'>
        <div className='text-4xl font-bold flex items-center'>
          {game?.rating}
          <Star className='w-8 h-8 text-yellow-400 fill-current ml-2' />
        </div>
        <span className='text-gray-400'>{game?.ratings_count?.toLocaleString()} 개의 평가</span>
      </div>

      <div className='space-y-4'>
        {game?.ratings?.map((rating) => (
          <div key={rating.id} className='space-y-2'>
            <div className='flex justify-between'>
              <span>{rating.title}</span>
              <span>{rating.percent}%</span>
            </div>
            <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
              <div className='h-full bg-blue-400' style={{ width: `${rating.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
