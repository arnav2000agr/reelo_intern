import React, { useState } from 'react';
import DataEntry from './components/DataEntry';
import QuestionPaper from './components/QuestionPaper';

function App() {
  const [questionPaper, setQuestionPaper] = useState(null);
  

  const generateQuestionPaper = async (formData) => {
    // Sending a POST request to the backend
    const response = await fetch('http://localhost:5000/generate-question-paper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setQuestionPaper(data.questionPaper);
  };

  return (
    <div>
      <h1>Question Paper Generator</h1>
      <DataEntry onSubmit={generateQuestionPaper} />
      {questionPaper && <QuestionPaper questionPaper={questionPaper} />}
    </div>
  );
}

export default App;
