const readline = require('readline-sync');
const Question = require('./Question');
const QuestionService = require('./services/QuestionService');
const QuestionPaperService = require('./services/QuestionPaperService');
const questionsData = require('./Assets/questions_store');


const questions = questionsData.map(q => new Question(q._id, q.question, q.subject, q.topic, q.difficulty, q.marks));

// Initializing services
const questionService = new QuestionService();
const questionPaperService = new QuestionPaperService(questionService);

// Add questions to the question store
questions.forEach(question => {
    questionService.addQuestion(question);
});

// Get user input for total marks and the percentage of easy, medium, and hard questions
const totalMarks = parseInt(readline.question('Enter total marks for the question paper: '));
const easyPercentage = parseFloat(readline.question('Enter the percentage of easy questions: '));
const mediumPercentage = parseFloat(readline.question('Enter the percentage of medium questions: '));
const hardPercentage = parseFloat(readline.question('Enter the percentage of hard questions: '));


const totalPercentage = easyPercentage + mediumPercentage + hardPercentage;
if (totalPercentage !== 100) {
    console.log('Error: The sum of percentages must be equal to 100.');
    process.exit(1);
}

const easyMarks = 5;
const mediumMarks = 10;
const hardMarks = 15;

const numEasyQuestions = Math.round((easyPercentage / 100) * (totalMarks / easyMarks));
const numMediumQuestions = Math.round((mediumPercentage / 100) * (totalMarks / mediumMarks));
const numHardQuestions = Math.round((hardPercentage / 100) * (totalMarks / hardMarks));

// Generate a question paper based on responses
const questionPaper = questionPaperService.generateCustomQuestionPaper(
    numEasyQuestions,
    numMediumQuestions,
    numHardQuestions
);

// Display the generated question paper
console.log("Generated Question Paper:");
questionPaper.forEach((question, index) => {
    console.log(`${index + 1}. ${question.question} (${question.marks} marks)`);
});
