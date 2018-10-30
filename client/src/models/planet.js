const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Planet = function(url) {
  this.url = url;
  this.data = [];
};

Planet.prototype.bindEvents = function () {
  PubSub.subscribe('PlanetView:expandRequested', (event)=>{
    const planetClicked = event.detail;
    const planet = this.findPlanet(planetClicked);
    PubSub.publish('Planet:planetReady', planet);
  })
};

Planet.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((data) => {
    PubSub.publish('Planet:data-loaded', data);
    this.data = data;
    console.log(this.data);
  })

  .catch(console.error);
};

Planet.prototype.findPlanet = function (planetName) {

  const planetData = this.data.filter((planet)=>{
    return planet.name === planetName
  });
  return planetData;

};





module.exports = Planet;
