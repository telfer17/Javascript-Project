const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(container){
  this.container = container;
}

PlanetView.prototype.render = function (planetItem) {

  const planetItemElement = document.createElement('div');
  planetItemElement.classList.add('planet-item');

  const image = this.createImg(planetItem.image);
  planetItemElement.appendChild(image);

  const title = this.createTitle(planetItem.name);
  planetItemElement.appendChild(title);

  const planetDetails = document.createElement('div');
  planetDetails.classList.add('planet-details');

  const position = this.createDetail('Position from Sun', planetItem.position);
  planetDetails.appendChild(position);

  const orbit = this.createDetail('Orbit', planetItem.orbit);
  planetDetails.appendChild(orbit);

  const surface = this.createDetail('Surface Area', planetItem.surfaceArea);
  planetDetails.appendChild(surface);

  const volume = this.createDetail('Volume', planetItem.volume);
  planetDetails.appendChild(volume);

  const mass = this.createDetail('Mass', planetItem.mass);
  planetDetails.appendChild(mass);

  const displayInfo = document.createElement('input');
  displayInfo.setAttribute('value', 'More Info')
  displayInfo.setAttribute('id', `${planetItem._id}`)
  displayInfo.setAttribute('type', 'button');
  planetItemElement.appendChild(displayInfo);



  displayInfo.addEventListener('click', (event) => {
    debugger;
    if (displayInfo.value ==='More Info'){

        planetItemElement.appendChild(planetDetails);
        displayInfo.setAttribute('value', 'Less info');
      }
      else {
        planetDetails.innerHTML = '';
        displayInfo.setAttribute('value', 'More Info');
      }
  })


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
