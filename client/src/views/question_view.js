const PubSub = require('../helpers/pub_sub.js');


const QuestionView = function (container) {
  this.container = container;
}

QuestionView.prototype.renderQuestions = function (questionObject) {

  const questionElement = document.createElement('div');
  questionElement.id = 'question-item';

  const questionTitle = this.createQuestion(questionObject.question);
  questionElement.appendChild(questionTitle);

  const answerList = this.showAnswers(questionObject.answers);
  questionElement.appendChild(answerList);

  this.container.appendChild(questionElement);

};

QuestionView.prototype.createQuestion = function (text) {

  const questionText = document.createElement('h2');
  questionText.textContent = text;
  questionText.classList.add('question-text')
  return questionText;

};

QuestionView.prototype.showAnswers = function (answersArray) {
  let ul = document.createElement('ul');
  answersArray.forEach((answer)=>{
    // create an html element
    const listItem = document.createElement('li');
    // set the textContent of it
    listItem.textContent = answer;
    // add a radio button
    const choiceSelection = document.createElement('input');

    choiceSelection.setAttribute('type', 'radio');
    choiceSelection.setAttribute('name', `${answersArray}`);

    //append the element to the ul
    ul.appendChild(listItem);
    ul.appendChild(choiceSelection)
    //outside the loop, return the ul
  })
  return ul;


};


module.exports = QuestionView;
