const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Question = require('./Question');
const QuestionService = require('./services/QuestionService');
const QuestionPaperService = require('./services/QuestionPaperService');
const questionsData = require('./Assets/questions_store');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const questions = questionsData.map(q => new Question(q._id, q.question, q.subject, q.topic, q.difficulty, q.marks));

// Initializing services
const questionService = new QuestionService();
const questionPaperService = new QuestionPaperService(questionService);

questions.forEach(question => {
    questionService.addQuestion(question);
});

const easyMarks = 5;
const mediumMarks = 10;
const hardMarks = 15;




app.post('/generate-question-paper', (req, res) => {
    try {
      const { totalMarks, easyPercentage, mediumPercentage, hardPercentage } = req.body;

      // Perform calculations to generate the question paper
      const numEasyQuestions = Math.floor((easyPercentage / 100) * (totalMarks / easyMarks));
      const numMediumQuestions = Math.floor((mediumPercentage / 100) * (totalMarks / mediumMarks));
      const numHardQuestions = Math.floor((hardPercentage / 100) * (totalMarks / hardMarks));
  
      // Use your existing logic to generate the question paper
      const generatedQuestionPaper = questionPaperService.generateCustomQuestionPaper(
        numEasyQuestions,
        numMediumQuestions,
        numHardQuestions
      );
  
      // Return the generated question paper
      res.json({ questionPaper: generatedQuestionPaper });
    } catch (error) {
      console.error('Error generating question paper:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});













