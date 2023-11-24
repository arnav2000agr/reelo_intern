class QuestionService {
    constructor() {
      this.questionStore = [];
    }
  
    addQuestion(question) {
      this.questionStore.push(question);
    }
  
    getQuestions() {
      return this.questionStore;
    }
  }
  
  module.exports = QuestionService;
  