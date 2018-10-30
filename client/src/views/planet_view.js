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

  const position = this.createDetail('Position from Sun', planetItem.position);
  planetItemElement.appendChild(position);

  const orbit = this.createDetail('Orbit', planetItem.orbit);
  planetItemElement.appendChild(orbit);

  const surface = this.createDetail('Surface Area', planetItem.surfaceArea);
  planetItemElement.appendChild(surface);

  const volume = this.createDetail('Volume', planetItem.volume);
  planetItemElement.appendChild(volume);

  const mass = this.createDetail('Mass', planetItem.mass);
  planetItemElement.appendChild(mass);

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
  title.classList.add('planet-header');
  return title;
};

PlanetView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  detail.classList.add('planet-details');
  return detail;
};

module.exports = PlanetView;
