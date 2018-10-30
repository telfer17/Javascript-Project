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

  PubSub.subscribe('Planet:planetReady', (event)=>{
    console.log(event.detail);
    this.renderDetailed(event.detail);
  })

};

PlanetGridView.prototype.render = function (planetItems) {
  // this.container.innerHTML = '';
  const planetView = new PlanetView(this.container);
  planetItems.forEach((planetItem) => planetView.render(planetItem))

};

PlanetGridView.prototype.renderDetailed = function (planetItem) {
  this.container.innerHTML = '';
  const planetView = new PlanetView(this.container);
  planetView.renderDetailed(planetItem)


};



module.exports = PlanetGridView;
