const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function (url){
  this.url = url;
  this.questions = [];
}

Quiz.prototype.bindEvents = function () {

  PubSub.subscribe('QuizListView:answers-submitted', (event)=>{
    const answersArray = event.detail;
    const correctAnswers = this.findCorrectAnswers(this.questions);
    this.calculateScore(answersArray, correctAnswers);

  });

};

Quiz.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((data) => {
      PubSub.publish('Quiz:data-loaded', data);
      this.questions = data;
    })
    .catch(console.error);
};

Quiz.prototype.findCorrectAnswers = function (questions) {
  const correctAnswers = this.questions.map((question) => question.correct_answer)
  return correctAnswers
};

Quiz.prototype.calculateScore = function (correct, submitted) {
  counter = 0
  for (i=0; i < correct.length; i++){
    if (correct[i] === submitted[i]){
      counter += 1
    }
  };
  PubSub.publish('Quiz:scoreCalculated', counter);
  return counter
};


module.exports = Quiz;
