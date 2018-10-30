const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');

const QuizListView = function(container) {
  this.container = container;
};

QuizListView.prototype.bindEvents = function () {
  this.container.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
    PubSub.publish('QuizListView:answers-submitted', (event))
  });

  // })
  // add and eventlistener to the button click to displey the quiz on the new page
  // document.getElementById('quiz-button').addEventListener('click', (event)=>
    PubSub.subscribe('Quiz:data-loaded', (event)=> {
      this.render(event.detail)
    })
};

QuizListView.prototype.render = function (questions) {
  // this.container.innerHTML = '';
  const questionView = new QuestionView(this.container);
  questions.forEach((question)=>{
    questionView.renderQuestions(question);
  })


};

module.exports = QuizListView;
