const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(container){
  this.container = container;
};

PlanetView.prototype.render = function (planetItem) {

  const planetItemElement = document.createElement('div');
  planetItemElement.id = 'planet-item';

  const image = this.createImg(planetItem.image);
  planetItemElement.appendChild(image);

  const title = this.createTitle(planetItem.name);
  planetItemElement.appendChild(title);

  const expandedView = document.createElement('button');
  expandedView.textContent = 'More info';
  planetItemElement.appendChild(expandedView);

  expandedView.addEventListener('click', (event)=>{
    planetInfo = planetItem.name;
    console.log('hello', planetInfo);
    PubSub.publish('PlanetView:expandRequested', planetInfo)

  });



  this.container.appendChild(planetItemElement);
};


PlanetView.prototype.renderDetailed = function (planetItem) {

  const planetItemElement = document.createElement('div');
  planetItemElement.id = 'Detailed-item';

  const image = this.createImg(planetItem.image);
  planetItemElement.appendChild(image);

  const title = this.createTitle(planetItem.name);
  planetItemElement.appendChild(title);

  const pos = this.createPTag('Position from Sun: ', `${planetItem.position}`);
  console.log('hi', pos, planetItem.position);
  planetItemElement.appendChild(pos);
  const orbit = this.createPTag('Orbital period: ', planetItem.orbit);
  planetItemElement.appendChild(orbit);
  const sArea = this.createPTag('Surface Area: ', planetItem.surfaceArea);
  planetItemElement.appendChild(sArea);
  const vol = this.createPTag('Volume: ', planetItem.volume);
  planetItemElement.appendChild(vol);
  const mass = this.createPTag('Mass: ', planetItem.mass);
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
  title.classList.add('planet-header')
  return title;
};

PlanetView.prototype.createPTag = function (key, value) {
  const detail = document.createElement('p')
  detail.textContent = `${key} ${value}`;

  return detail
};



module.exports = PlanetView;
