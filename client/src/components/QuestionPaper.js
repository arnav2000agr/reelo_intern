import React from 'react';
import './questiondisplay.css';

const QuestionPaper = ({ questionPaper }) => {
  return (
    <div className='container'>
      <h2>Generated Question Paper</h2>
        <ul>
        {questionPaper.map((question, index) => (
          <li key={index}>{`${index + 1}. ${question.question} (${question.marks} marks)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPaper;
