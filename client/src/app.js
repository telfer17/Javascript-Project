const Planet = require('./models/planet.js');
const PlanetGridView = require('./views/planet_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const planet = new Planet('http://localhost:3000/api/solarsystem');
  planet.getData();

  const planetContainer = document.querySelector('#planets');
  const planetGridView = new PlanetGridView(planetContainer);
  planetGridView.bindEvents();


});
