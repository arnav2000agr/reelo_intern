class QuestionPaperService {
    constructor(questionService) {
      this.questionService = questionService;
    }
  
    generateCustomQuestionPaper(numEasyQuestions, numMediumQuestions, numHardQuestions) {
      const questions = this.questionService.getQuestions();
      const easyQuestions = this.filterQuestionsByDifficulty(questions, 'Easy');
      const mediumQuestions = this.filterQuestionsByDifficulty(questions, 'Medium');
      const hardQuestions = this.filterQuestionsByDifficulty(questions, 'Hard');
  
      const selectedQuestions = []
        .concat(this.getRandomQuestions(easyQuestions, numEasyQuestions))
        .concat(this.getRandomQuestions(mediumQuestions, numMediumQuestions))
        .concat(this.getRandomQuestions(hardQuestions, numHardQuestions));
  
      return selectedQuestions;
    }
  
    filterQuestionsByDifficulty(questions, difficulty) {
      return questions.filter(question => question.difficulty === difficulty);
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = this.shuffleArray(questions);
      return shuffledQuestions.slice(0, count);
    }
  
    shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  }
  
  module.exports = QuestionPaperService;
  