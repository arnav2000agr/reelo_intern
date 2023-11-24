class Question {
    constructor(_id, question, subject, topic, difficulty, marks) {
      this._id = _id;
      this.question = question;
      this.subject = subject;
      this.topic = topic;
      this.difficulty = difficulty;
      this.marks = marks;
    }
  }
  
  module.exports = Question;
  