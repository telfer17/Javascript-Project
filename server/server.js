const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('solarsystem');
    const planetInfoCollection = db.collection('planet_info');
    const planetInfoRouter = createRouter(planetInfoCollection);
    const planetQuestionsCollection = db.collection('planet_questions');
    const planetQuestionsRouter = createRouter(planetQuestionsCollection);
    app.use('/api/solarsystem', planetInfoRouter);
    app.use('/api/questions', planetQuestionsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
