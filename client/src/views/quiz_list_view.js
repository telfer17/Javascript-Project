const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');

const QuizListView = function(container) {
  this.container = container;
};

QuizListView.prototype.bindEvents = function () {

  this.container.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    this.findChecked();



  });
    // this.findChecked(event);
    // console.log(event);
  //   PubSub.publish('QuizListView:answers-submitted', (event))
  // });

  // })
  // add and eventlistener to the button click to displey the quiz on the new page
  // document.getElementById('quiz-button').addEventListener('click', (event)=>
    PubSub.subscribe('Quiz:data-loaded', (event)=> {
      this.render(event.detail);
    })

}

QuizListView.prototype.findChecked = function () {
  const form = document.querySelector("form");
  let answerArray = [];
  for(element of form.elements){
    if(element.type === "radio" && element.checked === true){
      answerArray.push(element.value);
    }
  }
  PubSub.publish('QuizListView:answers-submitted', answerArray);
  return answerArray;



}




QuizListView.prototype.render = function (questions) {

  const questionView = new QuestionView(this.container);
  questions.forEach((question)=>{
    questionView.renderQuestions(question);
  })


};

module.exports = QuizListView;
