const PubSub = require('../helpers/pub_sub.js');

const QuizResult = function(container) {
  this.container = container;
};

QuizResult.prototype.bindEvents = function () {
  PubSub.subscribe('QuizListView:answers-submitted', (event)=>{
    console.log('evt', event.detail);
    const answersSubmitted = event.detail;
    const selectedQuestion = document.getElementByName('Which planet is closest to the Sun?')
    // console.log(selectedQuestion);


  })
};



module.exports = QuizResult;
