const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Planet = function(url) {
  this.url = url;
};


Planet.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((data) => {
    PubSub.publish('Planet:data-loaded', data);
  })
  .catch(console.error);
};



module.exports = Planet;
