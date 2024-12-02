import Image from 'next/image';

const QuestionCard = ({ question }) => {
  return (
    <div className='bg-[#2d2d3a] rounded-lg shadow-lg p-4'>
      <div className='flex gap-4'>
        <Image
          src={question.gameImage}
          alt={question.title}
          width={500} // w-32에 해당 (32 * 4 = 128px)
          height={500} // h-32에 해당
          className='object-cover w-32 h-32 rounded-lg'
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-white'>{question.title}</h3>
          <p className='text-gray-300 text-sm mt-2'>{question.preview}</p>
          <div className='flex flex-wrap gap-2 mt-3'>
            {question.tags.map((tag) => (
              <span
                key={tag}
                className='px-2 py-1 bg-purple-900/30 text-purple-300 
                                      text-xs rounded-md'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400'>Released: {new Date(question.createdAt).toLocaleDateString()}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-purple-400'>{question.votes} votes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
