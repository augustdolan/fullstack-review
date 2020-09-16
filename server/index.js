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
      let dbInfo = reposData.map((repo) => {
        const {id, full_name, html_url, created_at, forks_count, stargazers_count} = repo;

        return {id, full_name, html_url, created_at, forks_count, stargazers_count}
      })
      db.save(dbInfo)
        .then(() => {
          res.send('got it');
        })
    })
    .catch((errMessage) => {
      res.send(errMessage);
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTopRepos()
    .then((repos) => {
      console.log('this is repos from get controller: ', repos)
      res.status(200).json(repos);
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

