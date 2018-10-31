const PubSub = require('../helpers/pub_sub.js');

const QuizResult = function(container) {
  this.container = container;
};

  QuizResult.prototype.bindEvents = function () {
    PubSub.subscribe('Quiz:scoreCalculated', (event)=>{
      const totalScore = event.detail;
      console.log(totalScore);
      this.render(totalScore)
    })

  };

  QuizResult.prototype.render = function (score) {

    const result = document.createElement('h3');
    result.id = 'show-result';
    result.textContent = `Your total score is ${score}!`
    this.container.appendChild(result);
  };




module.exports = QuizResult;
