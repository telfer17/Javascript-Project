const PubSub = require('../helpers/pub_sub.js');


const QuestionView = function (container) {
  this.container = container;
}

QuestionView.prototype.render = function (questionObject) {

  const questionElement = document.createElement('div');
  questionElement.id = 'question-item';

  const questionTitle = this.createQuestion(questionObject.question);
  questionElement.appendChild(questionTitle);

  this.container.appendChild(questionElement);

};

QuestionView.prototype.createQuestion = function (text) {

  const questionText = document.createElement('h2');
  questionText.textContent = text;
  questionText.classList.add('question-text')
  return questionText;

};
