const Planet = require('./models/planet.js');
const PlanetGridView = require('./views/planet_grid_view.js');
const Quiz = require('./models/quiz.js');
const QuizListView = require('./views/quiz_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const planet = new Planet('http://localhost:3000/api/solarsystem');
  planet.getData();

  const planetContainer = document.querySelector('#planets');
  const planetGridView = new PlanetGridView(planetContainer);
  planetGridView.bindEvents();

  const quiz = new Quiz('http://localhost:3000/api/questions');
  quiz.getData();

  const quizContainer = document.querySelector('#planet-quiz');
  const quizListView = new QuizListView(quizContainer);
  quizListView.bindEvents();

  const quizResult = document.querySelector('#quiz-result');
  quizResult.bindevents();


});
