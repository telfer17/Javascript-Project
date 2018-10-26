const Planet = require('./models/planet.js');

document.addEventListener('DOMContentLoaded', () => {

  const planet = new Planet('http://localhost:3000/api/solarsystem');
  planet.getData();


});
