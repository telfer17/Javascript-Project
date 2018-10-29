const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(container){
  this.container = container;
}

PlanetView.prototype.render = function (planetItem) {

  const planetItemElement = document.createElement('div');
  planetItemElement.id = 'planet-item';

  const image = this.createImg(planetItem.image);
  planetItemElement.appendChild(image);

  const title = this.createTitle(planetItem.name);
  planetItemElement.appendChild(title);

  this.container.appendChild(planetItemElement);
};


PlanetView.prototype.createImg = function (planet) {
  const image = document.createElement('img')
  image.src = planet;
  image.classList.add('planet-image');
  return image;
};


PlanetView.prototype.createTitle = function (text) {
  const title = document.createElement('h2');
  title.textContent = text;
  title.classList.add('planet-header')
  return title;
};

module.exports = PlanetView;
