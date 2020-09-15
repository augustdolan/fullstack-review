const express = require('express');
let app = express();
const cors = require('cors');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  helpers.getReposByUsername(req, res)
    .then((reposData) => {
      console.log('get repos is running')
      // console.log(reposData);
      db.save();
      res.send('got it');
    })
    .catch((errMessage) => {
      res.send(errMessage);
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

