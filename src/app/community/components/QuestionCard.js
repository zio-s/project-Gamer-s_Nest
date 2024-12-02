import Image from 'next/image';

const QuestionCard = ({ question }) => {
  const defaultImage = 'https://via.placeholder.com/120';
  return (
    <div className='bg-[#2d2d3a] rounded-lg shadow-lg p-4'>
      <div className='flex gap-4'>
        <Image
          src={question.gameImage || defaultImage}
          alt={question.title || 'Game image'}
          width={500} // w-32에 해당 (32 * 4 = 128px)
          height={500}
          sizes='100' // h-32에 해당
          className='object-cover w-32 h-32 rounded-lg'
          onError={(e) => {
            e.target.src = defaultImage; // 이미지 로드 실패시 기본 이미지로 대체
          }}
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-white'>{question.title || 'Untitled'}</h3>
          <p className='text-gray-300 text-sm mt-2'>{question.preview || 'No description available'}</p>
          <div className='flex flex-wrap gap-2 mt-3'>
            {question.tags?.map((tag) => (
              <span
                key={tag}
                className='px-2 py-1 bg-purple-900/30 text-purple-300 
                                      text-xs rounded-md'
              >
                {tag}
              </span>
            )) || <span className='text-gray-400'>No tags</span>}
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400'>
                {question.createdAt ? new Date(question.createdAt).toLocaleDateString() : 'Date not available'}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-purple-400'>{question.votes || 0} votes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
