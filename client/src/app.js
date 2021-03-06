const Planet = require('./models/planet.js');
const PlanetGridView = require('./views/planet_grid_view.js');
const Quiz = require('./models/quiz.js');
const QuizListView = require('./views/quiz_list_view.js');
const QuizResult = require('./views/result.js');

document.addEventListener('DOMContentLoaded', () => {

if(document.querySelectorAll('#planets').length){

  const planet = new Planet('http://localhost:3000/api/solarsystem');
  planet.getData();

  const planetContainer = document.querySelector('#planets');
  const planetGridView = new PlanetGridView(planetContainer);
  planetGridView.bindEvents();
} else {

  const quiz = new Quiz('http://localhost:3000/api/questions');
  quiz.getData();
  quiz.bindEvents();

  const quizContainer = document.querySelector('#planet-quiz');
  const quizListView = new QuizListView(quizContainer);
  quizListView.bindEvents();

  const resultContainer = document.querySelector('#quiz-result');
  const quizResult = new QuizResult(resultContainer);
  quizResult.bindEvents();
}


});
