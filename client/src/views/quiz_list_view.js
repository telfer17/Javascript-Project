const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');

const QuizListView = function(container) {
  this.container = container;
};

QuizListView.prototype.bindEvents = function () {
  // add and eventlistener to the button click to displey the quiz on the new page
  document.getElementById('quiz-button').addEventListener('click', (event)=>
    PubSub.subscribe('Quiz:data-loaded', (event)=> {
      console.log(event.detail);
      this.render(event.detail)
    })
  );
};

QuizListView.prototype.render = function (questions) {
  // this.container.innerHTML = '';
  const questionView = new QuestionView(this.container);
  questions.forEach((question)=>{
    questionView.render(question);
  })

};

module.exports = QuizListView;
