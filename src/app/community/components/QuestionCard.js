const QuestionCard = ({ question }) => {
  return (
    <div
      className='bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4 
                    hover:border-purple-500 border border-transparent'
    >
      <div className='flex gap-4'>
        <div className='flex flex-col items-center gap-2 min-w-[80px]'>
          <div className='text-center'>
            <div className='text-xl font-bold text-gray-300'>{question.votes}</div>
            <div className='text-xs text-gray-500'>votes</div>
          </div>
          <div className='text-center'>
            <div className='text-xl font-bold text-purple-400'>{question.answers}</div>
            <div className='text-xs text-gray-500'>answers</div>
          </div>
        </div>

        <div className='flex-1'>
          <h3 className='text-lg font-semibold mb-2 text-gray-100 hover:text-purple-400 cursor-pointer'>
            {question.title}
          </h3>
          <p className='text-gray-400 text-sm mb-4'>{question.preview}</p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-2 py-1 bg-purple-900/30 text-purple-300 
                           text-xs rounded-md hover:bg-purple-900/50 cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <img src={question.userAvatar} alt='User avatar' className='w-6 h-6 rounded-full' />
              <span>
                asked {question.timeAgo} by {question.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
