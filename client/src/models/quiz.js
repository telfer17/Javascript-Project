const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function (url){
  this.url = url;
}

Quiz.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((data) => {
      console.log(data);
      PubSub.publish('Quiz:data-loaded', data);
    })
    .catch(console.error);
};

module.exports = Quiz;
