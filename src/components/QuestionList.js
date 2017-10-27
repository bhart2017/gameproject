import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';

const QuestionList = ({ questions, handleAnswerClick }) => {
  return (
    <div className="question-list">
      {questions.map(question => {
        return (
          <Question
            key={question.question.props.children.toString()}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default QuestionList;
