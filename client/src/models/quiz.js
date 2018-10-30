const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function (url){
  this.url = url;
  this.questions = [];
}

Quiz.prototype.bindEvents = function () {

  PubSub.subscribe('QuizListView:answers-submitted', (event)=>{
    const answersArray = event.detail;
    console.log(this.questions);
    const correctAnswers = this.findCorrectAnswers(this.questions);
    console.log(correctAnswers);
    // this.calculateScore(answersArray, correctAnswers)
//     // const form = document.querySelectorAll("form")
//     // const form2 = form.elements("5bd49b2de511ee046c4338bc")
//     // console.log(form2);
//     // this.findScore(answersObject);
  });
//
};

Quiz.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((data) => {
      console.log(data);
      PubSub.publish('Quiz:data-loaded', data);
      this.questions = data;
    })
    .catch(console.error);
};

Quiz.prototype.findCorrectAnswers = function (questions) {
  const newThing = this.questions.map((question)=> question.correct_answer)
  console.log(newThing);
  return newThing
};


module.exports = Quiz;
