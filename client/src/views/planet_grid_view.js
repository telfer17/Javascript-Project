const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const PlanetView = require('./planet_view.js');

const PlanetGridView = function(container){
  this.container = container;
};

PlanetGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Planet:data-loaded', (event) => {
    this.render(event.detail);
  })

};

PlanetGridView.prototype.render = function (planetItems) {
  // this.container.innerHTML = '';
  const planetView = new PlanetView(this.container);
  planetItems.forEach((planetItem) => planetView.render(planetItem))

};


module.exports = PlanetGridView;
