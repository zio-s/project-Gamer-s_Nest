import QuestionCard from './QuestionCard';

const QuestionList = ({ questions }) => {
  return (
    <div className='space-y-4'>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
