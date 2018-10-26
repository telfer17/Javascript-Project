const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(container){
  this.container = container;
}

PlanetView.prototype.render = function (planetItem) {

  const planetItemElement = document.createElement('div');
  planetItemElement.id = 'planetItem';

  this.createImg(planetItem);

  const title = this.createTitle(planetItem.name);
  planetItemElement.appendChild(title);

  this.container.appendChild(planetItemElement);
};



PlanetView.prototype.createImg = function (planet) {
const img = document.createElement('img')
img.src = planet.image
img.alt = planet.name
img.classList.add("planet-image");
this.container.appendChild(img)
};


PlanetView.prototype.createTitle = function (text) {
  const title = document.createElement('h2');
  title.textContent = text;
  return title;
};

module.exports = PlanetView;
