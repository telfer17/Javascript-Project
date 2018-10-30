const Planet = require('./models/planet.js');
const PlanetGridView = require('./views/planet_grid_view.js');
const Quiz = require('./models/quiz.js');
const QuizListView = require('./views/quiz_list_view.js');
const QuizResult = require('./views/result.js');

document.addEventListener('DOMContentLoaded', () => {

  // Do stuff ONLY related to the planet page
  if(document.querySelectorAll(".planet-container").length){
    const planet = new Planet('http://localhost:3000/api/solarsystem');
    planet.getData();
    planet.bindEvents();

    const planetContainer = document.querySelector('#planets');
    const planetGridView = new PlanetGridView(planetContainer);
    planetGridView.bindEvents();
  }else{
    // Do stuff ONLY related to the quiz page
    const quiz = new Quiz('http://localhost:3000/api/questions');
    quiz.getData();

    const quizContainer = document.querySelector('#planet-quiz');
    const quizListView = new QuizListView(quizContainer);
    quizListView.bindEvents();

    const resultContainer = document.querySelector('#quiz-result');
    const quizResult = new QuizResult(resultContainer);
    quizResult.bindEvents();
  }




});
